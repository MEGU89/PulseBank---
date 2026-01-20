# PulseBank - Deployment Checklist

## ✅ Pre-Deployment Tasks

### Frontend (Next.js)
- [ ] Run `npm run build` locally and verify no errors
- [ ] Test production build with `npm run start`
- [ ] Check all environment variables in `.env.production.local`
- [ ] Verify Socket.IO connection URLs are correct
- [ ] Test pages load without errors
- [ ] Verify images optimize (no Leaflet map issues)

### Backend (Node.js)
- [ ] Create `.env` file with all required variables
- [ ] Test locally with `npm run dev`
- [ ] Verify MongoDB connection works
- [ ] Test email notifications send
- [ ] Verify Socket.IO is working
- [ ] Check all routes return correct responses
- [ ] Verify JWT token generation and validation

### Database (MongoDB)
- [ ] Create MongoDB Atlas account
- [ ] Create a production cluster
- [ ] Get connection string
- [ ] Add IP whitelist (Allow all or specific IP)
- [ ] Create database user
- [ ] Test connection locally

---

## 🚀 Deployment Steps

### Step 1: Deploy Backend (Choose One)

#### Railway Deployment
- [ ] Create Railway account at railway.app
- [ ] Connect GitHub repository
- [ ] Auto-detect Node.js service
- [ ] Add environment variables:
  - `MONGODB_URI` → MongoDB Atlas connection
  - `JWT_SECRET` → Secure random string
  - `EMAIL_SERVICE`, `EMAIL_USER`, `EMAIL_PASSWORD`
  - `TWILIO_SID`, `TWILIO_AUTH_TOKEN`
  - `NODE_ENV` → production
  - `PORT` → 5000
  - `FRONTEND_URL` → https://your-domain.vercel.app
- [ ] Deploy and get backend URL
- [ ] Test with `curl https://your-backend-url/health` (if health endpoint exists)

#### Render Deployment
- [ ] Create Render account at render.com
- [ ] Click "New Web Service"
- [ ] Connect GitHub repository
- [ ] Set build command: `npm install`
- [ ] Set start command: `node server.js`
- [ ] Add same environment variables as above
- [ ] Deploy and get backend URL

#### Heroku Deployment (Legacy)
- [ ] Install Heroku CLI
- [ ] Run `heroku create your-app-name`
- [ ] Set config vars: `heroku config:set MONGODB_URI=...`
- [ ] Deploy: `git push heroku main`
- [ ] Get backend URL

### Step 2: Configure CORS on Backend

Update `Backend/server.js` CORS to only accept frontend:
```javascript
const allowedOrigins = [
  "https://your-domain.vercel.app",
  "https://www.your-domain.vercel.app",
  process.env.FRONTEND_URL
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
```

- [ ] Update CORS in server.js
- [ ] Deploy backend with new configuration

### Step 3: Deploy Frontend on Vercel

- [ ] Commit all changes: `git add . && git commit -m "Deploy ready"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Go to vercel.com and sign in with GitHub
- [ ] Click "Add New" → "Project"
- [ ] Select PulseBank repository
- [ ] Framework Preset: Next.js (auto-detected)
- [ ] Root Directory: `./` (the root folder)
- [ ] Skip "Link Existing Project"
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete (takes 2-3 minutes)

### Step 4: Configure Vercel Environment Variables

- [ ] Go to Project Settings → Environment Variables
- [ ] Add:
  ```
  NEXT_PUBLIC_API_URL = https://your-backend-url.railway.app
  NEXT_PUBLIC_SOCKET_URL = https://your-backend-url.railway.app
  ```
- [ ] Click "Save"
- [ ] Go to Deployments → Click the latest deployment → Click "Redeploy"
- [ ] Wait for redeployment

### Step 5: Test Deployment

- [ ] Open Vercel URL in browser
- [ ] Check if page loads
- [ ] Open DevTools Console for errors
- [ ] Try to register a new donor account
- [ ] Check if you can log in
- [ ] Open DevTools Network tab and look for WebSocket connections
- [ ] If WebSocket shows "WS" → Good! Real-time is working
- [ ] If request fails → Check backend URL in environment variables

---

## 🐛 Troubleshooting

### Issue: "Cannot POST /auth/register" or 404 errors
**Solution:**
1. Check `NEXT_PUBLIC_API_URL` is correct (no trailing slash)
2. Verify backend is running and accessible
3. Check CORS is configured correctly on backend
4. Test backend directly: `curl https://your-backend-url/auth/login` (should get 404 or error, not connection refused)

### Issue: WebSocket connection fails (orange WS in Network tab)
**Solution:**
1. Check `NEXT_PUBLIC_SOCKET_URL` is correct
2. Verify Socket.IO is enabled on backend
3. Check if backend URL uses HTTPS (required for WebSocket over Internet)
4. On Railway/Render, manually enable Websocket support if needed

### Issue: Cannot connect to MongoDB
**Solution:**
1. Verify `MONGODB_URI` is correct (copy from MongoDB Atlas)
2. Check IP whitelist in MongoDB Atlas settings
3. If "Operation timed out": Add Railway/Render IP to MongoDB whitelist
4. Test connection string locally first before deploying

### Issue: Emails not sending
**Solution:**
1. Verify Gmail app password (not regular password) is used
2. Enable "Less secure app access" in Gmail account
3. Check EMAIL_USER and EMAIL_PASSWORD in environment variables
4. Test email sending locally first

### Issue: Vercel build fails
**Solution:**
1. Run `npm run build` locally to see the exact error
2. Common issues:
   - TypeScript errors: Check `next.config.mjs` has `ignoreBuildErrors: true`
   - Missing dependencies: Run `npm install`
   - Wrong environment variables: Check `.env.local`
3. After fixing locally, commit and push, then Vercel will rebuild

---

## 📊 Post-Deployment Verification

### Frontend (Vercel)
- [ ] Visit https://your-domain.vercel.app
- [ ] Check page loads without 404 or errors
- [ ] Login works
- [ ] Can create new requests
- [ ] Dashboard displays correctly

### Backend (Railway/Render)
- [ ] Backend URL is accessible
- [ ] API endpoints respond
- [ ] Database queries work
- [ ] Email notifications send

### Real-Time Features
- [ ] Open two browsers with same app
- [ ] Create a request in one
- [ ] Check if it appears real-time in the other
- [ ] Verify WebSocket connection in Network tab

### Database
- [ ] MongoDB Atlas shows active connections
- [ ] Collections are being created/updated
- [ ] No "access denied" errors in logs

---

## 🎯 Domain Configuration (Optional)

### Custom Domain Setup
1. Go to Vercel → Project Settings → Domains
2. Enter your custom domain (e.g., `pulsebank.com`)
3. Vercel shows DNS records to add to your registrar
4. Add DNS records at your domain registrar
5. Wait 24-48 hours for DNS propagation
6. Vercel will auto-detect and setup SSL

---

## 📱 Final Production Checklist

- [ ] All three parts deployed (Frontend, Backend, Database)
- [ ] No console errors in browser
- [ ] Real-time features working (WebSocket green)
- [ ] Can register and login
- [ ] Can create blood requests
- [ ] Can schedule donations
- [ ] Emails sending correctly
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)
- [ ] Backup strategy in place
- [ ] Monitoring setup (optional but recommended)

---

## 📝 Important Notes

1. **Never commit `.env` files** - Keep credentials private
2. **Use `.env.example`** - Document required variables
3. **Monitor costs** - MongoDB Atlas free tier has limits
4. **Backup database** - Setup automated backups in MongoDB Atlas
5. **Keep dependencies updated** - Regular security patches
6. **Monitor error logs** - Check Vercel and backend logs for issues

