from enum import Enum

class Color(Enum):
    PRIMARY = "#000000"      # Negro para el fondo
    BACKGROUND = "#000000"   # Negro para el fondo
    BORDER = "#64b692"       # Verde para bordes/acentos
    ACCENT = "#64b692"       # Verde para acentos

class TextColor(Enum):
    PRIMARY = "#f0eedc"      # Color crema para texto principal
    SECONDARY = "#64b692"    # Verde para texto destacado
    ACCENT = "#64b692"       # Verde para elementos interactivos