# PowerShell script to update all skill icons from official sources
# Uses icon-urls.txt as the single source of truth
# Run this script from the project root (where static/ is located)

$iconFile = Join-Path $PSScriptRoot 'icon-urls.txt'
$lines = Get-Content $iconFile | Where-Object { $_ -match '\S' }
$icons = @{}
foreach ($line in $lines) {
  $parts = $line -split '\|', 2
  if ($parts.Length -eq 2) {
    $icons[$parts[0]] = $parts[1]
  }
}

$failed = @()
$success = @()

foreach ($name in $icons.Keys) {
  $url = $icons[$name]
  $dest = "static/img/$name"
  Write-Host "Downloading $name ..." -ForegroundColor Cyan
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -ErrorAction Stop
    Write-Host "  Success: $name" -ForegroundColor Green
    $success += $name
  } catch {
    Write-Warning "  Failed: $name from $url"
    $failed += $name
  }
}

Write-Host "==================== SUMMARY ====================" -ForegroundColor White
Write-Host "Total attempted: $($success.Count + $failed.Count)" -ForegroundColor White
Write-Host "Successful: $($success.Count)" -ForegroundColor Green
Write-Host "Failed: $($failed.Count)" -ForegroundColor Red

if ($success.Count -gt 0) {
  Write-Host "Successfully downloaded icons:" -ForegroundColor Green
  $success | ForEach-Object { Write-Host "  $_" -ForegroundColor Green }
}
if ($failed.Count -gt 0) {
  Write-Host "The following icons could NOT be downloaded (with URLs):" -ForegroundColor Yellow
  foreach ($fname in $failed) {
    $url = $icons[$fname]
    Write-Host "  $fname => $url" -ForegroundColor Red
  }
} else {
  Write-Host "All icons downloaded successfully!" -ForegroundColor Green
}
