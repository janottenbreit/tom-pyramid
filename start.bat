@echo off
setlocal

REM Wechsle ins Verzeichnis dieser Datei (Doppelklick-fest)
cd /d "%~dp0"

REM fnm.exe lokalisieren: erst PATH, dann WinGet-Standardpfad
set "FNM_EXE="
for %%I in (fnm.exe) do (
    if not "%%~$PATH:I"=="" set "FNM_EXE=%%~$PATH:I"
)
if not defined FNM_EXE (
    set "FNM_EXE=%LOCALAPPDATA%\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe\fnm.exe"
)

if not exist "%FNM_EXE%" (
    echo [Fehler] fnm wurde nicht gefunden.
    echo          Erwartet unter: %FNM_EXE%
    echo          Installation:   https://github.com/Schniz/fnm
    pause
    exit /b 1
)

REM Abhaengigkeiten installieren, falls noetig
if not exist "node_modules" (
    echo [Setup] node_modules fehlen - installiere Abhaengigkeiten...
    call "%FNM_EXE%" exec --using=default -- npm.cmd install
    if errorlevel 1 (
        echo.
        echo [Fehler] npm install ist fehlgeschlagen.
        pause
        exit /b 1
    )
)

echo.
echo [Start] Vite Dev-Server wird gestartet...
echo         http://localhost:5173/
echo         Browser oeffnet sich automatisch.
echo         Beenden mit Strg+C
echo.

REM --open: Vite oeffnet den Browser, sobald der Server bereit ist
call "%FNM_EXE%" exec --using=default -- npm.cmd run dev -- --open

echo.
echo [Info] Dev-Server beendet.
pause
endlocal
