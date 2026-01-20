# Quick deployment script for PulseBank on Windows

Write-Host "🚀 PulseBank Deployment Quick Start" -ForegroundColor Green
Write-Host "====================================" -ForegroundColor Green
Write-Host ""

# Step 1: Prepare Frontend
Write-Host "📦 Step 1: Building frontend..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Frontend build failed. Fix errors above and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Frontend build successful" -ForegroundColor Green
Write-Host ""

# Step 2: Prepare Backend
Write-Host "📦 Step 2: Checking backend..." -ForegroundColor Yellow
Push-Location Backend
npm install
Pop-Location

Write-Host "✅ Backend dependencies installed" -ForegroundColor Green
Write-Host ""

# Step 3: Git commands
Write-Host "📤 Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: frontend and backend ready for production"
git push origin main

Write-Host "✅ Pushed to GitHub" -ForegroundColor Green
Write-Host ""

Write-Host "🎉 Ready for deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Deploy Backend:" -ForegroundColor White
Write-Host "   - Go to railway.app or render.com" -ForegroundColor White
Write-Host "   - Connect your GitHub repository" -ForegroundColor White
Write-Host "   - Add environment variables from Backend\.env.example" -ForegroundColor White
Write-Host ""
Write-Host "2. Copy your backend URL (e.g., https://your-app.railway.app)" -ForegroundColor White
Write-Host ""
Write-Host "3. Deploy Frontend:" -ForegroundColor White
Write-Host "   - Go to vercel.com" -ForegroundColor White
Write-Host "   - Import this repository" -ForegroundColor White
Write-Host "   - Add environment variables from .env.production.example" -ForegroundColor White
Write-Host "   - Use your backend URL" -ForegroundColor White
Write-Host ""
Write-Host "4. Test:" -ForegroundColor White
Write-Host "   - Visit your Vercel URL" -ForegroundColor White
Write-Host "   - Create an account and test features" -ForegroundColor White
Write-Host ""
