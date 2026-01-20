# 📋 PulseBank Deployment - Quick Reference Card

## Phase 1: MongoDB (5 mins)

| Step | Action | Result |
|------|--------|--------|
| 1 | Go to mongodb.com/cloud/atlas | MongoDB site opens |
| 2 | Sign up with Google/GitHub | Account created |
| 3 | Create free "Shared" cluster | Cluster appears (wait 5-10 mins) |
| 4 | Database Access → Add user | User: pulsebank_admin |
| 5 | Network Access → Allow all | IPs whitelisted |
| 6 | Connect → Copy URI | **MONGO_URI obtained** ✓ |

**Your MongoDB URI:**
```
mongodb+srv://pulsebank_admin:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

## Phase 2: Backend on Railway (10 mins)

| Step | Action | Result |
|------|--------|--------|
| 1 | Go to railway.app | Railway site opens |
| 2 | Sign up with GitHub | Account + auth done |
| 3 | New Project → from GitHub | Select PulseBank-main |
| 4 | Auto-detects Node.js | Backend service created |
| 5 | Variables tab → Add 6 variables | See table below ↓ |
| 6 | Deploy | Deployment starts |
| 7 | Copy backend URL | **Backend URL obtained** ✓ |

**Environment Variables to Add:**

| Name | Value |
|------|-------|
| `MONGO_URI` | mongodb+srv://... (from Phase 1) |
| `JWT_SECRET` | random-secret-key-12345 |
| `NODE_ENV` | production |
| `PORT` | 5000 |
| `EMAIL_SERVICE` | gmail |
| `EMAIL_USER` | your-email@gmail.com |
| `EMAIL_PASSWORD` | xxxx xxxx xxxx xxxx |
| `TWILIO_SID` | (optional) |
| `TWILIO_AUTH_TOKEN` | (optional) |

**Your Backend URL:**
```
https://pulsebank-abc123.railway.app
```

---

## Phase 3: Frontend Config (2 mins)

| Step | Action | Result |
|------|--------|--------|
| 1 | Create file `.env.production.local` | New file created |
| 2 | Add backend URL | See contents ↓ |
| 3 | Save file | Saved |

**File: `.env.production.local`**
```
NEXT_PUBLIC_API_URL=https://pulsebank-abc123.railway.app
NEXT_PUBLIC_SOCKET_URL=https://pulsebank-abc123.railway.app
```

**Test locally:**
```powershell
npm run build
# Should complete without errors
```

---

## Phase 4: Frontend on Vercel (5 mins)

| Step | Action | Result |
|------|--------|--------|
| 1 | `git add .` | Changes staged |
| 2 | `git commit -m "Deploy: ..."` | Commit created |
| 3 | `git push origin main` | Pushed to GitHub |
| 4 | Go to vercel.com | Vercel site opens |
| 5 | Sign up with GitHub | Account + auth done |
| 6 | Add New → Project | Select PulseBank-main |
| 7 | Auto-config detects settings | Settings look good ✓ |
| 8 | Click Deploy | Deployment starts |
| 9 | Variables → Add 2 vars | See table below ↓ |
| 10 | Redeploy | Deployment with env vars |
| 11 | Copy frontend URL | **Frontend URL obtained** ✓ |

**Environment Variables to Add:**

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_API_URL` | https://pulsebank-abc123.railway.app |
| `NEXT_PUBLIC_SOCKET_URL` | https://pulsebank-abc123.railway.app |

**Your Frontend URL:**
```
https://pulsebank-main.vercel.app
```

---

## Phase 5: Testing (5 mins)

### Test 1: Frontend Loads
```
✓ Open: https://pulsebank-main.vercel.app
✓ See landing page
✓ No console errors (F12)
```

### Test 2: Registration Works
```
✓ Click "Register"
✓ Fill form with test data
✓ Submit
✓ Account created
✓ Redirected to dashboard
```

### Test 3: API Connection Works
```
✓ Open F12 → Network tab
✓ Do any action
✓ See requests to backend URL
✓ Responses have status 200/201
```

### Test 4: Real-Time Works
```
✓ Open F12 → Network tab
✓ Filter: WS
✓ Should see WebSocket connection
✓ Status: 101 (green)
```

### Test 5: Email Works
```
✓ Register with real email
✓ Check inbox
✓ Welcome email arrived
✓ Email has links
```

---

## 📊 Deployment URLs Summary

After all phases:

```
Frontend URL:  https://pulsebank-main.vercel.app
Backend URL:   https://pulsebank-abc123.railway.app
Database:      MongoDB Atlas (cloud)
```

**Share with users:**
```
✓ Give them: https://pulsebank-main.vercel.app
✗ Don't give them backend URL
✗ Database URL is private
```

---

## 🔑 Important Credentials (Keep Safe!)

```
MongoDB:
  Username: pulsebank_admin
  Password: [your-password]
  URI: mongodb+srv://...

Backend (Railway):
  URL: https://pulsebank-xyz.railway.app
  
Frontend (Vercel):
  URL: https://pulsebank-main.vercel.app

Gmail App Password:
  Password: xxxx xxxx xxxx xxxx
```

**Never commit these to GitHub!**

---

## ⚠️ Common Issues & Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| Frontend shows blank page | Check Vercel logs, verify env vars |
| Can't register account | Check MongoDB connection in Railway logs |
| API shows 404 errors | Verify backend URL in .env.production.local |
| WebSocket connection fails | Check SOCKET_URL env var, use https:// |
| No emails received | Verify Gmail app password, check spam folder |
| "Cannot reach backend" error | Check backend is running on Railway, CORS enabled |

---

## 📝 Deployment Checklist

```
☐ MongoDB cluster created
☐ Database user added (pulsebank_admin)
☐ IP whitelist configured
☐ MONGO_URI copied

☐ Railway account created
☐ GitHub repo connected
☐ All 9 env variables added
☐ Backend deployed successfully
☐ Backend URL copied

☐ .env.production.local created
☐ Backend URL added (2 variables)
☐ Local build tested (npm run build)

☐ Changes pushed to GitHub
☐ Vercel account created
☐ Project imported
☐ 2 env variables added
☐ Redeployed
☐ Frontend URL copied

☐ Frontend loads without errors
☐ Can register account
☐ API connection works
☐ WebSocket connection works
☐ Emails sending
```

---

## 🚀 Go Live!

When all tests pass:

1. **Share URL:** `https://pulsebank-main.vercel.app`
2. **Tell users:** Platform is live
3. **Monitor:** Check logs regularly
4. **Scale:** As users increase

---

**Deployment Completed On:** January 20, 2026
**Total Time:** ~30 minutes
**Status:** ✅ Live
