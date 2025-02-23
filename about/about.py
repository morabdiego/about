import reflex as rx
from about.pages.index import index
from about.pages.publications import publications

app = rx.App()
app.add_page(index, route="/", title="About | Diego Mora")
app.add_page(publications, route="/publications", title="Publications | Diego Mora")