"""
Datos estructurados del Portfolio y CV de Diego J. Mora Benitez.
Podés editar o agregar ítems en las listas de abajo (EXPERIENCE, EDUCATION,
TRAINING, SKILLS, PUBLICATIONS) y se reflejarán automáticamente en la web.
"""

PROFILE = {
    "name": "Diego J. Mora Benitez",
    "handle": "@morabdiego",
    "role_es": "Economista & Analista de Datos",
    "role_en": "Economist & Data Analyst",
    "tagline_es": "Investigación socioeconómica, ciencia de datos aplicada y políticas públicas.",
    "tagline_en": "Socioeconomic research, applied data science, and public policy.",
    "bio_p1_es": (
        "Soy economista graduado en la Universidad de Buenos Aires (UBA) y analista de datos "
        "especializado en el diseño y gestión de proyectos de investigación socioeconómica. "
        "Lidero equipos multidisciplinarios desarrollando metodologías y herramientas para la "
        "recolección, procesamiento y visualización de información compleja."
    ),
    "bio_p1_en": (
        "I am an economist graduated from the University of Buenos Aires (UBA) and a data analyst "
        "specializing in designing and managing socioeconomic research projects. "
        "I lead multidisciplinary teams, developing methodologies and tools for collecting, "
        "processing, and visualizing complex information."
    ),
    "bio_p2_es": (
        "Actualmente coordino el Observatorio Villero de La Poderosa, donde diseño relevamientos "
        "socioeconómicos a escala nacional sobre pobreza multidimensional y condiciones habitacionales "
        "en barrios populares de Argentina. Mi enfoque combina programación (Python, R), estadística "
        "y comunicación efectiva en medios para transformar datos en evidencia accionable para las políticas públicas."
    ),
    "bio_p2_en": (
        "Currently, I coordinate the Observatorio Villero at La Poderosa, where I design nationwide "
        "socioeconomic surveys on multidimensional poverty and housing conditions in informal settlements "
        "across Argentina. My approach combines programming (Python, R), statistics, and effective media "
        "communication to turn data into actionable insights for public policy."
    ),
}

HIGHLIGHTS = [
    {
        "metric": "+5",
        "label_es": "Años en investigación y datos",
        "label_en": "Years in research & data",
        "detail_es": "Relevamientos socioeconómicos a escala nacional",
        "detail_en": "Nationwide socioeconomic surveys & analysis",
    },
    {
        "metric": "UBA",
        "label_es": "Licenciado en Economía",
        "label_en": "B.A. in Economics",
        "detail_es": "Enfoque en pobreza multidimensional y políticas públicas",
        "detail_en": "Focus on multidimensional poverty & public policy",
    },
    {
        "metric": "Data & TV",
        "label_es": "Análisis y Divulgación",
        "label_en": "Analysis & Dissemination",
        "detail_es": "Python · R · Estadística · Visualización en medios",
        "detail_en": "Python · R · Statistics · Media data storytelling",
    },
]

EXPERIENCE = [
    {
        "role_es": "Analista de Datos y Coordinador de Estudios Socioeconómicos",
        "role_en": "Data Analyst & Socioeconomic Studies Coordinator",
        "organization": "A.C. La Poderosa · Observatorio Villero",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "period_es": "Ene. 2020 – Presente",
        "period_en": "Jan. 2020 – Present",
        "current": True,
        "icon": "bar-chart-3",
        "bullets_es": [
            "Diseño y gestión de proyectos de relevamiento de datos socioeconómicos a nivel nacional sobre pobreza y hábitat.",
            "Desarrollo de marcos metodológicos, indicadores multidimensionales, muestras y cuestionarios.",
            "Coordinación de equipos de campo interdisciplinarios y formación de relevadores en todo el país.",
            "Creación y mantenimiento de bases de datos, garantizando su accesibilidad, consistencia y calidad.",
            "Análisis cuantitativo y cualitativo, elaboración de informes técnicos, visualizaciones y publicaciones.",
            "Difusión de resultados y representación institucional en medios de comunicación y ámbitos académicos.",
        ],
        "bullets_en": [
            "Designed and managed nationwide socioeconomic data collection projects on poverty and housing.",
            "Developed methodological frameworks, multidimensional indicators, sampling designs, and surveys.",
            "Coordinated interdisciplinary field teams and trained data collectors across the country.",
            "Created and maintained databases, ensuring data accessibility, consistency, and quality.",
            "Conducted quantitative and qualitative analyses, producing technical reports, visualizations, and publications.",
            "Disseminated findings and represented the organization across media outlets and academic forums.",
        ],
        "tags": ["Python", "pandas", "Flourish", "KoboToolbox", "Estadística", "Metodología"],
    },
    {
        "role_es": "Columnista de Economía y Datos en TV",
        "role_en": "Economics & Data TV Columnist",
        "organization": "“La Ley de la Selva” · C5N",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "period_es": "May. 2024 – Sep. 2024",
        "period_en": "May 2024 – Sep. 2024",
        "current": False,
        "icon": "tv",
        "bullets_es": [
            "Presentación en vivo de análisis económicos y sociales basados en datos e investigaciones propias.",
            "Elaboración de visualizaciones claras y narrativas visuales para acompañar los segmentos televisivos.",
            "Coordinación con el equipo de producción y realización audiovisual para el diseño de bloques de datos.",
        ],
        "bullets_en": [
            "Presented live data-driven economic and social analyses and original research topics on television.",
            "Created clear data visualizations and visual narratives to support broadcast segments.",
            "Coordinated with the audiovisual production team to design and script data-focused segments.",
        ],
        "tags": ["Data Storytelling", "Visualización", "Divulgación", "Medios", "Economía"],
    },
    {
        "role_es": "Coordinador Regional – RENABAP",
        "role_en": "Regional Coordinator – RENABAP",
        "organization": "A.C. La Poderosa · Registro Nacional de Barrios Populares",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "period_es": "May. 2023 – Dic. 2023",
        "period_en": "May 2023 – Dec. 2023",
        "current": False,
        "icon": "compass",
        "bullets_es": [
            "Organización y supervisión de relevamientos socioterritoriales en el marco del Registro Nacional de Barrios Populares (RENABAP).",
            "Selección, capacitación y coordinación operativa de los equipos de relevadores en territorio.",
            "Presentación de informes de avance, control de calidad de datos y gestión de tiempos del proyecto.",
        ],
        "bullets_en": [
            "Organized and supervised socio-territorial surveys under the National Registry of Informal Settlements (RENABAP).",
            "Selected, trained, and coordinated field survey teams on the ground.",
            "Delivered progress reports, oversaw data quality control, and managed project timelines.",
        ],
        "tags": ["Gestión de Proyectos", "RENABAP", "Trabajo de Campo", "Liderazgo"],
    },
]

EDUCATION = [
    {
        "degree_es": "Licenciatura en Economía",
        "degree_en": "Bachelor’s Degree in Economics",
        "institution": "Universidad de Buenos Aires (UBA)",
        "faculty_es": "Facultad de Ciencias Económicas",
        "faculty_en": "School of Economics",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "date_es": "Septiembre 2023",
        "date_en": "September 2023",
        "description_es": (
            "Formación integral en teoría económica, econometría, estadística aplicada, "
            "desarrollo económico y evaluación de políticas públicas."
        ),
        "description_en": (
            "Comprehensive training in economic theory, econometrics, applied statistics, "
            "economic development, and public policy evaluation."
        ),
        "badge_es": "Grado Universitario",
        "badge_en": "University Degree",
    }
]

TRAINING = [
    {
        "title_es": "“Datos para el relato”: Análisis, interpretación y visualización de datos",
        "title_en": "“Data for Storytelling”: Data Analysis, Interpretation & Visualization",
        "institution": "Fundar",
        "date_es": "Marzo 2025",
        "date_en": "March 2025",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "description_es": (
            "Especialización intensiva en narrativa basada en evidencia, diseño de visualizaciones "
            "y comunicación pública de hallazgos cuantitativos."
        ),
        "description_en": (
            "Intensive specialization in evidence-based storytelling, visualization design, "
            "and public communication of quantitative findings."
        ),
        "tags": ["Data Storytelling", "Visualización", "Políticas Públicas"],
    },
    {
        "title_es": "Programación en R para Análisis de Datos",
        "title_en": "R Programming for Data Analysis",
        "institution": "Ecofeminita",
        "date_es": "Diciembre 2023",
        "date_en": "December 2023",
        "location_es": "Ciudad de Buenos Aires, Argentina",
        "location_en": "Buenos Aires, Argentina",
        "description_es": (
            "Procesamiento, limpieza y análisis estadístico de bases de datos socioeconómicas "
            "como la EPH utilizando el ecosistema Tidyverse."
        ),
        "description_en": (
            "Processing, cleaning, and statistical analysis of socioeconomic datasets "
            "using the R Tidyverse ecosystem."
        ),
        "tags": ["R", "Tidyverse", "Estadística Socioeconómica"],
    },
]

SKILLS = [
    {
        "category_es": "Programación y Ciencia de Datos",
        "category_en": "Programming & Data Science",
        "icon": "code-xml",
        "description_es": "Limpieza, transformación, modelado y automatización de flujos de datos.",
        "description_en": "Data cleaning, transformation, modeling, and workflow automation.",
        "items": [
            "Python",
            "pandas",
            "NumPy",
            "SciPy",
            "R (Tidyverse)",
            "SQL",
            "Git & GitHub",
            "KoboToolbox",
            "Excel Avanzado",
        ],
    },
    {
        "category_es": "Visualización y Comunicación",
        "category_en": "Visualization & Communication",
        "icon": "bar-chart-3",
        "description_es": "Traducción de indicadores complejos en gráficos interactivos e informes claros.",
        "description_en": "Translating complex indicators into interactive charts and clear reports.",
        "items": [
            "Seaborn",
            "Matplotlib",
            "Tableau",
            "Flourish",
            "Data Storytelling",
            "Redacción de Informes",
            "Divulgación en Medios",
        ],
    },
    {
        "category_es": "Investigación y Gestión",
        "category_en": "Research & Project Management",
        "icon": "users",
        "description_es": "Liderazgo de estudios de campo, diseño muestral y coordinación de equipos.",
        "description_en": "Leading field studies, survey design, and coordinating multidisciplinary teams.",
        "items": [
            "Diseño Metodológico y Muestral",
            "Análisis Cuantitativo y Cualitativo",
            "Coordinación de Equipos",
            "Capacitación en Territorio",
            "Inglés Técnico",
        ],
    },
]

PUBLICATIONS = [
    {
        "type_es": "Artículo Publicado",
        "type_en": "Published Article",
        "year": "2023",
        "authors": "Mora Benitez, D.",
        "title_es": (
            "Relevamiento de condiciones habitacionales en barrios populares: "
            "El rol del Observatorio Villero de La Poderosa en la producción de estadísticas comunitarias"
        ),
        "title_en": (
            "Survey on Housing Conditions in Informal Settlements: "
            "The Role of the Villero Observatory of La Poderosa in the Production of Community Statistics"
        ),
        "venue_es": "Revista Idelcoop, N° 239, pp. 128–140.",
        "venue_en": "Revista Idelcoop, Issue 239, pp. 128–140.",
        "url": "https://www.idelcoop.org.ar/sites/www.idelcoop.org.ar/files/revista/articulos/pdf/experiencias_1_1.pdf",
        "link_label_es": "Leer artículo (PDF)",
        "link_label_en": "Read article (PDF)",
        "icon": "file-text",
        "accent": "green",
    },
    {
        "type_es": "En Producción",
        "type_en": "In Production",
        "year": "2025",
        "authors": "Cappa, A., Cejas Marcovecchio, M., Miño, L., & Mora Benitez, D.",
        "title_es": "Desafíos y avances en la urbanización de barrios populares",
        "title_en": "Challenges and Advances in the Urbanization of Informal Settlements",
        "venue_es": "Fundación Friedrich Ebert (FES), OCEPP & Observatorio Villero (OVLP).",
        "venue_en": "Friedrich Ebert Foundation (FES), OCEPP & Observatorio Villero (OVLP).",
        "url": "",
        "link_label_es": "",
        "link_label_en": "",
        "icon": "book-open",
        "accent": "burgundy",
    },
    {
        "type_es": "Investigación Colaborativa",
        "type_en": "Collaborative Research",
        "year": "2023",
        "authors": "Dávolos, P. (Colaboración metodológica y de campo)",
        "title_es": "La situación de pobreza en los barrios populares: Estudio cualitativo",
        "title_en": "The Poverty Situation in Informal Settlements: A Qualitative Study",
        "venue_es": "La Poderosa & UNICEF Argentina.",
        "venue_en": "La Poderosa & UNICEF Argentina.",
        "url": "https://www.unicef.org/argentina/media/17071/file/Estudio%20cualitativo:%20la%20situaci%C3%B3n%20de%20la%20pobreza%20en%20barrios%20populares.pdf",
        "link_label_es": "Ver estudio UNICEF (PDF)",
        "link_label_en": "View UNICEF study (PDF)",
        "icon": "file-text",
        "accent": "green",
    },
    {
        "type_es": "Expositor en Congreso",
        "type_en": "Conference Speaker",
        "year": "Oct. 2023",
        "authors": "Mora Benitez, D.",
        "title_es": "Métodos de medición de la pobreza: La Canasta Villera",
        "title_en": "Methods for Measuring Poverty: The Informal Settlements Basket",
        "venue_es": "Facultad de Trabajo Social, Universidad Nacional de Entre Ríos (UNER), Argentina.",
        "venue_en": "Faculty of Social Work, National University of Entre Ríos (UNER), Argentina.",
        "url": "",
        "link_label_es": "",
        "link_label_en": "",
        "icon": "mic",
        "accent": "burgundy",
    },
    {
        "type_es": "Moderador en Simposio",
        "type_en": "Symposium Moderator",
        "year": "2023",
        "authors": "Mora Benitez, D.",
        "title_es": "Conversatorio de Economía y Trabajo Cooperativo",
        "title_en": "Panel on Economy and Cooperative Work",
        "venue_es": "3er Encuentro Nacional de Cooperativas de La Poderosa · Cabildo de la Ciudad de Córdoba, Argentina.",
        "venue_en": "3rd National Meeting of Cooperatives of La Poderosa · Cabildo of Córdoba, Argentina.",
        "url": "",
        "link_label_es": "",
        "link_label_en": "",
        "icon": "mic",
        "accent": "green",
    },
]
