import reflex as rx
from about.styles.colors import AltTextColor
from about.styles.styles import Size
from about.constants import FULL_WIDTH

def hero() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.vstack(
                    rx.heading(
                        "ECONOMIST",
                        color=AltTextColor.PRIMARY.value,
                        font_size=[Size.VERY_BIG.value, Size.VERY_BIG.value, Size.VERY_BIG.value],
                        padding_top=Size.DEFAULT.value,  # Reducido el padding superior
                    ),
                    rx.heading(
                        "& DEVELOPER",
                        color=AltTextColor.ACCENT.value,
                        font_size=[Size.VERY_BIG.value, Size.VERY_BIG.value, Size.VERY_BIG.value],
                    ),
                    rx.text(
                        "Bridging economics and technology through data analysis and software development",
                        color=AltTextColor.PRIMARY.value,
                        font_size=Size.DEFAULT.value,
                        padding_top=Size.DEFAULT.value,
                    ),
                    rx.text(
                        "UBA Graduate | Data Analyst | Survey Designer",
                        color=AltTextColor.PRIMARY.value,
                        font_size=Size.DEFAULT.value,
                        padding_top=Size.SMALL.value,
                    ),
                    align_items="flex-start",
                    flex="1",
                ),
                rx.image(
                    src="/profile.jpg",
                    width="250px",
                    height="250px",
                    border_radius="50%",
                    object_fit="cover",
                    box_shadow="lg",
                    margin_y=Size.DEFAULT.value,
                ),
                width="100%",
                max_width=FULL_WIDTH,
                margin_x="auto",
                padding_x=[Size.DEFAULT.value, Size.MEDIUM.value, Size.HUGE.value, Size.HUGE.value],
                align_items="center",
                justify_content="space-between",
                spacing="8",
                background=AltTextColor.BACKGROUND.value,
                height="calc(100vh - 65px - 65px)",  # Altura total menos navbar y footer
                padding_y=Size.DEFAULT.value,        # Padding vertical consistente
            ),
            width="100%",
        ),
        width="100%",
    )
