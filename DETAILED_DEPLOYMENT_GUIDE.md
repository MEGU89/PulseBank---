# 🚀 PulseBank Vercel Deployment - Complete Step-by-Step Guide

## Table of Contents
1. [Phase 1: MongoDB Setup](#phase-1-mongodb-setup)
2. [Phase 2: Backend Deployment](#phase-2-backend-deployment)
3. [Phase 3: Frontend Configuration](#phase-3-frontend-configuration)
4. [Phase 4: Frontend Deployment](#phase-4-frontend-deployment)
5. [Phase 5: Testing & Verification](#phase-5-testing--verification)

---

# PHASE 1: MongoDB Setup

## Step 1.1: Create MongoDB Account

1. Open your browser and go to: **https://www.mongodb.com/cloud/atlas**
2. Click the **"Sign Up"** button in the top right
3. You'll see a signup form. Choose one of these options:
   - Sign up with Email
   - Sign up with Google
   - Sign up with GitHub
4. **Recommended:** Use Google or GitHub (fastest)

**What you'll see:**
```
┌─────────────────────────────────────┐
│  Create your MongoDB Atlas account  │
│                                     │
│  [Sign up with Google]              │
│  [Sign up with GitHub]              │
│  [Sign up with Email]               │
└─────────────────────────────────────┘
```

## Step 1.2: Complete Account Setup

After signing up, you'll see:

1. **Select a Plan** page
   - Choose **"Shared"** (it's free) ✓
   - This is perfect for development

2. **Create Your First Cluster** page
   - Provider: **AWS** (default is fine)
   - Region: Choose the closest to your location
     - If in India → **ap-southeast-1** (Singapore)
     - If in US → **us-east-1**
     - If in Europe → **eu-west-1**
   - Cluster name: Keep it as **"Cluster0"** (default)
   - Click **"Create Cluster"**

**Wait:** This takes 5-10 minutes. You'll see a progress bar.

## Step 1.3: Create Database User

Once your cluster is created:

1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"** button
3. Fill in the form:
   ```
   Authentication Method: Password
   Username: pulsebank_admin
   Password: YourStrongPassword123!
   ```
   **Save this password somewhere safe! You'll need it.**

4. Under "Built-in Roles", select: **"Atlas Admin"**
5. Click **"Add User"** button

**What you entered:**
- Username: `pulsebank_admin`
- Password: `YourStrongPassword123!`

## Step 1.4: Add IP Whitelist

Still in MongoDB Atlas:

1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"** button
3. You'll see a popup. Select **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` (allows all IPs)
   - Not ideal for production, but fine for development
4. Click **"Confirm"**

**Why?** Because your backend on Railway/Render will have a different IP, and we don't know it in advance.

## Step 1.5: Get Your Connection String

1. In MongoDB Atlas, click **"Clusters"** in the left sidebar
2. Find your cluster **"Cluster0"**, click the **"Connect"** button
3. A popup appears with 3 options:
   - "Connect with the MongoDB Shell"
   - "Connect Your Application" ← **Select this one**
   - "Connect with MongoDB Compass"

4. You'll see connection options:
   - Select **"Node.js"** from the driver dropdown
   - Select version: **"5.0 or later"** (or latest)

5. You'll see something like:
   ```
   mongodb+srv://pulsebank_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

6. **Replace `<password>` with your actual password:**
   ```
   mongodb+srv://pulsebank_admin:YourStrongPassword123!@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

**Copy this entire string. This is your MONGO_URI. Save it in a text file.**

**Example of what you copied:**
```
mongodb+srv://pulsebank_admin:YourStrongPassword123!@cluster0.a1b2c3d.mongodb.net/?retryWrites=true&w=majority
```

---

# PHASE 2: Backend Deployment (Railway)

## Step 2.1: Create Railway Account

1. Open: **https://railway.app**
2. Click **"Start Project"** or **"Sign Up"** button
3. Choose **"Continue with GitHub"** (recommended)
4. You'll be asked to authorize Railway to access your GitHub
   - Click **"Authorize"**

**What happens:**
- Railway connects to your GitHub
- You can now deploy GitHub repositories

## Step 2.2: Create New Project

1. After signing in to Railway:
2. Click **"+ New Project"** button (top right)
3. Select **"Deploy from GitHub repo"**
4. A list of your GitHub repositories appears
5. **Find and select:** `PulseBank-main` repository
6. Click it to select

**What Railway does:**
- Clones your repository
- Detects it's a Node.js project
- Prepares for deployment

## Step 2.3: Configure Build & Start Commands

Railway might auto-detect these, but let's verify:

1. In the Railway dashboard, you should see your project
2. Look for a **"Backend"** service (or similar)
3. Click on it
4. Go to **Settings** tab
5. Verify these commands:

   **Build Command:**
   ```
   npm install
   ```

   **Start Command:**
   ```
   node server.js
   ```

6. If different, update them
7. Click **"Save"**

## Step 2.4: Add Environment Variables

This is the most important step!

1. Still in Railway, find your Backend service
2. Click the **"Variables"** tab
3. You'll see a form to add variables
4. Add these one by one:

### Variable 1: MongoDB URI
```
Name: MONGO_URI
Value: mongodb+srv://pulsebank_admin:YourStrongPassword123!@cluster0.a1b2c3d.mongodb.net/?retryWrites=true&w=majority
```
Click **"Add"**

### Variable 2: JWT Secret
```
Name: JWT_SECRET
Value: your-super-secret-jwt-key-change-this-in-production-12345
```
**This should be a random string. Generate one here:** https://www.uuidgenerator.net/
Click **"Add"**

### Variable 3: Email Configuration
```
Name: EMAIL_SERVICE
Value: gmail
```
Click **"Add"**

```
Name: EMAIL_USER
Value: your-email@gmail.com
```
**Use your actual Gmail address**
Click **"Add"**

### Variable 4: Email Password
```
Name: EMAIL_PASSWORD
Value: xxxx xxxx xxxx xxxx
```
**IMPORTANT: This must be a Gmail App Password, NOT your regular password!**

**How to get Gmail App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Sign in if needed
3. Select "Mail" and "Windows Computer" (or your device)
4. Google generates a 16-character password like: `xxxx xxxx xxxx xxxx`
5. Copy it exactly
Click **"Add"**

### Variable 5: Twilio (Optional - if you want SMS)
```
Name: TWILIO_SID
Value: your-twilio-sid-here
```

```
Name: TWILIO_AUTH_TOKEN
Value: your-twilio-auth-token-here
```

```
Name: TWILIO_PHONE
Value: +1234567890
```

### Variable 6: Environment & Port
```
Name: NODE_ENV
Value: production
```
Click **"Add"**

```
Name: PORT
Value: 5000
```
Click **"Add"**

## Step 2.5: Deploy Backend

1. After adding all variables, look at the Railway dashboard
2. You should see a **"Deploy"** button or it might auto-deploy
3. If you see **"View Logs"**, click it
4. Wait for the deployment to complete

**You'll see messages like:**
```
⭐ Installing dependencies...
✓ npm install completed
⭐ Starting server...
✓ Server running on port 5000
```

## Step 2.6: Get Your Backend URL

1. In Railway dashboard, find your Backend service
2. Look at the top or right side for a URL like:
   ```
   https://your-app-abc123.railway.app
   ```

**Copy this URL. You'll need it for the frontend.**

**Example:**
```
https://pulsebank-xyz789.railway.app
```

---

# PHASE 3: Frontend Configuration

## Step 3.1: Create Production Environment File

1. On your computer, navigate to the PulseBank project folder
2. Open the root directory (where package.json is)
3. Look for `.env.local` file
4. Create a new file called `.env.production.local`

**How to create it:**

**On Windows (Command Prompt or PowerShell):**
```powershell
cd c:\Users\harsh\Downloads\PulseBank-main\PulseBank-main
```

Then create the file with your editor or use:
```powershell
"" | Out-File -FilePath ".env.production.local" -Encoding UTF8
```

**On Mac/Linux:**
```bash
touch .env.production.local
```

## Step 3.2: Add Environment Variables to Frontend

1. Open `.env.production.local` in your text editor (VS Code, Notepad++, etc.)
2. Add these lines:

```env
NEXT_PUBLIC_API_URL=https://your-app-abc123.railway.app
NEXT_PUBLIC_SOCKET_URL=https://your-app-abc123.railway.app
```

**Replace:**
- `https://your-app-abc123.railway.app` with your actual Railway backend URL

**Example of what it should look like:**
```env
NEXT_PUBLIC_API_URL=https://pulsebank-xyz789.railway.app
NEXT_PUBLIC_SOCKET_URL=https://pulsebank-xyz789.railway.app
```

3. Save the file (Ctrl+S)

**What these do:**
- `NEXT_PUBLIC_API_URL` → Where frontend sends API requests
- `NEXT_PUBLIC_SOCKET_URL` → Where frontend connects for real-time updates

## Step 3.3: Test Build Locally

Before deploying, let's verify everything builds correctly:

1. Open PowerShell or Command Prompt
2. Navigate to your project:
   ```powershell
   cd c:\Users\harsh\Downloads\PulseBank-main\PulseBank-main
   ```

3. Run the build command:
   ```powershell
   npm run build
   ```

4. Wait for it to complete. You should see:
   ```
   ✓ Compiled successfully
   ✓ Next.js build completed
   ```

**If you see errors:**
- Read the error message carefully
- Most common: Missing environment variables
- Solution: Check `.env.production.local` is correct

**What happened:**
- Next.js created a production build
- All TypeScript compiled to JavaScript
- All optimizations applied
- Ready to deploy

---

# PHASE 4: Frontend Deployment (Vercel)

## Step 4.1: Commit and Push Changes to GitHub

1. Open PowerShell/Command Prompt:
   ```powershell
   cd c:\Users\harsh\Downloads\PulseBank-main\PulseBank-main
   ```

2. Stage all changes:
   ```powershell
   git add .
   ```

3. Commit with a message:
   ```powershell
   git commit -m "Deploy: Add production environment config and backend integration"
   ```

4. Push to GitHub:
   ```powershell
   git push origin main
   ```

**What you'll see:**
```
[main abc123def] Deploy: Add production environment config
 5 files changed, 50 insertions(+)
 ...
```

**This sends your changes to GitHub so Vercel can access them.**

## Step 4.2: Create Vercel Account

1. Open: **https://vercel.com**
2. Click **"Sign Up"** button
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub repositories
5. Click **"Authorize"**

**What Vercel does:**
- Connects to your GitHub account
- Can now access your repositories
- Will deploy whenever you push

## Step 4.3: Import Project to Vercel

1. After signing in to Vercel:
2. Click **"Add New..."** → **"Project"** (top left)
3. You see: **"Select a Git Repository"**
4. Search for: **"PulseBank-main"** or scroll to find it
5. Click the **"Import"** button next to it

**What you see:**
```
┌──────────────────────────────┐
│ PulseBank-main               │
│ github.com/yourname/repo     │
│ [Import] button              │
└──────────────────────────────┘
```

## Step 4.4: Configure Project Settings

After clicking Import, Vercel shows: **"Configure Project"** page

1. **Framework Preset:** Should auto-detect as **"Next.js"** ✓
2. **Root Directory:** Should be **"."** (the root) ✓
3. **Build Command:** Should be **"npm run build"** ✓
4. **Output Directory:** Should be **".next"** ✓
5. **Install Command:** Should be **"npm install"** ✓

**Everything should be auto-detected. Click "Deploy"**

**What happens:**
- Vercel clones your GitHub repo
- Installs dependencies with npm
- Runs the build
- Deploys to Vercel's servers

**This takes 2-5 minutes. You'll see progress updates.**

## Step 4.5: Add Environment Variables in Vercel

While the deployment happens (or after it completes):

1. In Vercel dashboard, find your project (PulseBank-main)
2. Click on it
3. Go to **"Settings"** tab (top menu)
4. In left sidebar, click **"Environment Variables"**
5. You see a form to add variables

**Add Variable 1:**
- Name: `NEXT_PUBLIC_API_URL`
- Value: `https://your-app-abc123.railway.app`
- Environment: Select all (Production, Preview, Development)
- Click **"Add"**

**Add Variable 2:**
- Name: `NEXT_PUBLIC_SOCKET_URL`
- Value: `https://your-app-abc123.railway.app`
- Environment: Select all
- Click **"Add"**

**Both should be your Railway backend URL.**

## Step 4.6: Redeploy to Apply Environment Variables

1. In Vercel, go to **"Deployments"** tab
2. Find your latest deployment (the one that just finished)
3. Click the **"..."** menu on the right
4. Click **"Redeploy"**

**What happens:**
- Vercel rebuilds the project
- This time with the environment variables
- Takes 2-5 minutes

**You'll see:**
```
Building...
✓ Build completed
✓ Deployment successful
```

## Step 4.7: Get Your Vercel URL

1. After deployment succeeds, Vercel shows a **"Visit"** button
2. Click it or look at the dashboard
3. Your URL will be something like:
   ```
   https://pulsebank-main.vercel.app
   ```

**Copy this. This is your live frontend URL!**

---

# PHASE 5: Testing & Verification

## Step 5.1: Test Frontend Loading

1. Copy your Vercel URL
2. Open it in a browser:
   ```
   https://pulsebank-main.vercel.app
   ```

3. **You should see:** The PulseBank landing page loading
4. **What to check:**
   - ✓ Page loads without errors
   - ✓ Images display correctly
   - ✓ All buttons visible
   - ✓ No console errors (F12 → Console tab)

**If you see a blank page:**
- Check browser console for errors
- Check Vercel deployment logs
- Usually it's an environment variable issue

## Step 5.2: Test User Registration

1. On the homepage, look for "Get Started" or "Register" button
2. Click **"I Want to Donate"** (or another role)
3. Fill in the form:
   ```
   Full Name: John Doe
   Email: test@example.com
   Phone: 9876543210
   Blood Type: O+
   Password: TestPassword123!
   ```

4. Click **"Register"** button

**What should happen:**
- ✓ Account created
- ✓ Redirected to dashboard
- ✓ You receive a welcome email
- ✓ You can log in

**If it fails:**
- Check backend logs in Railway
- Verify MongoDB connection is working
- Check email configuration

## Step 5.3: Check API Connection

1. After registering, open **Developer Tools** (F12)
2. Go to **"Network"** tab
3. Try an action (like updating profile)
4. Look for network requests
5. **You should see:**
   - Requests going to your Railway backend URL
   - Responses with data
   - Status: 200 (success) or 201 (created)

**If you see:**
- 404 errors → Backend endpoint doesn't exist
- CORS errors → Backend CORS not configured
- Connection failed → Backend URL wrong

## Step 5.4: Test Real-Time Features (Socket.IO)

1. Still in **Developer Tools** (F12)
2. Go to **"Network"** tab
3. Filter by **"WS"** (WebSocket)
4. Do something that triggers real-time update (create a request, if possible)
5. **You should see:**
   - A connection line labeled with your backend URL
   - Status: "101 Switching Protocols" (green)
   - This means real-time is working!

**If WebSocket fails:**
- Check `NEXT_PUBLIC_SOCKET_URL` in Vercel env vars
- Verify it matches your Railway backend URL
- Make sure it uses `https://` not `http://`

## Step 5.5: Test Email Sending

1. Register a new account with a real email
2. **Check your email inbox:**
   - ✓ Welcome email arrives
   - ✓ Contains your account details
   - ✓ Has active links

**If no email:**
- Check spam folder
- Verify EMAIL_USER and EMAIL_PASSWORD in Railway
- Check Gmail "Less secure app access" is enabled
- Or verify Gmail App Password is correct

## Step 5.6: Create a Test Blood Request

1. Log in to your donor account
2. Navigate to create a blood request (if donor role has this)
3. Or navigate to hospital role and create a request
4. Fill in details:
   ```
   Blood Type: O+
   Units: 5
   Urgency: HIGH
   ```

5. Submit

**What should happen:**
- ✓ Request created successfully
- ✓ See it in the list
- ✓ Notification sent (real-time update visible)
- ✓ No console errors

## Step 5.7: Check Console for Errors

1. Press **F12** to open Developer Tools
2. Go to **"Console"** tab
3. Look for any red error messages
4. **Common errors and solutions:**

**Error:** `Cannot POST /request/add`
- **Solution:** Check backend API endpoint exists
- **Check:** Backend is running on Railway

**Error:** `WebSocket connection failed`
- **Solution:** Check SOCKET_URL environment variable
- **Verify:** It uses correct backend URL

**Error:** `CORS error`
- **Solution:** Backend needs CORS configuration
- **Add to Backend/server.js:**
  ```javascript
  const allowedOrigins = [
    "https://pulsebank-main.vercel.app",
    process.env.FRONTEND_URL
  ];
  app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));
  ```

---

# ✅ VERIFICATION CHECKLIST

Go through this to confirm everything works:

## Backend Checklist
- [ ] MongoDB cluster created and accessible
- [ ] Database user created with correct password
- [ ] IP whitelist added (0.0.0.0/0)
- [ ] Railway project created
- [ ] All environment variables added in Railway
- [ ] Backend deployed successfully
- [ ] Backend URL copied (e.g., https://pulsebank-xyz.railway.app)
- [ ] Can access health endpoint: `https://pulsebank-xyz.railway.app/` (might show 404, that's OK)

## Frontend Checklist
- [ ] .env.production.local created
- [ ] Backend URLs added correctly
- [ ] Local build successful (`npm run build`)
- [ ] Changes committed and pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables added in Vercel
- [ ] Redeployed after adding env vars
- [ ] Vercel URL obtained

## Testing Checklist
- [ ] Frontend URL loads in browser
- [ ] No console errors
- [ ] Can register account
- [ ] Welcome email received
- [ ] API requests show in Network tab (going to Railway backend)
- [ ] WebSocket connection established (WS in Network tab)
- [ ] Can create blood request
- [ ] Real-time updates appear
- [ ] Email notifications work

---

# 🆘 TROUBLESHOOTING

## Problem: Frontend shows "Cannot reach backend"

**Symptoms:**
- Error message on screen
- Console shows CORS error

**Solutions:**
1. **Check environment variables:**
   ```powershell
   # In Vercel Settings → Environment Variables
   # Verify NEXT_PUBLIC_API_URL is correct
   ```

2. **Check backend is running:**
   - Go to Railway dashboard
   - Find your Backend service
   - Click "View Logs"
   - Should see "Server running on port 5000"

3. **Check CORS in backend:**
   ```javascript
   // Backend/server.js
   app.use(cors());  // Should allow all origins
   ```

## Problem: WebSocket not connecting

**Symptoms:**
- Real-time features don't work
- Network tab shows no WS connection

**Solutions:**
1. **Verify Socket.IO URL:**
   ```
   NEXT_PUBLIC_SOCKET_URL should be:
   https://your-railway-url
   NOT http://
   ```

2. **Check backend Socket.IO:**
   ```javascript
   // Backend/server.js should have:
   const io = new Server(server, {
     cors: { origin: "*" }
   });
   ```

## Problem: MongoDB connection fails

**Symptoms:**
- Can't register account
- "Database connection error" message

**Solutions:**
1. **Check MONGO_URI:**
   - Open MongoDB Atlas
   - Get fresh connection string
   - Verify password is correct
   - Make sure special characters are URL-encoded

2. **Check IP whitelist:**
   - MongoDB Atlas → Network Access
   - Should show 0.0.0.0/0 in the list
   - If not, add it

3. **Verify credentials:**
   ```
   Username: pulsebank_admin
   Password: [your password]
   Should be in connection string
   ```

## Problem: Emails not sending

**Symptoms:**
- Register account, no welcome email

**Solutions:**
1. **Check Gmail app password:**
   - Go to: myaccount.google.com/apppasswords
   - Generate new one if needed
   - Copy exactly with spaces
   - Update in Railway

2. **Enable Less Secure Apps:**
   - Gmail Settings → Security
   - Turn on "Less secure app access"
   - Or use App Passwords instead

3. **Check email config in Railway:**
   ```
   EMAIL_SERVICE: gmail
   EMAIL_USER: your-email@gmail.com
   EMAIL_PASSWORD: xxxx xxxx xxxx xxxx (app password)
   ```

---

# 🎉 SUCCESS!

If all checks pass, your app is live!

**Your URLs:**
```
Frontend: https://pulsebank-main.vercel.app
Backend:  https://pulsebank-xyz.railway.app
Database: MongoDB Atlas (cloud)
```

**Next steps:**
1. Share the frontend URL with users
2. Monitor logs regularly
3. Update content and features
4. Scale as needed

---

**Deployment Date:** January 20, 2026
**Status:** Complete
**Next:** Celebrate! 🎊
