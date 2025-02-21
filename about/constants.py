from datetime import datetime

# Social Media URLs
GITHUB_URL = "https://github.com/morabdiego"
LINKEDIN_URL = "https://www.linkedin.com/in/mora-diego/"

# Page Information
AUTHOR = "DIEGO MORA"
YEAR = str(datetime.now().year)
COPYRIGHT = f"© {YEAR} {AUTHOR}"

# Navigation
NAV_LINKS = [
    ("HOME", "#home"),
    ("PROJECTS", "#projects"),
    ("CONTACT", "#contact")
]

# Social Links with icons
SOCIAL_LINKS = [
    ("GITHUB", GITHUB_URL, "ico_github.png"),    # Removido /assets/
    ("LINKEDIN", LINKEDIN_URL, "ico_linkedin.png")
]