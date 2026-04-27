$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

# fnm.exe finden: PATH zuerst, sonst bekannten WinGet-Pfad probieren
$fnmCmd = Get-Command fnm -ErrorAction SilentlyContinue
if (-not $fnmCmd) {
    $candidate = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe\fnm.exe'
    if (Test-Path $candidate) {
        $env:Path = (Split-Path $candidate) + ';' + $env:Path
        $fnmCmd = Get-Command fnm -ErrorAction SilentlyContinue
    }
}

if (-not $fnmCmd) {
    Write-Host '[Fehler] fnm wurde nicht gefunden.' -ForegroundColor Red
    Write-Host '         Installation: https://github.com/Schniz/fnm'
    Read-Host 'Enter zum Beenden'
    exit 1
}

# fnm in aktuelle Session laden (setzt PATH auf aktive Node-Version)
fnm env --use-on-cd | Out-String | Invoke-Expression

# Default-Version aktivieren (falls vorhanden)
$null = fnm use default 2>&1

# Node verifizieren
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    Write-Host '[Fehler] Node.js konnte nicht aktiviert werden.' -ForegroundColor Red
    Write-Host '         Bitte einmal: fnm install --lts && fnm default lts-latest'
    Read-Host 'Enter zum Beenden'
    exit 1
}

Write-Host ('[Info] Node {0}, npm aus fnm aktiv.' -f (& node --version)) -ForegroundColor DarkGray

# Abhaengigkeiten installieren, falls noetig
if (-not (Test-Path 'node_modules')) {
    Write-Host '[Setup] node_modules fehlen - installiere Abhaengigkeiten...' -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host '[Fehler] npm install fehlgeschlagen.' -ForegroundColor Red
        Read-Host 'Enter zum Beenden'
        exit 1
    }
}

Write-Host ''
Write-Host '[Start] Vite Dev-Server wird gestartet...' -ForegroundColor Green
Write-Host '        http://localhost:5173/'
Write-Host '        Browser oeffnet sich automatisch.'
Write-Host '        Beenden mit Strg+C'
Write-Host ''

npm run dev -- --open

Write-Host ''
Write-Host '[Info] Dev-Server beendet.' -ForegroundColor Yellow
Read-Host 'Enter zum Schliessen'
