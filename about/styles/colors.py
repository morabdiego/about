from enum import Enum

class Color(Enum):
    """Main color scheme - Dark theme (Navbar & Footer)"""
    BACKGROUND = "#1e1e1e"   # Más oscuro gris de fondo
    PRIMARY = "#f0eedc"      # Cream text
    SECONDARY = "#64b692"    # Green accents
    ACCENT = "#64b692"       # Green interactive elements

class TextColor(Enum):
    """Text colors for dark theme"""
    PRIMARY = "#f0eedc"      # Cream for main text
    SECONDARY = "#64b692"    # Green for highlighted text
    ACCENT = "#64b692"       # Green for interactive text

class AltColor(Enum):
    """Alternative color scheme - Light theme (Content sections)"""
    BACKGROUND = "#f0eedc"   # Cream background
    PRIMARY = "#1e1e1e"      # Más oscuro gris de texto
    SECONDARY = "#64b692"    # Green accents
    ACCENT = "#64b692"       # Green interactive elements

class AltTextColor(Enum):
    """Text colors for light theme"""
    PRIMARY = "#1e1e1e"      # Dark gray for main text
    SECONDARY = "#64b692"    # Green for highlighted text
    ACCENT = "#64b692"       # Green for interactive text
    UNEXPECTED = "#9b4d4d"   # Muted burgundy for emphasis