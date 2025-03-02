import reflex as rx
from about.styles.styles import Size, Color, TextColor
from about.constants import COPYRIGHT_EN, SOCIAL_LINKS, FULL_WIDTH

def social_link_item(text: str, url: str, icon: str) -> rx.Component:
    return rx.hstack(
        rx.link(
            rx.image(
                src=f"/{icon}",
                width="20px",
                height="20px",
                margin_right="2",
                filter="invert(1)",
                _hover={"opacity": 0.8},
            ),
            href=url,
            is_external=True,
        ),
        rx.link(
            text,
            href=url,
            color=TextColor.PRIMARY.value,
            _hover={"color": TextColor.SECONDARY.value},
            is_external=True,
        ),
        spacing="2",
        align_items="center",
    )

def footer() -> rx.Component:
    return rx.vstack(
        rx.flex(
            *[
                social_link_item(text, url, icon) for text, url, icon in SOCIAL_LINKS
            ],
            spacing="5",
            padding_x=Size.SMALL.value,
            align_items="center",
            justify_content="center",
            flex_direction=["column", "column", "column", "row"],
            flex_wrap="wrap",
            gap="4",
            width="100%",
        ),
        rx.text(
            COPYRIGHT_EN,
            color=TextColor.PRIMARY.value,
            font_size=Size.SMALL.value,
            white_space="nowrap",
            padding_top="4",
            padding_right=Size.SMALL.value,
        ),
        width="100%",
        max_width=FULL_WIDTH,
        margin_x="auto",
        bg=Color.BACKGROUND.value,
        border_top=f"0.25em solid {Color.ACCENT.value}",
        padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.BIG.value, Size.HUGE.value],
        padding_y=Size.SMALL.value,
        spacing="4",
        align_items="center",
    )

"""
# Dynamic version (commented out)
from about.state import State
from about.constants import get_copyright

# Inside the component:
rx.text(
    get_copyright(State.is_spanish),
    ...
)
"""