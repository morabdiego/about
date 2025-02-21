import reflex as rx
from about.styles.colors import Color, TextColor
from about.styles.styles import Size
from about.constants import NAV_LINKS, AUTHOR
from about.state import State

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
            rx.spacer(),
            rx.heading(
                AUTHOR,
                color=TextColor.PRIMARY.value,
                font_size=["1.5em", "2em", Size.BIG.value, Size.BIG.value],
                padding_x=[Size.SMALL.value, Size.MEDIUM.value, Size.MEDIUM.value, Size.MEDIUM.value],
                white_space="nowrap",
                text_transform="uppercase",
            ),
            rx.switch(  # Añadimos el switch
                is_checked=State.show_alternative,
                on_change=State.toggle_alternative,
                color_scheme="green",
                margin_left="4",
            ),
            width="100%",
            max_width="1200px",
            margin_x="auto",
            bg=Color.BACKGROUND.value,
            position="sticky",
            border_bottom=f"0.25em solid {Color.BORDER.value}",
            padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.VERY_BIG.value, Size.VERY_BIG.value],
            padding_y=Size.DEFAULT.value,
            z_index="999",
            top="0",
            backdrop_filter="blur(10px)",
            flex_direction=["row", "row", "row", "row"],
        )
    )