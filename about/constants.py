from datetime import datetime

# Social Media URLs
GITHUB_URL = "https://github.com/morabdiego"
LINKEDIN_URL = "https://www.linkedin.com/in/morabdiego/"
GMAIL_URL = "morabdiego@gmail.com"
INSTAGRAM_URL = "https://www.instagram.com/morabdiego/"

# Page Information
AUTHOR = "Diego Mora"
YEAR = str(datetime.now().year)
COPYRIGHT = f"Created by {AUTHOR} with Reflex, {YEAR} ©"

# Navigation
NAV_LINKS = [
    ("Home", "/"),           # Redirects to same page
    ("Publications", "/publications"), # New page to be created
]

# Social Links with icons
SOCIAL_LINKS = [
    ("morabdiego@gmail.com", f"mailto:{GMAIL_URL}", "ico_email.png"),
    ("/morabdiego", LINKEDIN_URL, "ico_linkedin.png"),
    ("/morabdiego", GITHUB_URL, "ico_github.png"),
    ("/morabdiego", INSTAGRAM_URL, "ico_instagram.png"),
]

# Layout
MAX_WIDTH = "1400px"
FORM_WIDTH = "600px"
FULL_WIDTH = "100%"