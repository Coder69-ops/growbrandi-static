# GrowBrandi Local Development Server
# This script starts a local web server for testing

Write-Host ""
Write-Host "🚀 GrowBrandi - Local Development Server" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""

# Check current directory
$currentPath = Get-Location
if ($currentPath.Path -notlike "*html-version*") {
    Write-Host "⚠️  Not in html-version directory!" -ForegroundColor Yellow
    Write-Host "   Attempting to navigate..." -ForegroundColor Yellow
    
    $htmlVersionPath = Join-Path $currentPath "html-version"
    if (Test-Path $htmlVersionPath) {
        Set-Location $htmlVersionPath
        Write-Host "✅ Navigated to html-version folder" -ForegroundColor Green
    } else {
        Write-Host "❌ Cannot find html-version folder!" -ForegroundColor Red
        Write-Host "   Please run this script from the project directory." -ForegroundColor Red
        exit 1
    }
}

Write-Host "📂 Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Check for available server options
$pythonAvailable = $false
$phpAvailable = $false
$nodeAvailable = $false

# Check Python
try {
    $pythonVersion = python --version 2>&1
    if ($pythonVersion -match "Python") {
        $pythonAvailable = $true
        Write-Host "✅ Python detected: $pythonVersion" -ForegroundColor Green
    }
} catch {}

# Check PHP
try {
    $phpVersion = php --version 2>&1
    if ($phpVersion -match "PHP") {
        $phpAvailable = $true
        Write-Host "✅ PHP detected: $($phpVersion.Split([Environment]::NewLine)[0])" -ForegroundColor Green
    }
} catch {}

# Check Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($nodeVersion -match "v") {
        $nodeAvailable = $true
        Write-Host "✅ Node.js detected: $nodeVersion" -ForegroundColor Green
    }
} catch {}

Write-Host ""

if (-not ($pythonAvailable -or $phpAvailable -or $nodeAvailable)) {
    Write-Host "❌ No web server available!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install one of the following:" -ForegroundColor Yellow
    Write-Host "  • Python: https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host "  • PHP: https://www.php.net/downloads" -ForegroundColor Yellow
    Write-Host "  • Node.js: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# Ask user which server to use if multiple available
$serverChoice = ""

if ($pythonAvailable -and $phpAvailable -and $nodeAvailable) {
    Write-Host "Multiple servers available. Choose one:" -ForegroundColor Cyan
    Write-Host "  1) Python (recommended)" -ForegroundColor White
    Write-Host "  2) PHP" -ForegroundColor White
    Write-Host "  3) Node.js (http-server)" -ForegroundColor White
    Write-Host ""
    $choice = Read-Host "Enter choice (1-3, default: 1)"
    
    switch ($choice) {
        "2" { $serverChoice = "php" }
        "3" { $serverChoice = "node" }
        default { $serverChoice = "python" }
    }
} elseif ($pythonAvailable) {
    $serverChoice = "python"
} elseif ($phpAvailable) {
    $serverChoice = "php"
} elseif ($nodeAvailable) {
    $serverChoice = "node"
}

Write-Host ""
Write-Host "🌐 Starting web server..." -ForegroundColor Green
Write-Host ""

# Start the appropriate server
switch ($serverChoice) {
    "python" {
        Write-Host "📡 Starting Python HTTP Server on port 8000..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🌍 Open in browser:" -ForegroundColor Green
        Write-Host "   http://localhost:8000" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "📋 Test page:" -ForegroundColor Green
        Write-Host "   http://localhost:8000/test.html" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
        Write-Host ""
        python -m http.server 8000
    }
    "php" {
        Write-Host "📡 Starting PHP Development Server on port 8000..." -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🌍 Open in browser:" -ForegroundColor Green
        Write-Host "   http://localhost:8000" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "📋 Test page:" -ForegroundColor Green
        Write-Host "   http://localhost:8000/test.html" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
        Write-Host ""
        php -S localhost:8000
    }
    "node" {
        Write-Host "📡 Starting Node.js HTTP Server on port 8000..." -ForegroundColor Cyan
        Write-Host ""
        
        # Check if http-server is installed
        try {
            $httpServerCheck = npx http-server --version 2>&1
            if ($httpServerCheck -match "http-server") {
                Write-Host "🌍 Open in browser:" -ForegroundColor Green
                Write-Host "   http://localhost:8000" -ForegroundColor Yellow
                Write-Host ""
                Write-Host "📋 Test page:" -ForegroundColor Green
                Write-Host "   http://localhost:8000/test.html" -ForegroundColor Yellow
                Write-Host ""
                Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
                Write-Host ""
                npx http-server -p 8000
            } else {
                Write-Host "Installing http-server (one-time)..." -ForegroundColor Yellow
                npx http-server -p 8000
            }
        } catch {
            Write-Host "❌ Failed to start Node.js server" -ForegroundColor Red
            Write-Host "   Try: npm install -g http-server" -ForegroundColor Yellow
            exit 1
        }
    }
}

Write-Host ""
Write-Host "Server stopped." -ForegroundColor Gray
