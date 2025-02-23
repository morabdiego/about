source .venv/bin/activate
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -rf public
unzip -o frontend.zip -d public
rm frontend.zip
deactivate