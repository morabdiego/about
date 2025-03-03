import reflex as rx

config = rx.Config(
    app_name="about",
    api_url="https://morabdiego-api-about.up.railway.app",
    show_built_with_reflex=False,
    cors_allowed_origins=[
        "https://morabdiego-about.vercel.app/",
        "http://localhost:3000"
        ],
)