import reflex as rx

class State(rx.State):
    """Estado de la aplicación."""
    show_alternative: bool = False

    def toggle_alternative(self):
        """Toggle para cambiar entre modos."""
        self.show_alternative = not self.show_alternative