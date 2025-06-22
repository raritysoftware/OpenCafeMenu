#!/bin/bash
# Sunucuyu başlatmak veya sadece derlemek için script

if [[ "$1" == "build" ]]; then
  bun build menu-frontend.ts --outdir . --target browser
  echo "Frontend derlendi."
else
  bun build menu-frontend.ts --outdir . --target browser
  bun run server.ts
fi
