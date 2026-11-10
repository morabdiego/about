# Diego J. Mora Benitez (`@morabdiego`) — Portfolio & CV

Portfolio personal y CV interactivo *one-page* (bilingüe **ES / EN**) desarrollado en Python con **[Reflex](https://reflex.dev/)** (`>=0.10.1`) y gestionado con **[uv](https://docs.astral.sh/uv/)**.

Diseñado para compilarse como **frontend 100% estático** (sin necesidad de servidor backend gracias al uso de `ClientStateVar` y `enable_state=False`) para su publicación directa en **GitHub Pages**.

---

## Características principales

- **One-Page Portfolio & CV moderno**:
  - **Sobre mí / Hero**: Presentación profesional, métricas destacadas, enlaces a redes y descarga directa de CV en PDF (ES / EN).
  - **Experiencia Profesional**: Línea de tiempo detallada con responsabilidades y herramientas utilizadas.
  - **Educación y Formación Continua**: Grado universitario (Lic. en Economía - UBA) y cursos de especialización (*Fundar*, *Ecofeminita*).
  - **Habilidades y Herramientas**: Stack técnico organizado por Ciencia de Datos, Visualización e Investigación.
  - **Publicaciones y Congresos**: Artículos publicados, investigaciones colaborativas y ponencias.
- **Selector de idioma instantáneo (ES / EN)** ejecutado 100% en el navegador (`ClientStateVar`).
- **Edición centralizada de datos**: Todos los textos y secciones del CV se encuentran en [`about/data.py`](about/data.py).

---

## Desarrollo local con `uv`

1. **Instalar dependencias**:
   ```bash
   uv sync
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   uv run reflex run --frontend-only
   # o usando make:
   make run
   ```

3. **Exportar build estático**:
   ```bash
   uv run reflex export --frontend-only --no-zip
   # El sitio estático se genera en .web/build/client/
   ```

---

## Despliegue en GitHub Pages

El repositorio incluye el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) que compila automáticamente el frontend estático con `uv` y lo publica en **GitHub Pages** en cada `push` a la rama `main`.

> **Configuración en GitHub**: En tu repositorio ve a **Settings → Pages → Build and deployment** y en **Source** selecciona **GitHub Actions**.
