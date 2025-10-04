# 🧴 Croxono Perfumes - E-commerce de Perfumes de Lujo

<div align="center">
  <img src="public/assets/croxono-logo.jpeg" alt="Croxono Logo" width="200"/>
  
  **Tu aroma, tu huella** ✨
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📋 Descripción

**Croxono Perfumes** es una plataforma e-commerce moderna y elegante especializada en la venta de perfumes de alta gama. La aplicación ofrece una experiencia de compra fluida con catálogo detallado, carrito de compras integrado y sistema de compras directo por WhatsApp.

### 🌟 Características Principales

- 🛍️ **Catálogo Completo**: Perfumes para hombres, mujeres y unisex
- 💰 **Sistema de Compras**: Carrito integrado con persistencia en localStorage
- 📱 **Integración WhatsApp**: Compra directa por mensaje automático
- 🎨 **Diseño Responsivo**: Optimizado para todos los dispositivos
- 🌙 **Temas**: Modo claro y oscuro con transiciones suaves
- ⚡ **Rendimiento**: Construido con Next.js 15 y React 19
- 🔍 **SEO Optimizado**: Metadatos estructurados y local SEO

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Next.js** | 15.4.5 | Framework React con App Router |
| **React** | 19.1.0 | Biblioteca de interfaz de usuario |
| **TypeScript** | 5.0 | Tipado estático |
| **Tailwind CSS** | 4.0 | Framework de CSS utilitario |
| **Radix UI** | Latest | Componentes accesibles |
| **Lucide React** | 0.534.0 | Iconos modernos |

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── layout.tsx         # Layout principal con providers
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Radix UI)
│   ├── HeroSection.tsx   # Sección hero principal
│   ├── CatalogSection.tsx # Catálogo de productos
│   ├── CartSheet.tsx     # Carrito lateral
│   ├── ProductModal.tsx  # Modal de producto detallado
│   └── ...
├── data/                 # Datos de productos
│   ├── lady-perfumes.ts  # Perfumes femeninos
│   ├── gentlemen-perfumes.ts # Perfumes masculinos
│   └── arabic-perfumes.ts # Perfumes árabes/unisex
├── lib/                  # Utilidades y contextos
│   ├── cart-context.tsx  # Contexto del carrito
│   └── utils.ts          # Funciones utilitarias
└── products/            # Imágenes de productos
    └── images/          # Assets de productos
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/croxono-perfumes.git
   cd croxono-perfumes
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo con Turbopack
pnpm build        # Construcción para producción
pnpm start        # Servidor de producción
pnpm lint         # Linting con ESLint
```

## 🛍️ Funcionalidades del Sistema

### Catálogo de Productos
- **Categorización**: Hombres, Mujeres, Unisex
- **Información Detallada**: Notas olfativas, concentración, duración
- **Filtros**: Por categoría y tipo de perfume
- **Modal de Producto**: Vista detallada con especificaciones completas

### Sistema de Compras
- **Carrito Persistente**: Guardado en localStorage
- **Gestión de Cantidades**: Control +/- para cada producto
- **Cálculo Automático**: Total dinámico de la compra
- **Notificaciones**: Toast de confirmación al añadir productos

### Integración WhatsApp
- **Mensaje Automático**: Genera pedido formateado
- **Información Completa**: Productos, cantidades y total
- **Contacto Directo**: +57 320 3296712

## 🎨 Personalización

### Añadir Nuevos Productos

Edita los archivos en `src/data/`:

```typescript
// src/data/lady-perfumes.ts
export const ladyPerfumes: LadyPerfume[] = [
  {
    id: 1,
    name: "Nuevo Perfume",
    price: "$150",
    image: "/products/images/nuevo-perfume.png",
    description: "Descripción del perfume...",
    notes: ["Floral", "Frutal", "Maderas"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Francia"
  }
];
```

### Modificar Información de Contacto

```typescript
// src/components/CartSheet.tsx
const phoneNumber = "+573203296712"; // Cambiar número de WhatsApp
```

### Personalizar Tema

```css
/* src/app/globals.css */
:root {
  --primary: hsl(262 83% 58%); /* Color principal */
  --background: hsl(0 0% 100%); /* Fondo claro */
}

.dark {
  --background: hsl(222.2 84% 4.9%); /* Fondo oscuro */
}
```

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 **Móviles**: 320px - 768px
- 📱 **Tablets**: 768px - 1024px  
- 💻 **Desktop**: 1024px+
- 🖥️ **Pantallas grandes**: 1440px+

## 🔧 Configuración de Desarrollo

### Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+573203296712
NEXT_PUBLIC_SITE_URL=https://croxono-perfumes.vercel.app
```

### Linting y Formato

El proyecto incluye:
- **ESLint**: Para detección de errores
- **TypeScript**: Para tipado estático
- **Prettier**: Para formato de código (configurar según preferencias)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Deploy directo desde GitHub
- **AWS Amplify**: Para aplicaciones empresariales

## 📊 SEO y Rendimiento

### Optimizaciones Incluidas

- ✅ **Metadatos dinámicos** para cada sección
- ✅ **Structured Data** para productos
- ✅ **Local SEO** optimizado
- ✅ **Sitemap** automático
- ✅ **Robots.txt** configurado
- ✅ **Imágenes optimizadas** con Next.js Image

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">
  <p>Hecho con ❤️ para Croxono Perfumes</p>
  <p>© 2025 Croxono Perfumes. Todos los derechos reservados.</p>
</div>
