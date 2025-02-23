import reflex as rx
from about.styles.colors import Color, TextColor
from about.styles.styles import Size
from about.constants import COPYRIGHT, SOCIAL_LINKS, FULL_WIDTH

def footer() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.hstack(
                rx.text(
                    COPYRIGHT,
                    color=TextColor.PRIMARY.value,
                    font_size=Size.SMALL.value,
                    white_space="nowrap",
                ),
                spacing="8",
                padding_x=Size.MEDIUM.value,
            ),
            rx.spacer(),
            rx.hstack(
                *[
                    rx.hstack(
                        rx.link(  # Wrap image in link
                            rx.image(
                                src=f"/{icon}",
                                width="20px",
                                height="20px",
                                margin_right="2",
                                filter="invert(1)",
                                _hover={"opacity": 0.8},  # Add hover effect
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
                    ) for text, url, icon in SOCIAL_LINKS
                ],
                spacing="8",
                padding_x=Size.SMALL.value,
            ),
            width="100%",
            max_width=FULL_WIDTH,
            margin_x="auto",
            bg=Color.BACKGROUND.value,
            border_top=f"0.25em solid {Color.ACCENT.value}",
            padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.HUGE.value, Size.HUGE.value],
            padding_y=Size.DEFAULT.value,
        )
    )