import reflex as rx
from about.styles.colors import TextColor, AltTextColor
from about.styles.styles import Size

def markdown_text(content: str) -> rx.Component:
    return rx.box(
        rx.markdown(
            content,
            color=AltTextColor.PRIMARY.value,
            css={
                "h1": {
                    "color": AltTextColor.PRIMARY.value,
                    "fontSize": Size.VERY_BIG.value,
                    "marginBottom": "1em"
                },
                "h3": {
                    "color": AltTextColor.PRIMARY.value,
                    "fontSize": Size.BIG.value,
                    "marginTop": "1em"
                },
                "p": {
                    "color": AltTextColor.PRIMARY.value,
                    "fontSize": Size.DEFAULT.value
                },
                "a": {
                    "color": AltTextColor.PRIMARY.value,
                    "textDecoration": "none",
                    "&:hover": {
                        "textDecoration": "underline"
                    }
                }
            }
        ),
        # background=AltTextColor.BACKGROUND.value,
        width="100%",
        padding_x=[
            Size.DEFAULT.value,
            Size.MEDIUM.value,
            Size.HUGE.value,
            Size.HUGE.value
        ],
        padding_y=Size.VERY_BIG.value,
    )