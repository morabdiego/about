import reflex as rx
from about.styles.colors import Color, TextColor
from about.styles.styles import Size

def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.hstack(
                rx.link("HOME", 
                       href="#home",
                       color=TextColor.PRIMARY.value,
                       _hover={"color": TextColor.SECONDARY.value}),
                rx.link("PROJECTS", 
                       href="#projects",
                       color=TextColor.PRIMARY.value,
                       _hover={"color": TextColor.SECONDARY.value}),
                rx.link("CONTACT", 
                       href="#contact",
                       color=TextColor.PRIMARY.value,
                       _hover={"color": TextColor.SECONDARY.value}),
                spacing="8",
                padding_x=Size.MEDIUM.value,
            ),
            rx.spacer(),
            rx.heading(
                "DIEGO MORA",
                color=TextColor.PRIMARY.value,
                font_size=["1.5em", "2em", Size.BIG.value, Size.BIG.value],
                padding_x=[Size.SMALL.value, Size.MEDIUM.value, Size.MEDIUM.value, Size.MEDIUM.value],
                white_space="nowrap",  # Fuerza el texto en una línea
                text_transform="uppercase",  # Asegura mayúsculas vía CSS
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