#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
VAULT_ROOT="$(cd -- "${SITE_ROOT}/.." && pwd)"
CONTENT_DIR="${SITE_ROOT}/content"

mkdir -p "${CONTENT_DIR}"

# Reset generated content and resync only the publishable markdown subsets.
find "${CONTENT_DIR}" -mindepth 1 -maxdepth 1 ! -name '.gitkeep' -exec rm -rf {} +

cp "${VAULT_ROOT}/index.md" "${CONTENT_DIR}/index.md"
cp "${VAULT_ROOT}/log.md" "${CONTENT_DIR}/log.md"

rsync -a \
  --include '*/' \
  --include '*.md' \
  --exclude '*' \
  "${VAULT_ROOT}/wiki/" "${CONTENT_DIR}/wiki/"

rsync -a \
  --include '*/' \
  --include '*.md' \
  --exclude '*' \
  "${VAULT_ROOT}/Clippings/" "${CONTENT_DIR}/Clippings/"

