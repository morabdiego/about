import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.components.hero import hero
from about.state import State  # Cambiamos la importación
from about.pages.projects import projects
from about.pages.contact import contact

def index() -> rx.Component:
    return rx.box(
        navbar(),
        hero(),
        footer(),
        width="100%"
    )

app = rx.App()
app.add_page(index, route="/")
app.add_page(projects, route="/projects")
app.add_page(contact, route="/contact")