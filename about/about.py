import reflex as rx
from about.pages.index import index
from about.pages.projects import projects
from about.pages.contact import contact

app = rx.App()
app.add_page(index, route="/", title="About | Diego Mora")
app.add_page(projects, route="/projects", title="Projects | Diego Mora")
app.add_page(contact, route="/contact", title="Contact | Diego Mora")