# 🗂️ Estructura de directorios:

coaching_school/
├── .venv/                         # Entorno virtual (no se sube al repo)
├── app/                           # Código principal de la aplicación
│   ├── main.py                    # Punto de entrada de FastAPI
│   ├── config.py                  # Configuración general (DB, vars de entorno)
│   ├── models/                    # Modelos SQLAlchemy
│   │   ├── __init__.py
│   │   ├── aprendiz.py
│   │   ├── cohorte.py
│   │   ├── cuota.py
│   │   ├── pago.py
│   │   └── usuario.py
│   ├── schemas/                   # Pydantic: entrada/salida de datos
│   │   ├── __init__.py
│   │   ├── aprendiz.py
│   │   ├── cohorte.py
│   │   ├── cuota.py
│   │   ├── pago.py
│   │   └── usuario.py
│   ├── crud/                      # Funciones de acceso a datos
│   │   ├── __init__.py
│   │   ├── aprendiz.py
│   │   ├── cohorte.py
│   │   ├── cuota.py
│   │   ├── pago.py
│   │   └── usuario.py
│   ├── routes/                    # Endpoints agrupados por módulo
│   │   ├── __init__.py
│   │   ├── aprendiz.py
│   │   ├── cohorte.py
│   │   ├── cuota.py
│   │   ├── pago.py
│   │   └── usuario.py
│   ├── services/                  # Lógica de negocio / servicios externos
│   │   ├── __init__.py
│   │   ├── notificaciones.py
│   │   └── mercadopago.py
│   └── db.py                      # Sesión de base de datos
│
├── alembic/                       # Migraciones (si usás Alembic)
├── requirements.txt              # Dependencias
└── README.md

# Módulos temáticos

📘 1. Gestión Académica
💸 2. Administración y Cobranzas
📞 3. CRM de Interesados
👥 4. Gestión del Equipo
📊 5. Reportes (para usar en endpoints de consulta)


