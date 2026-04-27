$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

# Bevorzugt: fnm (Fast Node Manager) - falls vorhanden, nutzt die default Node-Version
# Fallback:  system-weites npm aus dem PATH

$useFnm = $false
$fnmCmd = Get-Command fnm -ErrorAction SilentlyContinue
if (-not $fnmCmd) {
    $candidate = Join-Path $env:LOCALAPPDATA 'Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe\fnm.exe'
    if (Test-Path $candidate) {
        $env:Path = (Split-Path $candidate) + ';' + $env:Path
        $fnmCmd = Get-Command fnm -ErrorAction SilentlyContinue
    }
}

if ($fnmCmd) {
    fnm env --use-on-cd | Out-String | Invoke-Expression
    $null = fnm use default 2>&1
    $useFnm = $true
    Write-Host '[Info] fnm gefunden - nutze default Node-Version.' -ForegroundColor DarkGray
}

# npm-Verfuegbarkeit pruefen (entweder via fnm-PATH-Setup oder system-weit)
$npmCmd = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npmCmd) {
    Write-Host '[Fehler] Weder fnm noch npm wurden gefunden.' -ForegroundColor Red
    Write-Host ''
    Write-Host 'Installiere Node.js:    https://nodejs.org/'
    Write-Host 'Oder fnm + Node:        https://github.com/Schniz/fnm'
    Read-Host 'Enter zum Beenden'
    exit 1
}

if ($useFnm) {
    Write-Host ('[Info] Node {0}' -f (& node --version)) -ForegroundColor DarkGray
}

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
Write-Host '        http://localhost:8080/'
Write-Host '        Browser oeffnet sich automatisch.'
Write-Host '        Beenden mit Strg+C'
Write-Host ''

npm run dev -- --open

Write-Host ''
Write-Host '[Info] Dev-Server beendet.' -ForegroundColor Yellow
Read-Host 'Enter zum Schliessen'
