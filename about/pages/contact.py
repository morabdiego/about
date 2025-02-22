import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.components.contact_form import contact_form
from about.styles.colors import AltColor
from about.constants import FORM_WIDTH

def contact() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            rx.box(
                contact_form(),
                width="100%",
                max_width=FORM_WIDTH,
                margin_x="auto",
                padding=80
                ),
            width="100%",
            justify_content="center",  # Centra verticalmente
            align_items="right",      # Centra horizontalmente
            height="calc(100vh - 60px - 60px)",  # Altura total disponible
        ),
        footer(),
        width="100%",
    )