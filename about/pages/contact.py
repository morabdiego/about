import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.components.contact_form import contact_form
from about.styles.colors import AltTextColor
from about.constants import FULL_WIDTH

def contact() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            rx.box(
                contact_form(),
                width="100%",
                max_width=FULL_WIDTH,
                margin_x="auto",
                min_height="calc(100vh - 60px - 60px)",
            ),
            width="100%",
            background=AltTextColor.BACKGROUND.value,
        ),
        footer(),
        width="100%",
    )