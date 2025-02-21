import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.components.hero import hero
from about.state import State  # Cambiamos la importación

def index() -> rx.Component:
    return rx.box(
        navbar(),
        hero(),
        footer(),
        width="100%"
    )

app = rx.App()
app.add_page(index)