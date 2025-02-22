import reflex as rx

class State(rx.State):
    """Application state."""
    name: str = ""
    email: str = ""
    message: str = ""

    def set_name(self, name: str):
        """Set the name field."""
        self.name = name

    def set_email(self, email: str):
        """Set the email field."""
        self.email = email

    def set_message(self, message: str):
        """Set the message field."""
        self.message = message

    def handle_submit(self):
        """Handle the form submission."""
        # Prevent default form submission
        yield rx.prevent_default()
        
        # Here you would typically add email sending logic
        print(f"Form submitted: {self.name} {self.email} {self.message}")
        
        # Clear the form
        self.name = ""
        self.email = ""
        self.message = ""