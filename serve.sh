#!/bin/bash

# Simple script to serve the website locally for testing

echo "🚀 Starting Aetherion Exchange Website..."
echo ""
echo "Choose a server option:"
echo "1) Python 3 (recommended)"
echo "2) PHP"
echo "3) Exit"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "Starting Python server on http://localhost:8000"
        echo "Press Ctrl+C to stop"
        echo ""
        python3 -m http.server 8000
        ;;
    2)
        echo ""
        echo "Starting PHP server on http://localhost:8000"
        echo "Press Ctrl+C to stop"
        echo ""
        php -S localhost:8000
        ;;
    3)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac
