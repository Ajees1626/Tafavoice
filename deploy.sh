#!/bin/bash

# Business Man Website Deployment Script

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Built files are in the 'dist' directory"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Vercel: Run 'vercel' command"
    echo "2. Netlify: Drag 'dist' folder to Netlify"
    echo "3. GitHub Pages: Push to gh-pages branch"
    echo "4. Any static host: Upload 'dist' folder contents"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

