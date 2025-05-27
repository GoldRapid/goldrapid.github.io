# PowerShell script to update all skill icons from official sources
# Run this script from the project root (where static/ is located)

$icons = @{
  'azuredevops.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg'
  'githubactions.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg'
  'gitlab.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gitlab.svg'
  'jira.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg'
  'terraform.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform.svg'
  'bicep.svg' = 'https://raw.githubusercontent.com/Azure/bicep/main/docs/bicep-color.svg'
  'powershell.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg'
  'bash.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg'
  'windows.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/windows.svg'
  'linux.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg'
  'macos.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg'
  'android.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/android.svg'
  'ios.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ios.svg'
  'visionos.svg' = 'https://upload.wikimedia.org/wikipedia/commons/7/7e/VisionOS_logo.svg'
  'arduino.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/arduino.svg'
  'raspberrypi.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/raspberrypi.svg'
  'embeddedc.svg' = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg'
  'bitbucket.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bitbucket.svg'
  'jenkins.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg'
  'proget.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/inedo.svg'
  'postman.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg'
  'powerbi.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg'
  'confluence.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/confluence.svg'
  'teams.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftteams.svg'
  'slack.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg'
  'discord.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg'
  'visualstudio.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudio.svg'
  'vscode.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg'
  'rider.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rider.svg'
  'datagrip.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/datagrip.svg'
  'dotpeek.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jetbrains.svg'
  'svn.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/subversion.svg'
  'nuget.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nuget.svg'
  'npm.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/npm.svg'
  'php.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg'
  'javascript.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg'
  'html5.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg'
  'css3.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg'
  'sass.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sass.svg'
  'zend.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zend.svg'
  'phalcon.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/phalcon.svg'
  'composer.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/composer.svg'
  'photoshop.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg'
  'ubuntu.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ubuntu.svg'
  'debian.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/debian.svg'
  'oracle.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg'
  'mssql.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg'
  'wordpress.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg'
  'trello.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/trello.svg'
  'flarum.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flarum.svg'
  'gitkraken.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gitkraken.svg'
  'sourcetree.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sourcetree.svg'
  'minecraft.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/minecraft.svg'
  'rust.svg' = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rust.svg'
}

$failed = @()
$success = @()

# Download each icon
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
Write-Host "Total attempted: $($icons.Count)" -ForegroundColor White
Write-Host "Successful: $($success.Count)" -ForegroundColor Green
Write-Host "Failed: $($failed.Count)" -ForegroundColor Red

if ($success.Count -gt 0) {
  Write-Host "Successfully downloaded icons:" -ForegroundColor Green
  $success | ForEach-Object { Write-Host "  $_" -ForegroundColor Green }
}
if ($failed.Count -gt 0) {
  Write-Host "`nThe following icons could NOT be downloaded (with URLs):" -ForegroundColor Yellow
  foreach ($fname in $failed) {
    $url = $icons[$fname]
    Write-Host "  $fname => $url" -ForegroundColor Red
  }
} else {
  Write-Host "`nAll icons downloaded successfully!" -ForegroundColor Green
}
