import reflex as rx
from datetime import datetime

# Social Media URLs
GITHUB_URL = "https://github.com/morabdiego"
LINKEDIN_URL = "https://www.linkedin.com/in/morabdiego/"
GMAIL_URL = "morabdiego@gmail.com"
INSTAGRAM_URL = "https://www.instagram.com/morabdiego/"

# Page Information
AUTHOR = "Diego Mora"
YEAR = str(datetime.now().year)
COPYRIGHT_EN = f"Copyright © {YEAR}. Created by {AUTHOR}"
COPYRIGHT_ES = f"Copyright © {YEAR}. Creado por {AUTHOR}"

# Navigation
NAV_LINKS_EN = [
    ["Home", "/"],
    ["Publications", "/publications"],
]

NAV_LINKS_ES = [
    ["Inicio", "/"],
    ["Publicaciones", "/publications"],
]

# Social Links with icons
SOCIAL_LINKS = [
    ("morabdiego@gmail.com", f"mailto:{GMAIL_URL}", "ico_email.png"),
    ("/morabdiego", LINKEDIN_URL, "ico_linkedin.png"),
    ("/morabdiego", GITHUB_URL, "ico_github.png"),
    ("@morabdiego", INSTAGRAM_URL, "ico_instagram.png"),
]

# Layout
MAX_WIDTH = "1400px"
FORM_WIDTH = "600px"
FULL_WIDTH = "100%"

# Markdown paths
ABOUT_MD_EN = "assets/content/about-EN.md"
ABOUT_MD_ES = "assets/content/about-ES.md"
PUBLICATIONS_MD_EN = "assets/content/publications-EN.md"
PUBLICATIONS_MD_ES = "assets/content/publications-ES.md"