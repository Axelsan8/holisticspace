# 🌟 HolisticSpace

**Ecosistema integral para terapeutas - Vende videos, servicios y productos sin inventario**

## 📋 Descripción

HolisticSpace es una plataforma moderna que permite a terapeutas y sanadores:

✅ **Monetizar contenido** - Subir y vender videos de terapia  
✅ **Crear tienda dropshipping** - Vender productos sin inventario  
✅ **Marketplace de servicios** - Reservar sesiones terapéuticas  
✅ **Comunidad holistica** - Conectar con pacientes y otros terapeutas  
✅ **Recomendaciones IA** - Sistema inteligente de compatibilidad  
✅ **Gamificación** - Badges y certificaciones para terapeutas  

---

## 🏗️ Estructura del Proyecto

```
holisticspace/
├── backend/                 # API Node.js + Express
├── frontend/                # React + Next.js
├── mobile/                  # App React Native (futuro)
├── docs/                    # Documentación
├── docker-compose.yml       # Orquestación de servicios
├── .env.example             # Variables de entorno
└── README.md
```

---

## 🚀 Stack Tecnológico

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Base de Datos:** PostgreSQL 14+
- **Cache:** Redis
- **ORM:** Prisma
- **Autenticación:** JWT + OAuth2
- **Pagos:** Stripe API
- **Videos:** Cloudinary API
- **Email:** SendGrid

### Frontend
- **Framework:** React 18 + Next.js 14
- **Styling:** TailwindCSS 3
- **UI Components:** Radix UI
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts

### Integraciones
- **Videollamadas:** Jitsi Meet / Zoom SDK
- **Almacenamiento:** AWS S3 / Cloudinary
- **Streaming:** HLS Protocol
- **IA:** OpenAI API (recomendaciones)

---

## 📦 Características Principales

### 1. **Plataforma de Videos** 🎥
- Upload seguro con límite de tamaño
- Streaming adaptativo (HLS)
- Protección de contenido (DRM básico)
- Analytics: vistas, tiempo reproducción, engagement
- Thumbnails automáticas
- Transcripción automática (IA)

### 2. **Marketplace Dropshipping** 🛍️
- Integración con proveedores (Printful, Merch by Amazon, etc.)
- Gestión de inventario en tiempo real
- Órdenes automatizadas
- Tracking de envíos
- Comisiones automáticas

### 3. **Marketplace de Servicios** 📅
- Calendario integrado (Google Calendar sync)
- Reservas de sesiones
- Pagos automáticos
- Recordatorios por email/SMS
- Historial de sesiones
- Reseñas y testimonios

### 4. **Sistema de Usuarios** 👥
- **Rol Terapeuta:**
  - Dashboard personalizado
  - Gestión de contenido
  - Analytics detalladas
  - Gestión de ingresos
  - Certificaciones

- **Rol Cliente/Paciente:**
  - Explorar terapeutas
  - Comprar videos y servicios
  - Historial de compras
  - Preferencias personalizadas
  - Comunidad

### 5. **Recomendaciones Inteligentes** 🤖
- Quiz de bienestar inicial
- Algoritmo de compatibilidad terapeuta-cliente
- Recomendaciones basadas en:
  - Historial de compras
  - Puntuaciones de videos
  - Preferencias guardadas
  - Comportamiento de navegación

### 6. **Comunidad y Networking** 🤝
- Foros por especialidad
- Directorio de terapeutas
- Sistema de mensajes privados
- Grupos de interés
- Blog colectivo
- Webinars en vivo

### 7. **Gamificación** 🏆
- Badges por especialidad
- Puntos de reputación
- Niveles de terapeuta
- Leaderboards
- Certificaciones verificadas
- Rewards exclusivos

---

## 🔐 Seguridad

- ✅ Autenticación JWT con refresh tokens
- ✅ HTTPS/TLS obligatorio
- ✅ CORS configurado
- ✅ Rate limiting
- ✅ Validación de entrada (Zod)
- ✅ Protección de datos (GDPR compliant)
- ✅ Encriptación de contraseñas (bcrypt)
- ✅ Auditoría de transacciones

---

## 💳 Monetización

### Para Terapeutas:
1. **Venta de Videos:** 70% comisión del terapeuta, 30% plataforma
2. **Servicios:** 80% terapeuta, 20% plataforma (procesamiento)
3. **Dropshipping:** 20-40% comisión según proveedor
4. **Membresías:** Opción de contenido exclusivo

### Pagos:
- Stripe Connect para pagos directos a terapeutas
- Retiros semanales o mensuales
- Dashboard de ingresos
- Reportes fiscales automatizados

---

## 🛠️ Instalación y Setup

### Requisitos Previos
- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Docker & Docker Compose (opcional)

### Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/Axelsan8/holisticspace.git
cd holisticspace

# Instalar dependencias backend
cd backend
npm install

# Instalar dependencias frontend
cd ../frontend
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves

# Iniciar con Docker Compose
cd ..
docker-compose up -d

# O iniciar manualmente:
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

---

## 📚 Documentación

- [Backend API Docs](./docs/API.md)
- [Frontend Setup](./frontend/README.md)
- [Database Schema](./docs/DATABASE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

---

## 🤝 Roadmap

### Fase 1 (MVP - Actual)
- ✅ Autenticación de usuarios
- ✅ Upload de videos
- ✅ Marketplace básico
- ✅ Sistema de pagos
- ✅ Perfiles de terapeutas

### Fase 2 (Q2 2026)
- 📅 Integración de calendario
- 📞 Videollamadas en vivo
- 🤖 IA mejorada para recomendaciones
- 🛍️ Integración dropshipping completa

### Fase 3 (Q3 2026)
- 📱 App móvil (iOS/Android)
- 🌍 Soporte multiidioma
- 📊 Analytics avanzados
- 🎓 Sistema de certificaciones

### Fase 4 (Q4 2026)
- 🌐 Expansión internacional
- 🔗 Blockchain para certificados
- 🎮 Gamificación avanzada
- 🤝 Integraciones con plataformas externas

---

## 📞 Soporte

- 📧 Email: support@holisticspace.com
- 💬 Discord: [Comunidad HolisticSpace]
- 📋 Issues: GitHub Issues
- 📖 Docs: docs.holisticspace.com

---

## 📄 Licencia

MIT License - Ver LICENSE.md

---

## 👨‍💻 Creado con ❤️ por Axelsan8 & GitHub Copilot

**HolisticSpace - Empoderando a terapeutas del mundo** 🌟
