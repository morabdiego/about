import reflex as rx
from about.styles.colors import Color, TextColor
from about.styles.styles import Size
from about.constants import NAV_LINKS, FULL_WIDTH

def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.hstack(
                *[
                    rx.link(
                        text,
                        href=url,
                        color=TextColor.PRIMARY.value,
                        _hover={"color": TextColor.SECONDARY.value},
                    ) for text, url in NAV_LINKS
                ],
                spacing="8",
                padding_x=Size.MEDIUM.value,
            ),
            width="100%",
            max_width=FULL_WIDTH,
            margin_x="auto",
            bg=Color.BACKGROUND.value,
            position="sticky",
            border_bottom=f"0.25em solid {Color.ACCENT.value}",
            padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.HUGE.value, Size.HUGE.value],
            padding_y=Size.DEFAULT.value,
            z_index="999",
            top="0",
            backdrop_filter="blur(10px)",
        )
    )