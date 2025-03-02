import reflex as rx
from about.styles.styles import Color, TextColor, Size
from about.constants import NAV_LINKS_EN


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
                spacing="6",
                padding_x=[Size.DEFAULT.value, Size.BIG.value, Size.VERY_BIG.value, Size.HUGE.value],
                gap="4",
            ),
            width="100%",
            bg=Color.BACKGROUND.value,
            border_bottom=f"0.25em solid {Color.ACCENT.value}",
            padding_y=[Size.SMALL.value, Size.DEFAULT.value],
        )
    )