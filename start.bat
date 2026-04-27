@echo off
setlocal

REM Wechsle ins Verzeichnis dieser Datei (Doppelklick-fest)
cd /d "%~dp0"

REM Bevorzugt: fnm (Fast Node Manager) - falls vorhanden, nutzt die default Node-Version
REM Fallback:  system-weites npm aus dem PATH

set "FNM_EXE="

REM fnm.exe im PATH suchen
for %%I in (fnm.exe) do (
    if not "%%~$PATH:I"=="" set "FNM_EXE=%%~$PATH:I"
)

REM Falls nicht im PATH: bekannte WinGet-Installation pruefen
if not defined FNM_EXE (
    if exist "%LOCALAPPDATA%\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe\fnm.exe" (
        set "FNM_EXE=%LOCALAPPDATA%\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe\fnm.exe"
    )
)

if defined FNM_EXE (
    echo [Info] fnm gefunden - nutze default Node-Version.
    goto :have_runtime
)

REM Pruefe, ob npm system-weit verfuegbar ist
where npm >nul 2>nul
if errorlevel 1 (
    echo [Fehler] Weder fnm noch npm wurden gefunden.
    echo.
    echo Installiere Node.js:    https://nodejs.org/
    echo Oder fnm + Node:        https://github.com/Schniz/fnm
    echo.
    pause
    exit /b 1
)

:have_runtime

REM Abhaengigkeiten installieren, falls noetig
if not exist "node_modules" (
    echo [Setup] node_modules fehlen - installiere Abhaengigkeiten...
    if defined FNM_EXE (
        call "%FNM_EXE%" exec --using=default -- npm.cmd install
    ) else (
        call npm install
    )
    if errorlevel 1 (
        echo.
        echo [Fehler] npm install ist fehlgeschlagen.
        pause
        exit /b 1
    )
)

echo.
echo [Start] Vite Dev-Server wird gestartet...
echo         http://localhost:8080/
echo         Browser oeffnet sich automatisch.
echo         Beenden mit Strg+C
echo.

REM --open: Vite oeffnet den Browser, sobald der Server bereit ist
if defined FNM_EXE (
    call "%FNM_EXE%" exec --using=default -- npm.cmd run dev -- --open
) else (
    call npm run dev -- --open
)

echo.
echo [Info] Dev-Server beendet.
pause
endlocal
