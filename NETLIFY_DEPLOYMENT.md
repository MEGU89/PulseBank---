# 🚀 PulseBank - Netlify Deployment Guide

## Overview
This guide will help you deploy PulseBank on Netlify. Since PulseBank is a full-stack application:
- **Frontend (Next.js)** → Netlify ✅
- **Backend (Node.js/Express)** → Railway, Render, or Heroku
- **Database (MongoDB)** → MongoDB Atlas

---

## Part 1: Backend Deployment (Required First)

### Option A: Deploy on Railway (Recommended)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your PulseBank repository
   - Railway auto-detects it's a Node.js app

3. **Configure Environment Variables**
   - In Railway Dashboard → Variables
   - Add these variables:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_secure_random_key_here
     EMAIL_SERVICE=gmail
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASSWORD=your_app_specific_password
     TWILIO_SID=your_twilio_sid
     TWILIO_AUTH_TOKEN=your_twilio_token
     NODE_ENV=production
     PORT=5000
     ```

4. **Get Backend URL**
   - After deployment, copy the URL (e.g., `https://pulsebank-prod.railway.app`)
   - **Save this URL** - you'll need it for frontend configuration

### Option B: Deploy on Render (Alternative)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New +" → "Web Service"
   - Select repository
   - Build: `npm install`
   - Start: `node server.js`

3. **Set Environment Variables**
   - Add all variables listed in Option A

4. **Get Backend URL**
   - Copy provided Render URL (e.g., `https://pulsebank-prod.onrender.com`)

---

## Part 2: Frontend Deployment on Netlify

### Step 1: Create Netlify Account

1. Go to https://netlify.com
2. Click "Sign up"
3. Select "Sign up with GitHub"
4. Authorize Netlify to access your GitHub repositories

### Step 2: Prepare Your Frontend

1. **Create environment configuration file**
   - In your project root, create `.env.production.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
   NEXT_PUBLIC_SOCKET_URL=https://your-backend-url.railway.app
   ```
   Replace with your actual backend URL from Step 1

2. **Test build locally**
   ```bash
   npm install
   npm run build
   npm run start
   ```
   Make sure there are no errors

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

### Step 3: Connect to Netlify

1. **In Netlify Dashboard**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub
   - Choose `PulseBank-main` repository

2. **Configure Build Settings**
   - **Owner:** Select your account
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18.17.0 or higher

3. **Add Environment Variables**
   - In Netlify, go to: Site settings → Build & deploy → Environment
   - Add these variables:
     ```
     NEXT_PUBLIC_API_URL = https://your-backend-url.railway.app
     NEXT_PUBLIC_SOCKET_URL = https://your-backend-url.railway.app
     ```

### Step 4: Deploy

1. Click "Deploy site"
2. Netlify will start building (takes 2-5 minutes)
3. You'll see deployment logs in real-time
4. Once complete, you get a URL like: `https://pulsebank-abc123.netlify.app`

### Step 5: Configure Custom Domain (Optional)

1. **Buy domain** from any registrar (GoDaddy, Namecheap, etc.)
2. **In Netlify Dashboard:**
   - Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

---

## Part 3: Additional Configuration for Next.js on Netlify

### Update next.config.mjs

Make sure your Next.js config supports Netlify deployment:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Enable static generation where possible
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
```

### Important: API Routes and Server Functions

If you're using Next.js API routes:
- Netlify automatically converts Next.js API routes to serverless functions ✅
- No additional configuration needed
- Your API routes will work as-is

---

## Part 4: Testing & Troubleshooting

### Test Your Deployment

1. **Open your Netlify URL** in browser
2. **Test registration:**
   - Try to register as a donor or hospital
   - Submit form and verify data is being sent to backend
   - Check browser console (F12) for any errors

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Build fails** | Check build logs in Netlify. Ensure all dependencies are listed in package.json |
| **API calls fail** | Verify NEXT_PUBLIC_API_URL is correct and backend is running |
| **Images not loading** | Check next.config.mjs has `unoptimized: true` for Netlify |
| **Socket.io connection fails** | Ensure NEXT_PUBLIC_SOCKET_URL matches your backend URL |
| **Environment variables not working** | Redeploy site after adding environment variables |

### View Logs

1. **Netlify Build Logs:**
   - Site settings → Deploy section
   - Click on any deployment to see logs

2. **Browser Console:**
   - Press F12 in browser
   - Check Console tab for errors

---

## Part 5: Setting Up CORS (Important!)

Make sure your backend has CORS properly configured for your Netlify URL:

In your `Backend/server.js`:

```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'https://your-netlify-url.netlify.app',
    'https://yourdomain.com',
    'http://localhost:3000'
  ],
  credentials: true
}));
```

---

## Part 6: Setting Up GitHub Automatic Deployments

By default, Netlify automatically deploys every time you push to GitHub main branch. 

To disable or configure:
1. Netlify Dashboard → Site settings → Build & deploy
2. Manage deployments section
3. You can set up branch deployments, pull request previews, etc.

---

## Part 7: Monitoring & Analytics

### Enable Netlify Analytics (Optional)

1. Netlify Dashboard → Site settings → Analytics
2. Enable Netlify Analytics to see site traffic, performance metrics

### Monitor Serverless Functions

1. Go to Functions tab in Netlify Dashboard
2. View execution logs, memory usage, and errors

---

## Final Checklist

- [ ] Backend deployed and running on Railway/Render
- [ ] MongoDB Atlas database created and connected
- [ ] Environment variables added to Netlify
- [ ] Frontend builds successfully locally
- [ ] Code pushed to GitHub
- [ ] Site deployed on Netlify
- [ ] Custom domain configured (if needed)
- [ ] CORS settings updated in backend
- [ ] Registration/authentication tested
- [ ] API calls working (check browser network tab)

---

## Useful Links

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js
- Railway Docs: https://docs.railway.app
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Netlify Troubleshooting: https://docs.netlify.com/troubleshooting/overview

---

## Support

If you encounter issues:
1. Check Netlify deployment logs
2. Check backend service logs (Railway/Render)
3. Check browser console (F12)
4. Verify all environment variables are set correctly
5. Ensure backend URL is correct in frontend config
