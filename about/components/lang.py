import reflex as rx
from about.state import State
from about.styles.colors import TextColor
from about.styles.styles import Size

def language_switch() -> rx.Component:
    return rx.hstack(
        rx.switch(
            is_checked=State.is_spanish,
            on_change=State.toggle_language,
            color_scheme="green",
        ),
        rx.text(
            rx.cond(
                State.is_spanish,
                "ES",
                "EN"
            ),
            color=TextColor.PRIMARY.value,
            font_size="14px",
            margin_left="0.5em",
        ),
        margin_right=Size.MEDIUM.value,
    )