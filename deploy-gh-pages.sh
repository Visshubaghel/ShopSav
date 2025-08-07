#!/bin/bash

# Build the application
echo "Building application..."
npm run build

# Copy 404.html to the dist/public directory
cp 404.html dist/public/

# Fix asset paths for GitHub Pages subdirectory deployment
echo "Fixing asset paths for GitHub Pages..."
sed -i 's|="/assets/|="./assets/|g' dist/public/index.html
sed -i 's|src="/assets/|src="./assets/|g' dist/public/index.html

echo "Build complete! Files are ready in dist/public/ directory"
echo "You can now commit and push to GitHub to trigger deployment"
echo "Or manually deploy using: gh-pages -d dist/public"