import reflex as rx

class State(rx.State):
    """The app state."""
    
    # Add language state
    is_spanish: bool = True
    
    def toggle_language(self):
        """Toggle between Spanish and English."""
        self.is_spanish = not self.is_spanish