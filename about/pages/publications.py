import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.constants import MAX_WIDTH
from about.styles.colors import AltColor, AltTextColor
from about.styles.styles import Size
from about.styles.markdown import MARKDOWN_STYLES

def publications() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            rx.box(
                rx.markdown(
                    open("assets/content/publications.md").read(),
                    component_map=MARKDOWN_STYLES["component_map"],
                    css=MARKDOWN_STYLES["base"],
                    color=AltTextColor.PRIMARY.value,
                ),
                width="100%",
                max_width=MAX_WIDTH,
                margin_x="auto",
                padding_x=[
                    Size.DEFAULT.value,
                    Size.MEDIUM.value,
                    Size.HUGE.value,
                    Size.HUGE.value
                ],
                padding_y=Size.VERY_BIG.value,
                min_height="calc(100vh - 60px - 60px)",
            ),
            width="100%",
            background=AltColor.BACKGROUND.value,
        ),
        footer(),
        width="100%"
    )