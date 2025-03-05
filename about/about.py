import reflex as rx
from about.pages.index import index
from about.pages.publications import publications
from about.api.api import hello

app = rx.App()

app.api.add_api_route("/hello", hello) # Add an API route test