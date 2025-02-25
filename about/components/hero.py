import reflex as rx
from about.styles.colors import AltColor, AltTextColor
from about.styles.styles import Size
from about.constants import MAX_WIDTH, get_about_content
from about.styles.markdown import MARKDOWN_STYLES
from about.state import State

def hero() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.vstack(
                    rx.box(  # Image wrapper
                        rx.image(
                            src="/profile.jpg",
                            width="100%",
                            height="100%",
                            border_radius="50%",
                            object_fit="cover",
                            box_shadow="lg",
                        ),
                        width=["150px", "175px", "200px", "200px"],  # Responsive sizes
                        height=["150px", "175px", "200px", "200px"],  # Keep 1:1 ratio
                        margin_y=Size.VERY_BIG.value,
                        margin_x="auto",
                    ),
                    rx.box(  # Markdown content wrapper
                        rx.markdown(
                            get_about_content(State.is_spanish),
                            component_map=MARKDOWN_STYLES["component_map"],
                            css=MARKDOWN_STYLES["base"],
                        ),
                        width=["90%", "80%", "80%", "55%"],  # Responsive width
                        max_width=MAX_WIDTH,
                        margin_x="auto",
                        padding_x=Size.SMALL.value,  # Add padding for better text containment
                    ),
                ),
                width="100%",
                max_width=MAX_WIDTH,
                margin_x="auto",
                padding_x=[
                    Size.DEFAULT.value,
                    Size.MEDIUM.value,
                    Size.VERY_BIG.value,
                    Size.VERY_BIG.value
                ],
                align_items="center",
                padding_y=Size.VERY_BIG.value,
                min_height="calc(100vh - 153px)",
            ),
            width="100%",
            background=AltColor.BACKGROUND.value,
        ),
        width="100%",
    )
