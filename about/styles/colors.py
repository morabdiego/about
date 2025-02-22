from enum import Enum

class Color(Enum):
    """Main color scheme - Dark theme (Navbar & Footer)"""
    BACKGROUND = "#000000"   # Black background
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
    PRIMARY = "#000000"      # Black text
    SECONDARY = "#64b692"    # Green accents
    ACCENT = "#64b692"       # Green interactive elements

class AltTextColor(Enum):
    """Text colors for light theme"""
    PRIMARY = "#000000"      # Black for main text
    SECONDARY = "#64b692"    # Green for highlighted text
    ACCENT = "#64b692"       # Green for interactive text