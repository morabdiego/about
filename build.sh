#!/bin/bash

# # Activate virtual environment
# source .venv/bin/activate

# pip install --upgrade pip

# # Install dependencies
# pip install -r requirements.txt

# Build the project
reflex init
API_URL=morabdiego-about.up.railway.app reflex export --frontend-only

# Create docs directory if it doesn't exist
rm -rf public

# Move the exported files to docs
unzip -o frontend.zip -d public/

rm frontend.zip