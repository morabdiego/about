import reflex as rx
from about.styles.colors import AltTextColor
from about.styles.styles import Size

def h1(children) -> rx.Component:
    return rx.heading(
        children,
        as_="h1",
        color=AltTextColor.UNEXPECTED.value,
        font_size=Size.VERY_BIG.value,
        font_weight="bold",
        margin_bottom="1em",
        text_align="center",  # Only h1 remains centered
    )

def h2(children) -> rx.Component:
    return rx.heading(
        children,
        as_="h2",
        color=AltTextColor.PRIMARY.value,
        font_size=Size.BIG.value,
        font_weight="bold",
        margin_bottom="0.8em",
        text_align="justify",  # Changed to justify
    )

def h3(children) -> rx.Component:
    return rx.heading(
        children,
        as_="h3",
        color=AltTextColor.PRIMARY.value,
        font_size=Size.BIG.value,
        margin_top="1em",
        margin_bottom="0.6em",
        text_align="justify",  # Changed to justify
    )

def p(children) -> rx.Component:
    return rx.text(
        children,
        color=AltTextColor.PRIMARY.value,
        font_size=Size.DEFAULT.value,
        margin_bottom="1em",
        text_align="justify",  # Changed to justify
    )

def a(children) -> rx.Component:
    return rx.link(
        children,
        color=AltTextColor.ACCENT.value,
        text_decoration="none",
        font_weight="bold",
        _hover={"text_decoration": "underline"},
    )

MARKDOWN_STYLES = {
    "base": {
        "width": "100%",
        "maxWidth": "600px",
        "margin": "0 auto",
    },
    "component_map": {
        "h1": h1,
        "h2": h2,
        "h3": h3,
        "p": p,
        "a": a,
    }
}