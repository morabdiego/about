import reflex as rx
from about.components.navbar import navbar
from about.components.footer import footer
from about.constants import MAX_WIDTH, get_publications_content
from about.styles.colors import AltColor, AltTextColor
from about.styles.styles import Size
from about.styles.markdown import MARKDOWN_STYLES
from about.state import State

def publications() -> rx.Component:
    return rx.box(
        navbar(),
        rx.vstack(
            rx.box(
                rx.box(
                    rx.markdown(
                        get_publications_content(State.is_spanish),
                        component_map=MARKDOWN_STYLES["component_map"],
                        css=MARKDOWN_STYLES["base"],
                        color=AltTextColor.PRIMARY.value,
                    ),
                    width=["90%", "80%", "80%", "55%"],
                    max_width=MAX_WIDTH,
                    margin_x="auto",
                    padding_x=Size.SMALL.value,
                ),
                width="100%",
                max_width=MAX_WIDTH,
                margin_x="auto",
                padding_y=Size.VERY_BIG.value,
                min_height="calc(100vh - 140px)",
                align_items="center",
            ),
            width="100%",
            background=AltColor.BACKGROUND.value,
        ),
        footer(),
        width="100%"
    )