import reflex as rx
from rxconfig import config
from about.components.navbar import navbar

class State(rx.State):
    """Estado de la aplicación."""
    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        width="100%"
    )

# Configuración de la aplicación
app = rx.App()
app.add_page(index)