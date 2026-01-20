# **PulseBank - Vercel Deployment Guide**

## **Overview**
Since PulseBank is a full-stack application, you need to deploy:
- **Frontend (Next.js)** → Vercel ✅
- **Backend (Node.js/Express)** → Railway, Render, or Heroku
- **Database (MongoDB)** → MongoDB Atlas

---

## **Part 1: Backend Deployment**

### **Option A: Deploy on Railway (Recommended)**

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub"
   - Select your PulseBank repository
   - Railway auto-detects Node.js project

3. **Configure Environment Variables**
   - In Railway Dashboard → Variables
   - Add these variables:
     ```
     MONGODB_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_jwt_secret_key
     EMAIL_SERVICE=gmail
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASSWORD=your_app_password
     TWILIO_SID=your_twilio_sid
     TWILIO_AUTH_TOKEN=your_twilio_token
     NODE_ENV=production
     PORT=5000
     ```

4. **Get Backend URL**
   - After deployment, Railway provides a URL like: `https://your-app.railway.app`
   - Copy this URL for frontend configuration

---

### **Option B: Deploy on Render (Alternative)**

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select "Backend" directory (if asked)
   - Build command: `npm install`
   - Start command: `node server.js`

3. **Set Environment Variables**
   - In Render Dashboard → Environment
   - Add all the variables listed above

4. **Get Backend URL**
   - Copy the provided Render URL (e.g., `https://your-app.onrender.com`)

---

### **Option C: Deploy on Heroku (Legacy)**

1. **Install Heroku CLI** and log in
2. **Create app**: `heroku create your-app-name`
3. **Set environment variables**: `heroku config:set MONGODB_URI=...`
4. **Deploy**: `git push heroku main`

---

## **Part 2: Frontend Deployment on Vercel**

### **Step 1: Prepare Frontend**

1. **Update Environment Variables**
   - Create `.env.production.local` in project root:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
   NEXT_PUBLIC_SOCKET_URL=https://your-backend-url.railway.app
   ```
   
   Replace `your-backend-url.railway.app` with your actual backend URL

2. **Verify Next.js Config**
   - Check `next.config.mjs` is configured correctly ✓

3. **Build Locally** (Test)
   ```bash
   npm run build
   npm run start
   ```

### **Step 2: Push to GitHub**

```bash
cd c:\Users\harsh\Downloads\PulseBank-main
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### **Step 3: Deploy on Vercel**

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/log in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your PulseBank repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (root of repo)
   - Click "Deploy"

4. **Add Environment Variables** (After first deploy)
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_API_URL = https://your-backend-url.railway.app
     NEXT_PUBLIC_SOCKET_URL = https://your-backend-url.railway.app
     ```
   - Redeploy to apply changes

### **Step 4: Custom Domain (Optional)**

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `pulsebank.com`)
3. Update DNS records (instructions provided by Vercel)

---

## **Part 3: Database Setup (MongoDB Atlas)**

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Sign up and create a free cluster

2. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the URI (looks like): 
     ```
     mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
     ```

3. **Set in Backend Environment**
   - Add `MONGODB_URI` to Railway/Render with this connection string

---

## **Part 4: Verify Everything**

### **Check Backend Health**
```bash
curl https://your-backend-url.railway.app/health
```

### **Check Socket.IO Connection**
- Open Vercel frontend
- Open browser DevTools → Network → WS
- Look for WebSocket connections to backend

### **Test Full Flow**
1. Register a donor account
2. Create a blood request
3. Check real-time updates
4. Verify emails are sent

---

## **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| Frontend can't reach backend | Update `NEXT_PUBLIC_API_URL` in Vercel environment |
| CORS errors | Ensure backend has `cors` enabled with Vercel frontend URL |
| WebSocket not connecting | Check both `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SOCKET_URL` point to backend |
| Build fails on Vercel | Check build logs; usually `npm run build` fails locally first |
| Database connection fails | Verify `MONGODB_URI` is correct and IP whitelist includes Vercel |

---

## **Post-Deployment Checklist**

- [ ] Backend deployed and running
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set on both
- [ ] WebSocket connection working
- [ ] Emails sending correctly
- [ ] Database queries working
- [ ] Real-time features (Socket.IO) functional
- [ ] All pages loading without errors
- [ ] Authentication working
- [ ] Custom domain configured (if applicable)

---

## **Deployment Monitoring**

### **Vercel Analytics**
- Dashboard shows performance metrics
- Check "Speed Insights" for performance

### **Backend Monitoring**
- Railway/Render shows logs in real-time
- Set up alerts for failures

### **Database**
- MongoDB Atlas shows connection stats
- Monitor for slow queries

---

## **Quick Reference URLs After Deployment**

```
Frontend URL: https://pulsebank.vercel.app (or your domain)
Backend URL: https://your-app.railway.app (or your backend domain)
MongoDB: mongodb+srv://... (from Atlas)
```

---

## **Need Help?**

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

