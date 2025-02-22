from datetime import datetime

# Social Media URLs
GITHUB_URL = "https://github.com/morabdiego"
LINKEDIN_URL = "https://www.linkedin.com/in/morabdiego/"

# Page Information
AUTHOR = "DIEGO MORA"
YEAR = str(datetime.now().year)
COPYRIGHT = f"© {YEAR} {AUTHOR}"

# Navigation
NAV_LINKS = [
    ("HOME", "/"),           # Redirects to same page
    ("PROJECTS", "/projects"), # New page to be created
    ("CONTACT", "/contact")   # New page to be created
]

# Social Links with icons
SOCIAL_LINKS = [
    ("/morabdiego", GITHUB_URL, "ico_github.png"),    # Removido /assets/
    ("/morabdiego", LINKEDIN_URL, "ico_linkedin.png")
]

# Layout
MAX_WIDTH = "1400px"
FORM_WIDTH = "600px"
FULL_WIDTH = "100%"