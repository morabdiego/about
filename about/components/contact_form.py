import reflex as rx
from about.styles.styles import Size

class FormState(rx.State):

    @rx.event
    def submit(self, form_data):
        return rx.toast(form_data)

def contact_form() -> rx.Component:
    return rx.card(
        rx.form(
            rx.hstack(
                rx.vstack(
                    rx.heading(
                        "Contact Me!",
                        margin_bottom=Size.BIG.value
                    )
                ),
                width="100%",
                justify_content="center",
                align_items="center"
            ),
            rx.vstack(
                rx.text(
                    "Name ",
                    rx.text.span("*", color="red"),
                ),
                rx.input(
                    name="name",
                    required=True,
                    margin_bottom=Size.DEFAULT.value,
                ),
                align="center",
                spacing="4"  # Changed from Size.SMALL.value
            ),
            rx.vstack(
                rx.text(
                    "Email ",
                    rx.text.span("*", color="red"),
                ),
                rx.input(
                    name="email",
                    type="email",
                    required=True,
                    margin_bottom=Size.DEFAULT.value,
                ),
                align="center",
                spacing="4",  # Changed from Size.SMALL.value
            ),
            rx.vstack(
                rx.text("Message"),
                rx.text_area(
                    name="message",
                    margin_bottom=Size.DEFAULT.value,
                    min_height="150px",
                ),
                align="center",
                spacing="4",  # Changed from Size.SMALL.value
            ),
            rx.vstack(
                rx.button(
                "Send",
                type="submit",
                margin_top=Size.DEFAULT.value,
                ),
                align="center",
            ),
            on_submit=FormState.submit,
            spacing="6",  # Changed from Size.MEDIUM.value
            width="100%",
            padding=Size.BIG.value,
        )
    )