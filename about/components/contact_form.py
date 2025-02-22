import reflex as rx
from about.styles.colors import TextColor, AltTextColor
from about.styles.styles import Size
from about.state import State

def contact_form() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Let's Work Together",
            color=AltTextColor.PRIMARY.value,
            font_size=Size.VERY_BIG.value,
            margin_bottom=Size.BIG.value,
        ),
        rx.text(
            "Feel free to reach out for collaborations or just a friendly hello",
            color=AltTextColor.PRIMARY.value,
            font_size=Size.DEFAULT.value,
            margin_bottom=Size.VERY_BIG.value,
        ),
        rx.vstack(
            rx.input(
                placeholder="Name",
                value=State.name,
                on_change=State.set_name,
                padding=Size.DEFAULT.value,
                margin_bottom=Size.DEFAULT.value,
                width="100%",
                height="75px",
                color=TextColor.PRIMARY.value,
                border_color=TextColor.SECONDARY.value,
                _placeholder={"color": TextColor.PRIMARY.value},
            ),
            rx.input(
                placeholder="Email",
                type_="email",
                value=State.email,
                on_change=State.set_email,
                padding=Size.DEFAULT.value,
                margin_bottom=Size.DEFAULT.value,
                width="100%",
                height="75px",
                color=TextColor.PRIMARY.value,
                border_color=TextColor.SECONDARY.value,
                _placeholder={"color": TextColor.PRIMARY.value},
            ),
            rx.text_area(
                placeholder="Message",
                value=State.message,
                on_change=State.set_message,
                padding=Size.DEFAULT.value,
                margin_bottom=Size.DEFAULT.value,
                min_height="200px",  # Increased height
                width="100%",
                color=TextColor.PRIMARY.value,
                border_color=TextColor.SECONDARY.value,
                _placeholder={"color": TextColor.PRIMARY.value},
            ),
            rx.button(
                "Send Message",
                on_click=State.handle_submit,
                bg=TextColor.SECONDARY.value,
                color=AltTextColor.PRIMARY.value,
                padding=Size.DEFAULT.value,
                width="100%",
                height=Size.VERY_BIG.value,  # Made button taller
                _hover={"opacity": 0.8},
            ),
            align_items="start",
            spacing="4",
            width="100%",
            max_width="800px",
            margin_x="auto",
            padding=Size.VERY_BIG.value,
        ),
    )