#!/bin/bash
# Quick deployment commands for PulseBank

echo "🚀 PulseBank Deployment Quick Start"
echo "===================================="
echo ""

# Step 1: Prepare Frontend
echo "📦 Step 1: Building frontend..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed. Fix errors above and try again."
    exit 1
fi

echo "✅ Frontend build successful"
echo ""

# Step 2: Prepare Backend
echo "📦 Step 2: Checking backend..."
cd Backend
npm install
cd ..

echo "✅ Backend dependencies installed"
echo ""

# Step 3: Git commands
echo "📤 Step 3: Pushing to GitHub..."
git add .
git commit -m "Deploy: frontend and backend ready for production"
git push origin main

echo "✅ Pushed to GitHub"
echo ""

echo "🎉 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Deploy Backend:"
echo "   - Go to railway.app or render.com"
echo "   - Connect your GitHub repository"
echo "   - Add environment variables from Backend/.env.example"
echo ""
echo "2. Copy your backend URL (e.g., https://your-app.railway.app)"
echo ""
echo "3. Deploy Frontend:"
echo "   - Go to vercel.com"
echo "   - Import this repository"
echo "   - Add environment variables from .env.production.example"
echo "   - Use your backend URL"
echo ""
echo "4. Test:"
echo "   - Visit your Vercel URL"
echo "   - Create an account and test features"
echo ""
