
$ErrorActionPreference = "Continue"

# Create images folder
$imageFolder = Join-Path (Get-Location) "images/products"
New-Item -ItemType Directory -Force -Path $imageFolder | Out-Null

# Find project HTML and JavaScript files
$files = Get-ChildItem -Path . -Recurse -File |
    Where-Object {
        $_.Extension -in ".html", ".js" -and
        $_.FullName -notmatch '[\\/]\.git[\\/]'
    }

# Collect image URLs
$urls = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches(
        $content,
        'https?://[^\s"''<>]+'
    )

    foreach ($match in $matches) {
        $url = $match.Value.TrimEnd(')', ',', ';')

        if ($url -match 'thefandom\.co/cdn/shop/files/') {
            $urls += $url
        }
    }
}

$urls = @($urls | Select-Object -Unique)

Write-Host "Found $($urls.Count) unique image URLs."

# Download images
$mapping = @{}
$counter = 1

foreach ($url in $urls) {
    try {
        $extension = [System.IO.Path]::GetExtension(
            ([uri]$url).AbsolutePath
        )

        if ($extension -notin ".jpg", ".jpeg", ".png", ".webp") {
            $extension = ".jpg"
        }

        $fileName = "product-{0:D3}{1}" -f $counter, $extension
        $destination = Join-Path $imageFolder $fileName

        Invoke-WebRequest -Uri $url -OutFile $destination `
            -Headers @{ "User-Agent" = "Mozilla/5.0" }

        $mapping[$url] = "images/products/$fileName"

        Write-Host "Downloaded: $fileName"
        $counter++
    }
    catch {
        Write-Host "Download failed: $url"
    }
}

# Replace downloaded image URLs with local paths
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $updated = $content

    foreach ($url in $mapping.Keys) {
        $updated = $updated.Replace($url, $mapping[$url])
    }

    if ($updated -ne $content) {
        Set-Content -Path $file.FullName -Value $updated -Encoding UTF8
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host ""
Write-Host "Finished!"
Write-Host "Successfully downloaded $($mapping.Count) images."
Write-Host "Images folder: images/products"
