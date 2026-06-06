#!/usr/bin/env bash

# This script downloads required assets which should NOT be commited.
# The assets are stored so that Svelte / Vite automatically serves them
# -> works for production docker image & your dev setup!

set -euo pipefail


# ==== CONFIGURATION ====
TARGET_DIR="$PWD/static/maplibre"
# for basemap-assets
BASEMAPS_ASSETS_ZIP="https://github.com/protomaps/basemaps-assets/archive/refs/heads/main.zip"
# for tiles
PROTOMAPS_BUILD="https://build.protomaps.com/20260605.pmtiles"
TILES_NAME="karlsruhe.pmtiles"
TILES_BBOX="8.016586,48.853195,8.895493,49.158359" # same bbox as used throughout this project
# pmtiles binary
PMTILES_NIX_FLAKE_PKG="nixpkgs#pmtiles"
PMTILES_DOCKER_IMAGE="docker.io/protomaps/go-pmtiles"


# ==== TEMP SETUP ====
TMPDIR="$(mktemp -d)"
function cleanup {
    rm -rf "$TMPDIR"
}
trap cleanup EXIT

mkdir -p "$TARGET_DIR"


set +x
echo ">>> Downloading basemap-assets..."
set -x

ZIP_PATH="$TMPDIR/main.zip"
curl -L "$BASEMAPS_ASSETS_ZIP" -o "$ZIP_PATH"
unzip -q "$ZIP_PATH" -d "$TMPDIR"

EXTRACTED_DIR="$TMPDIR/basemaps-assets-main"
cp -r "$EXTRACTED_DIR/fonts" "$TARGET_DIR/"
cp -r "$EXTRACTED_DIR/sprites" "$TARGET_DIR/"


set +x
echo ">>> Download & Generate tiles ..."
set -x

COMMON_ARGS=(
    extract
    "$PROTOMAPS_BUILD"
    "$TILES_NAME"
    --bbox="$TILES_BBOX"
)

if command -v pmtiles >/dev/null 2>&1; then
    (cd "$TARGET_DIR" && pmtiles "${COMMON_ARGS[@]}")
elif command -v nix >/dev/null 2>&1; then
    (cd "$TARGET_DIR" && nix run nixpkgs#pmtiles -- "${COMMON_ARGS[@]}")
elif command -v podman >/dev/null 2>&1; then
    podman run --rm -v "$TARGET_DIR:/data" -w /data "$PMTILES_DOCKER_IMAGE" "${COMMON_ARGS[@]}"
elif command -v docker >/dev/null 2>&1; then
    docker run --rm -v "$TARGET_DIR:/data" -w /data "$PMTILES_DOCKER_IMAGE" "${COMMON_ARGS[@]}"
else
    echo "Error: need one of pmtiles, nix, podman, or docker installed." >&2
    exit 1
fi


echo "Done."
