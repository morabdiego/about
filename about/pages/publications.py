import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.components.markdown_text import markdown_text
from about.constants import MAX_WIDTH
from about.styles.colors import AltColor

def publications() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            rx.box(
                markdown_text(
                    open("assets/content/projects.md").read()
                ),
                width="100%",
                max_width=MAX_WIDTH,
                margin_x="auto",
                min_height="calc(100vh - 60px - 60px)",
            ),
            width="100%",
            background=AltColor.BACKGROUND.value
        ),
        footer(),
        width="100%",
    )