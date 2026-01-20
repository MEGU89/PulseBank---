# **PulseBank - Complete Project Workflow**

PulseBank is an **AI-powered blood donation management platform** that connects donors, hospitals, and recipients in real-time using smart matching algorithms, location detection, and scheduling capabilities.

---

## **1. SYSTEM ARCHITECTURE**

```
┌─────────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                          │
│  - React Components with Radix UI                                │
│  - Real-time Socket.IO integration                               │
│  - mongodb authentication                                       │
│  - Geolocation services                                          │
└──────────────────────────────┬──────────────────────────────────┘
                               │ API Calls
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                BACKEND (Node.js/Express)                         │
│  - RESTful API                                                   │
│  - Socket.IO for real-time updates                               │
│  - JWT authentication                                            │
│  - Email notifications (Nodemailer)                              │
│  - SMS notifications (google)                                    │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Database Operations
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                   DATABASE (MongoDB)                             │
│  - Users, Requests, Donations, DonationSchedules                │
└─────────────────────────────────────────────────────────────────┘
```

---

## **2. USER ROLES & REGISTRATION**

There are **3 main user types**:

| Role | Description | Key Functions |
|------|-------------|----------------|
| **Donor** | Blood donors available for donations | Register blood type, mark availability, view urgent requests, schedule donations, track history |
| **Hospital** | Medical facilities requesting blood | Create blood requests, manage inventory, view fulfilled requests, analyze stats |
| **Recipient** | Patients needing blood transfusions | Create urgent requests, track request status, communicate with hospitals |

**Registration Flow:**
```
User → Auth Page → Select Role (Donor/Hospital/Recipient)
  → Fill Profile (Name, Email, Phone, Location)
  → Blood Type (for Donors/Recipients)
  → Account Created + JWT Token
```

---

## **3. CORE DATA MODELS**

### **User Schema**
```javascript
{
  fullName,          // User's full name
  email,             // Unique email address
  password,          // Hashed password (minimum 6 chars)
  phone,             // Contact number
  bloodType,         // A+, A-, B+, B-, AB+, AB-, O+, O-
  role,              // donor | hospital | recipient
  hospitalId,        // For hospital accounts only
  available,         // True if donor is available for donation
  location: {        // GPS coordinates
    latitude,
    longitude
  },
  profileImage,      // Base64 encoded image
  address,           // For hospital/recipient profiles
  perks: [           // Health checkup perks after donations
    {
      type,          // "health_checkup"
      title,
      description,
      benefitDate,   // When perk becomes available
      expiryDate,    // 7 days after successful donation
      status,        // "available" | "used" | "expired"
      usedAt,        // When perk was redeemed
      donationDate,  // Reference to donation completion date
      claimedAt      // Hospital name where perk was used
    }
  ],
  lastHealthCheckupDate,  // Track last checkup (90-day eligibility)
  totalDonations,   // Count for rewards eligibility
  timestamps        // createdAt, updatedAt
}
```

### **Blood Request Schema**
```javascript
{
  bloodType,         // Blood type needed (A+, A-, B+, B-, AB+, AB-, O+, O-)
  unitsNeeded,       // Quantity of units required (minimum 1)
  hospital,          // Hospital requesting blood
  destinationHospital,  // For recipient requests
  urgency,           // "HIGH" | "MODERATE" | "LOW"
  locationKm,        // Distance parameter
  location: {        // GPS coordinates of hospital
    latitude,
    longitude
  },
  isRecipientRequest, // True if from recipient, false if from hospital
  status,            // "Pending" | "Fulfilled" | "Cancelled"
  requestedBy,       // User ID of recipient/hospital (ObjectId)
  recipientName,     // Name of recipient (for manual entry)
  confirmedBy,       // Donor who confirmed donation (ObjectId)
  confirmationStatus, // "Pending" | "Confirmed" | "Rejected"
  timestamps        // createdAt, updatedAt
}
```

### **Donation Schema**
```javascript
{
  donorId,           // Reference to donor (ObjectId, required)
  hospital,          // Hospital where donation occurred
  units,             // Units donated (minimum 1)
  date,              // Donation date (defaults to now)
  status,            // "Completed" | "Pending" | "Cancelled"
  timestamps        // createdAt, updatedAt (indexed for fast lookups)
}
```

### **Donation Schedule Schema**
```javascript
{
  donorId,           // Donor ID (ObjectId, required)
  requestId,         // Request ID (ObjectId, required)
  donorLocation: {   // Donor's current location
    latitude,
    longitude
  },
  contact,           // Contact information
  date,              // Scheduled date (format: DD-MM-YYYY)
  time,              // Scheduled time (format: HH:MM 24-hour)
  notes,             // Additional notes
  status,            // "pending" | "accepted" | "rejected" | "completed"
  hospitalResponse,  // "none" | "accepted" | "rejected"
  timestamps        // createdAt, updatedAt
}
```

---

## **4. CORE WORKFLOWS**

### **A. DONOR WORKFLOW**

#### **1. REGISTER**
```
Entry: Auth Page → Select "I Want to Donate"
  ↓
Input Details:
  • Full Name
  • Email (unique)
  • Phone
  • Blood Type (required)
  • Location (GPS or manual address)
  • Password (min 6 chars)
  ↓
Backend Processing:
  • Hash password with bcrypt
  • Validate blood type enum
  • Save to MongoDB User collection
  • Generate JWT token
  ↓
Exit: Redirect to Donor Dashboard
```

#### **2. MARK AVAILABILITY**
```
Endpoint: POST /donor/availability
Input: { donorId, available: true/false, currentLocation }
  ↓
Processing:
  • Update User.available = true
  • Update User.location with GPS coordinates
  • Broadcast via Socket.IO to all hospitals
  ↓
Result: Donor appears in matching algorithms for urgent requests
```

#### **3. VIEW URGENT REQUESTS**
```
Endpoint: GET /donor/requests
  ↓
Filtering:
  • Blood type compatible with donor's type
  • Location within 5-50 km radius
  • Status = "Pending"
  • urgency level (HIGH > MODERATE > LOW)
  ↓
Response: List of requests sorted by:
  1. Blood type match (40% weight)
  2. Distance proximity (40% weight)
  3. Urgency level (20% weight)
```

#### **4. SCHEDULE DONATION**
```
Endpoint: POST /schedule/create
Input: {
  requestId,
  donorId,
  proposedDate,    // DD-MM-YYYY
  proposedTime,    // HH:MM
  notes,
  donorLocation
}
  ↓
Processing:
  • Create DonationSchedule record
  • Set status = "pending"
  • hospitalResponse = "none"
  • Notify hospital via email + Socket.IO
  ↓
Result: Hospital reviews and accepts/rejects schedule
```

#### **5. DONATION COMPLETION (Automatic)**
```
Trigger: Cron job runs every minute
  ↓
Check: All DonationSchedule with status = "pending"
  ↓
For each pending schedule:
  • Parse date (DD-MM-YYYY) and time (HH:MM) in IST
  • Compare with current time
  • If scheduled time passed:
    ├─ Update DonationSchedule.status = "completed"
    ├─ Create Donation record:
    │   { donorId, hospital, units, date: now, status: "Completed" }
    ├─ Update Request.status = "Fulfilled"
    ├─ Update Request.confirmedBy = donorId
    ├─ Award Donor Perks:
    │   { type: "health_checkup", expiryDate: now + 7 days, status: "available" }
    ├─ Update User.totalDonations++
    ├─ Send confirmation emails to donor, hospital, recipient
    └─ Broadcast via Socket.IO: "donation_completed"
```

#### **6. TRACK DONATION HISTORY**
```
Endpoint: GET /donor/history/:donorId
  ↓
Query: Donation.find({ donorId, status: "Completed" })
  ↓
Return:
  • List of all completed donations
  • Details: Hospital, Blood Type, Units, Date
  • Statistics: Total donations, Last donation date
```

#### **7. REDEEM HEALTH PERKS**
```
Donor visits hospital with perk
  ↓
Hospital staff:
  • Verifies perk validity (not expired)
  • Updates Perk.status = "used"
  • Records Perk.usedAt = current time
  • Records Perk.claimedAt = hospital name
  ↓
Result: Health checkup completed for donor
```

---

### **B. HOSPITAL WORKFLOW**

#### **1. REGISTER**
```
Entry: Auth Page → Select "I'm a Hospital"
  ↓
Input Details:
  • Hospital Name (unique)
  • Email
  • Phone
  • Address
  • Location (GPS coordinates)
  • Password
  ↓
Backend:
  • Create User with role = "hospital"
  • Generate hospitalId
  • Seed initial blood inventory (optional)
  ↓
Exit: Redirect to Hospital Dashboard
```

#### **2. CREATE BLOOD REQUEST**
```
Endpoint: POST /request/add
Input: {
  bloodType,     // Required blood type
  unitsNeeded,   // Quantity
  urgency,       // "HIGH" | "MODERATE" | "LOW"
  hospital,      // Hospital name
  location: { latitude, longitude }
}
  ↓
Processing:
  • Validate blood type enum
  • Create Request document
  • Set status = "Pending"
  • Set isRecipientRequest = false
  ↓
Broadcasting:
  • Socket.IO emit: "urgent_request"
  • Triggers AI matching algorithm
  • Notifies nearby donors via Socket.IO
  ↓
Result: Request visible in donor dashboards
```

#### **3. MANAGE INCOMING SCHEDULES**
```
Endpoint: GET /hospital/schedules/:hospitalName
  ↓
Query: DonationSchedule.find({ ... hospital matches ... })
  ↓
Display:
  • All pending donation schedules
  • Donor info, proposed date/time
  • Donor location on map
  ↓
Actions:
  • Accept: POST /schedule/update-status
  • Reject: POST /schedule/update-status
  • Send reminder email
```

#### **4. CONFIRM DONATION**
```
Endpoint: POST /request/:requestId/confirm
Input: { donorId, status: "Confirmed" }
  ↓
Processing:
  • Update Request.confirmedBy = donorId
  • Update Request.confirmationStatus = "Confirmed"
  • Update DonationSchedule.hospitalResponse = "accepted"
  ↓
Notification:
  • Email to donor: "Your donation is confirmed"
  • Email to recipient (if applicable)
  ↓
Result: Donation waiting for scheduled time
```

#### **5. MARK DONATION COMPLETE**
```
Endpoint: POST /schedule/complete
Input: { scheduleId }
  ↓
Manual Trigger:
  • Hospital staff confirms blood received
  • Updates DonationSchedule.status = "completed"
  • (Same process as automatic scheduler)
```

#### **6. HOSPITAL ANALYTICS**
```
Endpoint: GET /hospital/stats
  ↓
Metrics:
  • Total requests created
  • Total requests fulfilled
  • Average fulfillment time
  • Blood type distribution
  • Top donors (by donations)
  • Active donors within 10 km
  ↓
Visualization: Dashboard with charts and statistics
```

#### **7. VIEW ACTIVE DONORS**
```
Endpoint: GET /hospital/active-donors
  ↓
Query: User.find({ role: "donor", available: true })
  ↓
Filter: By proximity to hospital location
  ↓
Return:
  • List of available donors
  • Distance from hospital
  • Blood type
  • Total donations
  • Contact info
```

---

### **C. RECIPIENT WORKFLOW**

#### **1. REGISTER**
```
Entry: Auth Page → Select "I Need Blood"
  ↓
Input Details:
  • Full Name
  • Email
  • Phone
  • Blood Type (required)
  • Location
  • Password
  ↓
Exit: Redirect to Recipient Dashboard
```

#### **2. CREATE URGENT REQUEST**
```
Endpoint: POST /request/add
Input: {
  bloodType,
  unitsNeeded,
  urgency: "HIGH",
  destinationHospital,  // Select hospital to send to
  recipientName,
  location
}
  ↓
Processing:
  • Create Request with isRecipientRequest = true
  • Set status = "Pending"
  • urgency defaults to "HIGH" for recipients
  ↓
Broadcasting:
  • Socket.IO broadcast to destination hospital
  • Urgent notification alert
  • AI matching finds nearby donors
  ↓
Escalation:
  • Email to hospital
  • SMS alert to hospital staff (Twilio)
  • Push notification to app
```

#### **3. TRACK REQUEST STATUS**
```
Endpoint: GET /recipient/requests/:recipientId
  ↓
Query: Request.find({ requestedBy: recipientId })
  ↓
Display:
  • Status: Pending → Confirmed → Fulfilled
  • Confirmation status
  • Matched donors
  • Scheduled donation details
  • ETA for blood availability
  ↓
Actions:
  • Cancel request (if still pending)
  • Contact hospital
  • View matched donors
```

#### **4. RECEIVE BLOOD NOTIFICATION**
```
Trigger: Request.status = "Fulfilled"
  ↓
Recipient Notification:
  • Email: "Your blood is ready"
  • In-app notification
  • SMS alert (optional)
  ↓
Result: Recipient can proceed with transfusion
```

---

## **5. REAL-TIME FEATURES (Socket.IO)**

### **Socket Events**

```javascript
// Server-side events
server.on("connection", (socket) => {
  
  // User joins their room for targeted updates
  socket.on("register", (userId) => {
    socket.join(userId);
    // Donor now receives updates only for them
  });

  // New urgent blood request broadcast
  socket.on("new_request", (payload) => {
    io.emit("urgent_request", payload);
    // Sent to ALL connected users for notification
  });

  // Donation scheduled notification
  socket.on("donation_scheduled", (scheduleData) => {
    io.to(hospitalId).emit("new_schedule", scheduleData);
    // Sent to specific hospital
  });

  // Donation completed broadcast
  socket.on("donation_completed", (completionData) => {
    io.to(recipientId).emit("donation_received", completionData);
    io.to(hospitalId).emit("fulfillment_completed", completionData);
    // Sent to recipient and hospital
  });

  // Donor availability status
  socket.on("donor_available", (donorData) => {
    io.emit("donor_status_changed", donorData);
    // Broadcast donor joined/left
  });
});
```

### **Room Structure**

```
Each user has a unique room with their userId
  └─ Allows targeted notifications
  └─ Hospital receives only their schedules
  └─ Recipient receives updates for their requests
  
Global broadcast for:
  └─ New urgent requests
  └─ Donor availability announcements
  └─ System-wide notifications
```

---

## **6. AI MATCHING ALGORITHM**

### **Endpoint: GET /ai/match/:requestId**

### **Step 1: Blood Type Compatibility**

```
Universal Donors (O-):
  └─ Can match with: ALL blood types
  └─ Priority: HIGHEST

O+ Donors:
  └─ Can match with: All positive types (O+, A+, B+, AB+)
  
A+/A- Donors:
  └─ Can match with: A and AB types

B+/B- Donors:
  └─ Can match with: B and AB types

AB+ Donors:
  └─ Can match ONLY with: AB+ recipients

AB- Donors:
  └─ Can match ONLY with: AB+ and AB- recipients
```

### **Step 2: Location Proximity**

```
Calculate distance from each donor to hospital using GPS:
  • Donor location: (donorLat, donorLon)
  • Hospital location: (hospitalLat, hospitalLon)
  • Formula: Haversine distance calculation
  
Priority Zones:
  1. Zone 1 (0-5 km):    HIGHEST priority - immediate donors
  2. Zone 2 (5-10 km):   HIGH priority
  3. Zone 3 (10-50 km):  MODERATE priority
  4. Zone 4 (>50 km):    LOW priority - fallback only
```

### **Step 3: Donor Availability & Eligibility**

```
Filter conditions (ALL must be true):
  ✓ User.available = true
  ✓ User.role = "donor"
  ✓ Blood type matches request
  ✓ Not already scheduled for this request
  ✓ Last donation > 3 months ago (90-day rule)
  ✓ Within acceptable distance
```

### **Step 4: Scoring & Ranking**

```
Match Score = 
  (bloodTypeScore × 0.40) +
  (proximityScore × 0.40) +
  (availabilityScore × 0.20)

bloodTypeScore:
  100% = Perfect match (O- for anyone, exact blood type)
  50% = Compatible but not perfect
  0% = Not compatible

proximityScore:
  100% = Within 5 km
  70% = Within 10 km
  40% = Within 50 km
  0% = Beyond range

availabilityScore:
  100% = Available now
  50% = Available within 24 hours
  0% = Not available
```

### **Step 5: Return Top Matches**

```
Response: Array of top 5-10 donors sorted by score
  [{
    donorId,
    name,
    phone,
    distance,
    bloodType,
    totalDonations,
    lastDonationDate,
    score: 92.5,
    matchReason: "Perfect blood type + nearby (4km) + available"
  }, ...]
```

---

## **7. AUTOMATED SCHEDULING SYSTEM**

### **Cron Job Configuration**

```javascript
// Runs every minute (*/1 * * * *)
import cron from "node-cron";

cron.schedule("* * * * *", async () => {
  // Check for donations that should be completed
  const pendingSchedules = await DonationSchedule.find({
    status: "pending"
  })
    .populate("donorId")
    .populate("requestId");

  const now = new Date();

  for (const schedule of pendingSchedules) {
    // Parse date (DD-MM-YYYY) and time (HH:MM)
    const [day, month, year] = schedule.date.split("-");
    const [hours, minutes] = schedule.time.split(":");

    // Create date in IST timezone
    const scheduledDate = new Date(year, month - 1, day, hours - 5, minutes - 30);

    // Check if current time >= scheduled time
    if (now >= scheduledDate) {
      // COMPLETION PROCESS BEGINS
      
      // 1. Update DonationSchedule
      await DonationSchedule.findByIdAndUpdate(
        schedule._id,
        { status: "completed" }
      );

      // 2. Create Donation record
      await Donation.create({
        donorId: schedule.donorId,
        hospital: schedule.requestId.hospital,
        units: schedule.requestId.unitsNeeded,
        date: now,
        status: "Completed"
      });

      // 3. Update Request
      await Request.findByIdAndUpdate(
        schedule.requestId,
        {
          status: "Fulfilled",
          confirmedBy: schedule.donorId,
          confirmationStatus: "Confirmed"
        }
      );

      // 4. Award Donor Perks
      const expiryDate = new Date(now);
      expiryDate.setDate(expiryDate.getDate() + 7);
      
      await User.findByIdAndUpdate(
        schedule.donorId,
        {
          $push: {
            perks: {
              type: "health_checkup",
              title: "Free Health Checkup",
              description: "Complimentary health checkup at any partner hospital",
              benefitDate: now,
              expiryDate: expiryDate,
              status: "available",
              donationDate: now
            }
          },
          $inc: { totalDonations: 1 }
        }
      );

      // 5. Send Notifications
      // Email to donor
      await sendEmail(donor.email, "Donation Completed", 
        `Your donation has been completed. Health checkup perk valid for 7 days.`);
      
      // Email to hospital
      await sendEmail(hospital.email, "Donation Received",
        `Blood donation received from ${donor.name}`);
      
      // Email to recipient
      await sendEmail(recipient.email, "Blood Available",
        `Required blood is now available at ${hospital.name}`);

      // 6. Broadcast via Socket.IO
      io.emit("donation_completed", {
        requestId: schedule.requestId,
        donorId: schedule.donorId,
        hospitalName: schedule.requestId.hospital
      });
    }
  }
});
```

### **Timezone Handling**

```
Problem: Dates stored in different formats, timezones vary
Solution: All times converted to IST (Indian Standard Time, UTC+5:30)

Schedule date: "12-12-2025" (DD-MM-YYYY)
Schedule time: "15:30" (24-hour IST)

Conversion:
  • Parse as IST: new Date(2025, 11, 12, 15-5, 30-30)
  • Subtract 5:30 hours for UTC reference
  • Compare with current UTC time
```

---

## **8. NOTIFICATIONS & COMMUNICATIONS**

### **Email Notifications (Nodemailer)**

```javascript
// Triggers:
1. User Registration Confirmation
2. Donation Scheduled (donor & hospital)
3. Donation Confirmed (donor & hospital)
4. Donation Completed (all parties)
5. Perk Awarded
6. Perk Expiring Soon (reminder)
7. Blood Request Created (recipient to hospital)
8. Urgent Request Alert (hospital-wide)
```

### **SMS Notifications (Twilio)**

```javascript
// High-priority alerts sent via SMS:
1. Urgent blood request created
2. Donation reminder (day before)
3. Donation completion confirmation
4. Emergency alerts for HIGH urgency requests
```

### **In-App Notifications (Socket.IO)**

```javascript
// Real-time notifications:
1. New matching requests available (for donors)
2. Donor schedule proposed (for hospitals)
3. Donation schedule accepted (for donors)
4. Donation completed (for all involved)
5. Blood available (for recipients)
```

### **Push Notifications (Browser API)**

```javascript
// Browser push notifications:
1. Urgent request alert
2. Scheduled donation reminder
3. Blood availability notification
```

---

## **9. REWARDS & PERKS SYSTEM**

### **Donor Rewards Program**

```
Trigger: Successful donation completion
  ↓
Reward: Health Checkup Perk

Perk Details:
├─ Type: "health_checkup"
├─ Validity: 7 days from donation date
├─ Value: Free comprehensive health checkup
├─ Redeemable At: Any partnered hospital
├─ Status Lifecycle:
│   ├─ "available" - Can be used (0-7 days)
│   ├─ "used" - Redeemed and completed
│   └─ "expired" - Beyond 7 days, cannot use
│
└─ Eligibility Rule:
    • Donors can receive 1 health checkup per 90 days
    • Tracks lastHealthCheckupDate to enforce rule
```

### **Reward Storage in Database**

```javascript
User Document:
{
  _id: ObjectId,
  totalDonations: 15,              // Total successful donations
  lastHealthCheckupDate: "2025-01-03",
  perks: [
    {
      type: "health_checkup",
      title: "Free Health Checkup",
      description: "Complimentary health checkup...",
      benefitDate: "2025-01-10",
      expiryDate: "2025-01-17",
      status: "available",
      usedAt: null,
      donationDate: "2025-01-10",
      claimedAt: null
    },
    {
      type: "health_checkup",
      title: "Free Health Checkup",
      description: "Complimentary health checkup...",
      benefitDate: "2024-12-20",
      expiryDate: "2024-12-27",
      status: "expired",
      usedAt: null,
      donationDate: "2024-12-20",
      claimedAt: null
    }
  ]
}
```

### **Redeeming Perks**

```
Process:
1. Donor visits partnered hospital within 7 days
2. Hospital staff verifies perk:
   • Check perk.expiryDate > today
   • Check perk.status = "available"
3. Confirm redemption:
   • Update perk.status = "used"
   • Update perk.usedAt = today
   • Update perk.claimedAt = hospital name
   • Update User.lastHealthCheckupDate = today
4. Hospital provides health checkup
```

---

## **10. API ENDPOINTS REFERENCE**

### **Authentication Endpoints**

```
POST   /auth/register
       Input: { fullName, email, password, phone, bloodType, role, location }
       Output: { user, token }

POST   /auth/login
       Input: { email, password }
       Output: { user, token }

GET    /auth/me
       Headers: { Authorization: "Bearer {token}" }
       Output: { user }

GET    /auth/user/:id
       Output: { user }

POST   /auth/update-profile
       Input: { userId, ...updates }
       Output: { user }
```

### **Donor Endpoints**

```
POST   /donor/availability
       Input: { donorId, available, location }
       Output: { success, message }

GET    /donor/history/:donorId
       Output: [ { hospital, units, date, status } ]

GET    /donor/schedules/:donorId
       Output: [ { requestId, date, time, status, hospitalResponse } ]

GET    /donor/requests
       Output: [ { requestId, bloodType, units, urgency, hospital, distance } ]

POST   /donor/add-donation
       Input: { donorId, hospital, units }
       Output: { donation }

GET    /donor/last-donation/:donorId
       Output: { date }
```

### **Hospital Endpoints**

```
GET    /hospital/all
       Output: [ { name, location, address, phone } ]

POST   /hospital/seed-hospitals
       (Admin only - populates test hospitals)

GET    /hospital/stats
       Output: { totalRequests, fulfilled, avgTime, bloodTypes }

GET    /hospital/active-donors
       Output: [ { name, location, bloodType, distance } ]

GET    /hospital/schedules/:hospitalName
       Output: [ { donorName, date, time, status } ]
```

### **Blood Request Endpoints**

```
POST   /request/add
       Input: { bloodType, unitsNeeded, urgency, hospital, location }
       Output: { request }

GET    /request/all
       Output: [ { bloodType, unitsNeeded, status, hospital } ]

POST   /request/:requestId/confirm
       Input: { donorId, status }
       Output: { request }
```

### **Donation Schedule Endpoints**

```
POST   /schedule/create
       Input: { donorId, requestId, date, time, notes, location }
       Output: { schedule }

POST   /schedule/update-status
       Input: { scheduleId, status, hospitalResponse }
       Output: { schedule }

POST   /schedule/complete
       Input: { scheduleId }
       Output: { donation, request_update }

GET    /schedule/donor/:donorId
       Output: [ { requestId, date, time, status } ]
```

### **AI Matching Endpoints**

```
GET    /ai/match/:requestId
       Output: [ { donorId, name, distance, score, matchReason }, ... ]
```

### **Email Endpoints**

```
POST   /email/send-donation-scheduled
       Input: { recipientEmail, donationDetails }
       Output: { success }
```

---

## **11. FRONTEND PAGES & ROUTES**

### **Public Pages**

```
/                    - Landing page (hero, features, call-to-action)
/about               - About PulseBank mission and team
/impact              - Statistics and impact stories
/auth                - Login/Register with role selection
```

### **Donor Routes** (`/donor/*`)

```
/donor/dashboard
  └─ Overview of urgent requests in vicinity
  └─ Quick actions: Mark available, View requests
  └─ Notifications panel
  └─ Upcoming scheduled donations

/donor/requests
  └─ List of matching blood requests
  └─ Filtered by blood type compatibility
  └─ Sorted by distance and urgency
  └─ Quick schedule button

/donor/schedule-donation
  └─ Select request from dashboard
  └─ Propose donation date and time
  └─ Submit contact details and location
  └─ View hospital response status

/donor/history
  └─ Timeline of completed donations
  └─ Details: Hospital, blood type, units, date
  └─ Statistics and milestones
  └─ Certificate download option

/donor/perks
  └─ View available health checkup perks
  └─ Expired perks archive
  └─ Redemption instructions
  └─ Track redemption status

/donor/stats
  └─ Personal donation statistics
  └─ Total donations count
  └─ Units donated total
  └─ Last donation date
  └─ Contribution graph

/donor/profile
  └─ Edit personal information
  └─ Update blood type
  └─ Manage location and contact
  └─ Update profile picture
```

### **Hospital Routes** (`/hospital/*`)

```
/hospital/dashboard
  └─ Overview of pending requests
  └─ Quick stats (fulfilled, pending, in-progress)
  └─ Recent activities feed
  └─ Map view of active donors

/hospital/new-request
  └─ Create urgent blood request
  └─ Specify: Blood type, units, urgency
  └─ Select location on map
  └─ Submit request

/hospital/add-request
  └─ Alternative form for adding requests
  └─ Batch request option

/hospital/schedules
  └─ List all scheduled donations
  └─ Group by status (pending, accepted, completed)
  └─ Accept/reject donor proposals
  └─ Send reminders
  └─ View donor details and location

/hospital/history
  └─ Fulfilled requests log
  └─ Blood type fulfillment rate
  └─ Average fulfillment time
  └─ Exportable reports

/hospital/profile
  └─ Edit hospital information
  └─ Update location and address
  └─ Manage contact details
  └─ Hospital verification

/hospital/stats
  └─ Comprehensive analytics dashboard
  └─ Requests fulfilled (count, %)
  └─ Blood type distribution
  └─ Average fulfillment time
  └─ Top donor list
  └─ Charts and graphs
```

### **Recipient Routes** (`/recipient/*`)

```
/recipient/dashboard
  └─ My active requests overview
  └─ Status indicators (pending, confirmed, fulfilled)
  └─ Quick actions
  └─ Notification center

/recipient/create-request
  └─ Create urgent blood request
  └─ Select blood type needed
  └─ Enter units needed
  └─ Choose destination hospital
  └─ Submit (marked as HIGH urgency)

/recipient/request-status
  └─ Real-time request status tracking
  └─ Matched donors list
  └─ Scheduled donation details
  └─ ETA countdown
  └─ Hospital communication

/recipient/history
  └─ Previous requests archive
  └─ Fulfilled vs cancelled
  └─ Timeline view
  └─ Hospital ratings

/recipient/profile
  └─ Edit medical information
  └─ Update blood type
  └─ Emergency contact
  └─ Medical history (optional)

/recipient/settings
  └─ Notification preferences
  └─ Privacy settings
  └─ Account security
  └─ Connected hospitals
```

### **General Routes**

```
/profile                 - View/edit current user profile
/auth/loading           - Loading state during auth
```

---

## **12. KEY TECHNOLOGIES STACK**

### **Frontend**

```
• Next.js 14+              - React framework with SSR/SSG
• TypeScript              - Type-safe development
• React                   - UI library
• Radix UI               - Accessible component library
  ├─ Accordion, Alert Dialog, Avatar, Badge
  ├─ Button, Card, Checkbox, Dialog, Dropdown
  ├─ Form, Input, Label, Select, Tabs
  └─ 30+ customizable components
• Socket.IO Client       - WebSocket real-time communication
• Supabase              - Authentication & real-time database
• Leaflet              - Map rendering
• Tailwind CSS          - Utility-first styling
• Date-fns             - Date manipulation
• React Hook Form      - Form state management
• Clsx                 - Conditional className utility
• Lucide Icons         - SVG icon library
```

### **Backend**

```
• Node.js              - JavaScript runtime
• Express 5.2.1        - Web framework
• MongoDB 9.0.1        - NoSQL database
• Mongoose             - MongoDB ODM
• JWT                  - Authentication tokens
• Bcrypt               - Password hashing
• Socket.IO            - Real-time WebSocket server
• Nodemailer 7.0.11    - Email sending
• Twilio               - SMS notifications
• node-cron 3.0.3      - Task scheduling
• CORS                 - Cross-origin requests
• dotenv               - Environment variables
• Nodemon              - Auto-reload development
```

### **Infrastructure & Deployment**

```
• Vercel              - Frontend hosting
• Backend: Node.js host (Heroku, Railway, AWS, etc.)
• MongoDB Atlas       - Cloud database hosting
• Environment Variables:
  ├─ MONGODB_URI
  ├─ JWT_SECRET
  ├─ EMAIL_SERVICE credentials
  ├─ TWILIO_SID & AUTH_TOKEN
  └─ FRONTEND_URL
```

---

## **13. DATA FLOW EXAMPLE: Emergency Blood Request**

### **Scenario: Hospital needs O+ blood urgently**

```
Step 1: Hospital Creates Request
┌─────────────────────────────────────────┐
│ Hospital Dashboard → Create New Request │
│ • Blood Type: O+                        │
│ • Units: 5                              │
│ • Urgency: HIGH                         │
│ • Location: Hospital GPS                │
└────────────┬────────────────────────────┘
             │ POST /request/add
             ↓
┌─────────────────────────────────────────┐
│ Backend Processing                      │
│ • Validate blood type & units           │
│ • Store Request in MongoDB              │
│ • status = "Pending"                    │
│ • isRecipientRequest = false            │
└────────────┬────────────────────────────┘
             │ Socket.IO Broadcast
             ↓
┌─────────────────────────────────────────┐
│ Real-Time Broadcasting                  │
│ • io.emit("urgent_request", request)    │
│ • Alert: "New O+ blood needed nearby"   │
└─────────────────────────────────────────┘

Step 2: AI Matching Algorithm Runs
┌─────────────────────────────────────────┐
│ GET /ai/match/:requestId                │
│                                         │
│ Filters O+ Compatible Donors:           │
│ ├─ O+ donors (direct match)             │
│ ├─ O- donors (universal)                │
│ └─ A+ donors (limited to positive)      │
│                                         │
│ Scores by:                              │
│ ├─ Distance from hospital               │
│ ├─ Availability status                  │
│ └─ Last donation date                   │
└────────────┬────────────────────────────┘
             │ Returns Top 10 Matches
             ↓
┌─────────────────────────────────────────┐
│ Donor Notifications                     │
│ [{                                      │
│   donorId: "Donor_1",                   │
│   name: "Amit Kumar",                   │
│   distance: "2.5 km",                   │
│   score: 95.5,                          │
│   status: "available"                   │
│ }, ...]                                 │
└─────────────────────────────────────────┘

Step 3: Donor Accepts Request
┌─────────────────────────────────────────┐
│ Donor Dashboard                         │
│ • Sees urgent O+ request nearby         │
│ • Views hospital details on map         │
│ • Clicks "Schedule Donation"            │
│ • Proposes Date: 12-01-2026             │
│ • Proposes Time: 15:30                  │
│ • Adds notes: "Available after work"    │
└────────────┬────────────────────────────┘
             │ POST /schedule/create
             ↓
┌─────────────────────────────────────────┐
│ Backend Creates Schedule                │
│ • DonationSchedule document created     │
│ • status = "pending"                    │
│ • hospitalResponse = "none"             │
│ • Donor location recorded               │
└────────────┬────────────────────────────┘
             │ Email + Socket.IO
             ↓
┌─────────────────────────────────────────┐
│ Hospital Notification                   │
│ • Email: "Donation proposed for O+"     │
│ • In-app: Schedule card shows donor     │
│ • Map shows donor location              │
│ • View donor profile & past donations   │
└─────────────────────────────────────────┘

Step 4: Hospital Confirms Schedule
┌─────────────────────────────────────────┐
│ Hospital Staff                          │
│ • Reviews donor profile                 │
│ • Confirms date & time                  │
│ • POST /schedule/update-status          │
│ • hospitalResponse = "accepted"         │
└────────────┬────────────────────────────┘
             │ Email to Donor
             ↓
┌─────────────────────────────────────────┐
│ Donor Confirmation                      │
│ • Email: "Your donation confirmed"      │
│ • Shows hospital address & timing       │
│ • Sends reminder for day before         │
│ • In-app: Schedule marked as accepted   │
└─────────────────────────────────────────┘

Step 5: Scheduled Time Arrives
┌─────────────────────────────────────────┐
│ Cron Job (Every minute)                 │
│ • Checks all pending schedules          │
│ • Parses 12-01-2026 15:30 (IST)        │
│ • Compares with current time            │
│ • Time matched → Completion process     │
└────────────┬────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│ Automatic Completion                    │
│ • DonationSchedule.status = "completed" │
│ • Creates Donation record               │
│ • Request.status = "Fulfilled"          │
│ • Award donor health checkup perk       │
│ • Perk valid: 12-01-2026 to 19-01-2026│
└────────────┬────────────────────────────┘
             │ Emails to All Parties
             ↓
┌─────────────────────────────────────────┐
│ Notifications Sent                      │
│ • To Donor:                             │
│   "✓ Donation completed! Perk awarded"  │
│                                         │
│ • To Hospital:                          │
│   "✓ O+ blood received from Amit Kumar" │
│                                         │
│ • To Patient/Recipient:                 │
│   "✓ Required blood available!"         │
└────────────┬────────────────────────────┘
             │ Socket.IO Broadcast
             ↓
┌─────────────────────────────────────────┐
│ Dashboard Updates (Real-time)           │
│ • Hospital sees: Request FULFILLED      │
│ • Donor sees: +1 total donations        │
│ • Recipient sees: BLOOD READY           │
│ • Request status → FULFILLED            │
└─────────────────────────────────────────┘

Step 6: Donor Redeems Perk
┌─────────────────────────────────────────┐
│ Within 7 days (by 19-01-2026)          │
│ • Donor visits any partner hospital     │
│ • Shows app perk: Health checkup        │
│ • Hospital staff verifies & provides    │
│ • POST perk marked as "used"            │
│ • Update: perk.claimedAt = hospital     │
│ • Donor gets free comprehensive checkup │
└─────────────────────────────────────────┘
```

---

## **14. SECURITY CONSIDERATIONS**

```
• Password Hashing: bcrypt with salt rounds 10
• Authentication: JWT tokens (30-day expiry recommended)
• CORS: Whitelist frontend domain
• Rate Limiting: Implement on auth endpoints
• Data Validation: Mongoose schema validation
• Email Verification: (Optional) Verify emails on registration
• Location Privacy: Don't expose exact donor location to strangers
• HTTPS: All API endpoints must use HTTPS
• Environment Variables: Store secrets in .env files
• Input Sanitization: Prevent injection attacks
```

---

## **15. ERROR HANDLING**

```javascript
// Standard error responses:

{
  success: false,
  message: "Error description",
  code: "ERROR_CODE",
  statusCode: 400 // or 401, 403, 404, 500
}

Common codes:
• INVALID_CREDENTIALS       - Wrong email/password
• USER_ALREADY_EXISTS       - Email already registered
• BLOOD_TYPE_MISMATCH       - Incompatible blood types
• NO_COMPATIBLE_DONORS      - No donors available
• REQUEST_NOT_FOUND         - Request doesn't exist
• UNAUTHORIZED              - Not authenticated
• FORBIDDEN                 - Don't have permission
• SERVER_ERROR              - 500 Internal error
```

---

## **16. TESTING CHECKLIST**

```
□ User Registration (all 3 roles)
□ Login & JWT token validation
□ Blood type compatibility matching
□ Location-based distance calculation
□ Real-time Socket.IO broadcasts
□ Donation scheduling
□ Automatic completion via cron
□ Perk creation and expiry
□ Email notifications
□ SMS notifications
□ Hospital analytics calculations
□ Donor history queries
□ Request status updates
□ Recipient notifications
□ AI matching algorithm accuracy
□ Timezone handling (IST conversion)
□ Database indexes performance
□ API rate limiting
□ CORS policy validation
```

---

## **17. DEPLOYMENT STEPS**

```
Frontend (Next.js):
1. npm run build
2. Deploy to Vercel (or similar)
3. Set environment variables
4. Configure custom domain
5. Enable HTTPS

Backend (Node.js):
1. npm install
2. Configure .env with MongoDB URI, secrets
3. Deploy to hosting (Railway, Heroku, AWS EC2)
4. Set up PM2 or supervisor for process management
5. Configure port and production settings

Database:
1. Create MongoDB Atlas cluster
2. Set connection string in .env
3. Create database indexes
4. Enable backups

Monitoring:
1. Set up error tracking (Sentry)
2. Monitor API performance
3. Set up alerts for failures
4. Log all transactions
```

---

## **QUICK START SUMMARY**

1. **User registers** → Selects role (Donor/Hospital/Recipient)
2. **Donor marks available** → AI matching begins
3. **Hospital creates request** → Broadcast to donors
4. **Donors propose schedule** → Hospital confirms
5. **Time arrives** → Cron completes automatically
6. **Donor gets perk** → Can redeem within 7 days
7. **Real-time updates** → Socket.IO keeps everyone informed

---

**This document covers the complete workflow of PulseBank platform including architecture, user flows, data models, APIs, and deployment strategies.**
