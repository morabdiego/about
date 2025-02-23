source .venv/bin/activate
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -rf docs
unzip -o frontend.zip -d docs/
rm frontend.zip
deactivate