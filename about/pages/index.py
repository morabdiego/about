import reflex as rx
from about.components.navbar import navbar
from about.components.hero import hero
from about.components.footer import footer

def index() -> rx.Component:
    return rx.box(
        navbar(),
        hero(),
        footer(),
        width="100%"
    )