#!/usr/bin/env bash
set -euo pipefail

# Wechsle ins Verzeichnis dieser Datei
cd "$(dirname "$0")"

if ! command -v npm >/dev/null 2>&1; then
    echo "[Fehler] npm wurde nicht gefunden."
    echo
    echo "Installiere Node.js:    https://nodejs.org/"
    echo "Oder fnm + Node:        https://github.com/Schniz/fnm"
    exit 1
fi

# Abhaengigkeiten installieren, falls noetig
if [ ! -d "node_modules" ]; then
    echo "[Setup] node_modules fehlen - installiere Abhaengigkeiten..."
    npm install
fi

echo
echo "[Start] Vite Dev-Server wird gestartet..."
echo "        http://localhost:8080/"
echo "        Browser oeffnet sich automatisch."
echo "        Beenden mit Strg+C"
echo

# --open: Vite oeffnet den Browser, sobald der Server bereit ist
npm run dev -- --open
