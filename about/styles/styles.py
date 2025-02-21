import reflex as rx
from enum import Enum
from .colors import Color, TextColor
from .fonts import Font

class Size(Enum):
    SMALL = "0.8em"
    DEFAULT = "1em"
    MEDIUM = "1.5em"
    BIG = "2em",
    VERY_BIG = "3em",
    HUGE = "20em"

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
]