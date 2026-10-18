# Renders the favicon set and the social preview image from the HTML sources in this folder.
# Requires Microsoft Edge and Python with Pillow.
$ErrorActionPreference = 'Stop'

$root = Split-Path $PSScriptRoot -Parent
$images = Join-Path $root 'public\assets\images'
$work = Join-Path $env:TEMP 'portfolio-branding'
New-Item -ItemType Directory -Force $work | Out-Null

$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if (-not (Test-Path $edge)) { $edge = 'C:\Program Files\Microsoft\Edge\Application\msedge.exe' }

function Invoke-Shot([string] $page, [string] $query, [int] $width, [int] $height, [string] $out) {
  $url = 'file:///' + ((Join-Path $PSScriptRoot $page) -replace '\\', '/') + $query
  $arguments = @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', "--user-data-dir=$work\profile",
    '--default-background-color=00000000', '--virtual-time-budget=6000',
    "--window-size=$width,$height", "--screenshot=$out", $url
  )
  Start-Process $edge -ArgumentList $arguments -Wait -WindowStyle Hidden
}

Invoke-Shot 'icon.html' '' 512 512 "$work\icon.png"
Invoke-Shot 'icon.html' '?variant=full' 512 512 "$work\icon-full.png"
Invoke-Shot 'og-image.html' '' 1200 630 "$images\portfolio-preview.png"

python -c @"
from PIL import Image
work, images, root = r'$work', r'$images', r'$root'
icon = Image.open(work + r'\icon.png').convert('RGBA')
full = Image.open(work + r'\icon-full.png').convert('RGB')
icon.resize((32, 32), Image.LANCZOS).save(images + r'\favicon-32x32.png')
icon.resize((192, 192), Image.LANCZOS).save(images + r'\icon-192.png')
icon.save(images + r'\icon-512.png')
full.save(images + r'\icon-maskable-512.png')
full.resize((180, 180), Image.LANCZOS).save(images + r'\apple-touch-icon.png')
icon.save(root + r'\public\favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('icons rendered')
"@
