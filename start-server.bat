@echo off
title GrowBrandi - Local Development Server
color 0A

echo.
echo ========================================
echo    GrowBrandi - Local Dev Server
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python detected
    echo.
    echo Starting Python HTTP Server on port 8000...
    echo.
    echo Open in browser: http://localhost:8000
    echo Test page: http://localhost:8000/test.html
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

REM Check if PHP is available
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] PHP detected
    echo.
    echo Starting PHP Development Server on port 8000...
    echo.
    echo Open in browser: http://localhost:8000
    echo Test page: http://localhost:8000/test.html
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    php -S localhost:8000
    goto :end
)

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Node.js detected
    echo.
    echo Starting Node.js HTTP Server on port 8000...
    echo.
    echo Open in browser: http://localhost:8000
    echo Test page: http://localhost:8000/test.html
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    npx http-server -p 8000
    goto :end
)

REM No server found
echo [ERROR] No web server available!
echo.
echo Please install one of the following:
echo   - Python: https://www.python.org/downloads/
echo   - PHP: https://www.php.net/downloads
echo   - Node.js: https://nodejs.org/
echo.
pause
goto :end

:end
echo.
echo Server stopped.
pause
