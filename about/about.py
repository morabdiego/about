import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer

class State(rx.State):
    """Estado de la aplicación."""
    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        # Aquí irá el contenido principal
        footer(),
        width="100%"
    )

# Configuración de la aplicación
app = rx.App()
app.add_page(index)