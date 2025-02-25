import reflex as rx
from about.styles.colors import Color, TextColor
from about.styles.styles import Size
from about.constants import NAV_LINKS_EN, FULL_WIDTH
# from about.components.lang import language_switch  # Commented out language switch
# from about.state import State  # Commented out state import

def nav_item(text: str, url: str) -> rx.Component:
    return rx.link(
        text,
        href=url,
        color=TextColor.PRIMARY.value,
        _hover={"color": TextColor.SECONDARY.value},
    )

def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.hstack(
                *[
                    nav_item(text, url) for text, url in NAV_LINKS_EN
                ],
                spacing="4",  # Fixed spacing value
                padding_x=["0", Size.SMALL.value, Size.DEFAULT.value, Size.MEDIUM.value],
                align_items="center",
                gap="4",  # Add consistent gap
            ),
            width="100%",
            max_width=FULL_WIDTH,
            margin_x="auto",
            bg=Color.BACKGROUND.value,
            position="sticky",
            border_bottom=f"0.25em solid {Color.ACCENT.value}",
            padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.BIG.value, Size.HUGE.value],
            padding_y=[Size.SMALL.value, Size.DEFAULT.value, Size.DEFAULT.value, Size.DEFAULT.value],
            z_index="999",
            top="0",
            backdrop_filter="blur(10px)",
            justify_content="space-between",
            align_items="center",
            gap="4",  # Add consistent gap
        )
    )

"""
# Dynamic version (commented out)
from about.components.lang import language_switch
from about.state import State
from about.constants import get_nav_links

# Inside navbar():
rx.hstack(
    rx.foreach(
        get_nav_links(State.is_spanish),
        lambda item: nav_item(item[0], item[1])
    ),
    language_switch(),
    ...
)
"""