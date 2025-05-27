#!/bin/bash
# Bash script to update all skill icons from official sources
# Uses icon-urls.txt as the single source of truth
# Run this script from the project root (where static/ is located)

set -e
mkdir -p static/img

success=()
failed=()

while IFS='|' read -r name url; do
  [ -z "$name" ] && continue
  echo "Downloading $name ..."
  if curl -L -f -o "static/img/$name" "$url"; then
    echo "  Success: $name"
    success+=("$name")
  else
    echo "  Failed: $name from $url"
    failed+=("$name|$url")
  fi
done < "$(dirname "$0")/icon-urls.txt"

echo "==================== SUMMARY ===================="
echo "Total attempted: $(( ${#success[@]} + ${#failed[@]} ))"
echo "Successful: ${#success[@]}"
echo "Failed: ${#failed[@]}"

if [ ${#success[@]} -gt 0 ]; then
  echo "Successfully downloaded icons:"
  for s in "${success[@]}"; do
    echo "  $s"
  done
fi
if [ ${#failed[@]} -gt 0 ]; then
  echo "The following icons could NOT be downloaded (with URLs):"
  for f in "${failed[@]}"; do
    name="${f%%|*}"
    url="${f#*|}"
    echo "  $name => $url"
  done
else
  echo "All icons downloaded successfully!"
fi
