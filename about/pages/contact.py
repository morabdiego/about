import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer

def contact() -> rx.Component:
    return rx.box(
        navbar(),
        rx.text("Contact page - Under construction"),
        footer(),
        width="100%"
    )