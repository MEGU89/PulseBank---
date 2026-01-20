# 🚀 PulseBank Deployment Guide

## Deployment Architecture

```
GitHub (Source Code)
├── Frontend (Next.js) → Vercel/Netlify
└── Backend (Node.js) → Render/Railway/Heroku
    └── MongoDB (Atlas)
```

---

## Option 1: Full Deployment (Recommended)

### Step 1: Push to GitHub

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - PulseBank blood donation platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pulsebank.git
   git push -u origin main
   ```

2. **.gitignore setup** (already needed):
   - Frontend: `/node_modules`, `.env.local`, `.next`
   - Backend: `/node_modules`, `.env`

---

### Step 2: Deploy Backend (Choose One)

#### **Option A: Render (Recommended - Free Tier)**

1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** pulsebank-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `Backend`

5. Add Environment Variables in Render Dashboard:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://harsh:Singh222@cluster0.nkvqdkf.mongodb.net/?appName=Cluster0
   JWT_SECRET=4b2b3511f18b05f481407d3a0cad145f70bf5dd351a29b352ff955e86c3ea301c85465f8bcb7ea16e7a9609c73aa7d55c1e960821efa2c7da3327515d0b472ef
   EMAIL_USER=harshitman99@gmail.com
   EMAIL_PASS=ttavlbpbqwljlacj
   NODE_ENV=production
   ```

6. Deploy! Your backend will be available at: `https://pulsebank-backend.onrender.com`

#### **Option B: Railway.app**

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add `Backend` as the root directory
5. Set environment variables
6. Deploy

#### **Option C: Heroku**

1. Go to [heroku.com](https://heroku.com)
2. Create new app
3. Connect to GitHub
4. Deploy from the `main` branch
5. Configure buildpacks and environment variables

---

### Step 3: Deploy Frontend (Choose One)

#### **Option A: Vercel (Best for Next.js)**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

6. Add Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=https://pulsebank-backend.onrender.com
   NEXT_PUBLIC_SOCKET_URL=https://pulsebank-backend.onrender.com
   ```

7. Click "Deploy"
8. Your frontend will be at: `https://pulsebank.vercel.app` (custom domain available)

#### **Option B: Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub repository
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next/static` or `out`
   - **Runtime:** Node.js
   - **Functions directory:** `netlify/functions`

5. Set environment variables in Site Settings
6. Deploy

---

### Step 4: Update Configuration Files

#### Update Backend for Production

**Backend/server.js** - Update CORS:
```javascript
const cors = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://pulsebank.vercel.app'] 
    : '*',
  methods: ['GET', 'POST'],
};
```

#### Update Frontend Environment

Create `.env.production`:
```
NEXT_PUBLIC_API_URL=https://pulsebank-backend.onrender.com
NEXT_PUBLIC_SOCKET_URL=https://pulsebank-backend.onrender.com
```

---

## Database Setup

### MongoDB Atlas (Cloud Database)

Your MongoDB is already set up at:
- Connection String: `mongodb+srv://harsh:Singh222@cluster0.nkvqdkf.mongodb.net/?appName=Cluster0`

**Security Recommendations:**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Configure IP Whitelist (allow all for now: 0.0.0.0/0)
3. Change password in production
4. Enable encryption at rest

---

## Domain Setup (Optional)

### Connect Custom Domain to Vercel
1. In Vercel dashboard, go to Settings → Domains
2. Add your domain (e.g., `pulsebank.com`)
3. Update DNS records at your domain registrar

### Connect Custom Domain to Render
1. In Render dashboard, go to Settings → Custom Domain
2. Follow DNS setup instructions

---

## Monitoring & Debugging

### Vercel
- Real-time logs: Vercel Dashboard → Deployments → Logs
- Error tracking: Integrated error page
- Performance metrics: Analytics tab

### Render
- Logs: Dashboard → Logs tab
- Metrics: Integrated monitoring
- Restart/redeploy: Available in dashboard

### Backend Logs
```bash
# View Render logs
render logs --service pulsebank-backend

# Or via dashboard: Service → Logs
```

---

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] `.gitignore` configured
- [ ] Environment variables set in hosting platforms
- [ ] Backend deployed and running
- [ ] Frontend deployed and running
- [ ] API endpoints tested
- [ ] Socket.IO connection verified
- [ ] Email service tested
- [ ] Database connectivity verified
- [ ] CORS settings configured
- [ ] SSL certificates enabled
- [ ] Custom domain configured (optional)
- [ ] Monitoring setup complete

---

## Quick Commands

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Backend start
cd Backend && npm start

# Check backend logs
npm logs
```

---

## Troubleshooting

### Issue: Backend not connecting
**Solution:** Check if `NEXT_PUBLIC_API_URL` matches backend URL in production

### Issue: Socket.IO not working
**Solution:** Ensure both URLs are correct and CORS is enabled

### Issue: MongoDB connection error
**Solution:** Whitelist backend IP in MongoDB Atlas

### Issue: Email not sending
**Solution:** Verify EMAIL_USER and EMAIL_PASS in environment variables

---

## Next Steps

1. Push your code to GitHub
2. Choose hosting platform and deploy
3. Test all features in production
4. Set up monitoring and alerts
5. Configure domain name
6. Celebrate! 🎉

