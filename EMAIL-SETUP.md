# 📧 Configuración de Email con Nodemailer

¡Ya tienes Nodemailer configurado en tu portafolio! Solo necesitas completar la configuración de email.

## 🚀 Pasos para activar el envío de emails:

### 1. **Configurar Gmail (Recomendado)**

#### Opción A: App Password (Más Seguro)
1. Ve a tu [Cuenta de Google](https://myaccount.google.com/)
2. **Seguridad** → **Verificación en 2 pasos** (actívala si no está)
3. **Seguridad** → **Contraseñas de aplicaciones**
4. Selecciona **"Correo"** y **"Otro (nombre personalizado)"**
5. Pon "Portafolio" como nombre
6. **Copia la contraseña generada** (16 caracteres)

#### Configurar en .env:
```bash
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=la-contraseña-de-aplicacion-generada
```

### 2. **Configurar Outlook/Hotmail**
```bash
EMAIL_USER=tu-email@outlook.com
EMAIL_PASS=tu-contraseña-normal
```

### 3. **Probar localmente**
```bash
pnpm dev
```
Ve a `http://localhost:4321/contact` y prueba el formulario.

## 🔧 **Para Producción (Deployment)**

### Vercel:
1. Ve a tu proyecto en Vercel Dashboard
2. **Settings** → **Environment Variables**
3. Agrega:
   - `EMAIL_USER`: tu-email@gmail.com
   - `EMAIL_PASS`: tu-app-password

### Netlify:
1. Ve a tu sitio en Netlify Dashboard
2. **Site settings** → **Environment variables**
3. Agrega las mismas variables

## 📧 **Características del Email**

### Lo que recibirás:
- ✅ **Email HTML hermoso** con toda la info del cliente
- ✅ **Respuesta directa** al cliente (Reply-To automático)
- ✅ **Información organizada**: contacto, proyecto, presupuesto
- ✅ **Marcado de urgencia** si el cliente necesita "lo antes posible"
- ✅ **Timestamp** con fecha y hora mexicana

### Datos que se capturan:
- Nombre completo y email (requeridos)
- Empresa y teléfono (opcionales)
- Tipo de proyecto y presupuesto (requeridos)
- Timeline y mensaje detallado (requeridos)
- Consentimiento de datos (requerido)

## 🛠️ **Troubleshooting**

### Error 535 - "Invalid credentials":
- ✅ Verifica que uses App Password, no tu contraseña normal
- ✅ Verifica que Gmail tenga 2FA activado

### Error "Missing credentials":
- ✅ Verifica que el archivo `.env` tenga las variables correctas
- ✅ Reinicia el servidor después de cambiar `.env`

### En producción no funciona:
- ✅ Verifica que agregaste las variables de entorno en Vercel/Netlify
- ✅ Verifica que las variables no tengan espacios extra

## 📋 **Archivos del Sistema**

```
src/
├── pages/api/
│   └── send-email.ts          # API endpoint
├── components/contact/
│   ├── ContactPage.astro      # Formulario (actualizado)
│   └── contactPage.css        # Estilos con loading states
└── pages/
    └── contact.astro          # Página de contacto

.env                           # Variables de entorno (NO subir a Git)
```

## 🎯 **¡Listo para usar!**

Una vez configuradas las credenciales de email:
1. El formulario enviará emails reales
2. Recibirás notificaciones inmediatas
3. Podrás responder directamente a los clientes
4. Todo con diseño profesional y validaciones completas

**¡Tu sistema de contacto está completamente funcional! 🚀**