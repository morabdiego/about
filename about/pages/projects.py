import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer

def projects() -> rx.Component:
    return rx.box(
        navbar(),
        rx.text("Projects page - Under construction"),
        footer(),
        width="100%"
    )