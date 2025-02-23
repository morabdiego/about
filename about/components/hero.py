import reflex as rx
from about.styles.colors import AltColor, AltTextColor
from about.styles.styles import Size
from about.constants import MAX_WIDTH
from about.styles.markdown import MARKDOWN_STYLES

def hero() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.vstack(
                    rx.image(
                        src="/profile.jpg",
                        width="200px",
                        height="200px",
                        border_radius="50%",
                        object_fit="cover",
                        box_shadow="lg",
                        margin_y=Size.VERY_BIG.value,
                        margin_x="auto"
                    ),
                    rx.box(
                        rx.markdown(
                            open("assets/content/about.md").read(),
                            component_map=MARKDOWN_STYLES["component_map"],
                            css=MARKDOWN_STYLES["base"],
                        ),
                        width="100%",
                        max_width=MAX_WIDTH,
                        margin_x="auto",
                    ),
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
                align_items="center",
                padding_y=Size.VERY_BIG.value,
                min_height="calc(100vh - 60px - 60px)",
            ),
            width="100%",
            background=AltColor.BACKGROUND.value,
        ),
        width="100%",
    )
