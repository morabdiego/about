import reflex as rx
from about.styles.styles import Size

def header() -> rx.Component:
    return rx.box(
        rx.image(
            src="/profile.jpg",
            width="100%",
            height="100%",
            border_radius="50%",
            object_fit="cover",
            box_shadow="lg",
        ),
        width=["150px", "175px", "200px", "200px"],  # Responsive sizes
        height=["150px", "175px", "200px", "200px"],  # Keep 1:1 ratio
        margin_y=Size.VERY_BIG.value,
        margin_x="auto",  # Center the image horizontally
    )