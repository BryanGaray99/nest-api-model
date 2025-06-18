# NestJS E-commerce API

Una API robusta de e-commerce construida con NestJS y TypeScript, diseñada para proporcionar una base sólida para aplicaciones de comercio electrónico.

## 🚀 Características

- **Arquitectura Modular**: Estructura organizada en módulos independientes
- **Validación Automática**: Validación de datos con class-validator
- **Documentación Automática**: Swagger/OpenAPI integrado
- **Manejo de Errores**: Filtros globales para manejo consistente de errores
- **Transformación de Respuestas**: Interceptores para respuestas estandarizadas
- **Seguridad**: Middleware de seguridad con Helmet
- **Compresión**: Optimización de respuestas con compresión
- **CORS**: Configuración flexible de CORS
- **Versionado de API**: Soporte para versionado de endpoints

## 📋 Módulos Disponibles

- **Products**: Gestión de productos del catálogo
- **Users**: Administración de usuarios
- **Orders**: Procesamiento de pedidos
- **Categories**: Categorización de productos
- **Cart**: Carrito de compras

## 🛠️ Tecnologías Utilizadas

- **NestJS**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Swagger**: Documentación de API
- **Class Validator**: Validación de datos
- **Helmet**: Seguridad HTTP
- **Compression**: Compresión de respuestas

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd nest-api-model
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
PORT=3004
CORS_ORIGIN=*
```

4. **Ejecutar en desarrollo**
```bash
npm run start:dev
```

## 🚀 Scripts Disponibles

- `npm run build` - Compilar el proyecto
- `npm run start` - Iniciar en modo producción
- `npm run start:dev` - Iniciar en modo desarrollo con hot reload
- `npm run start:debug` - Iniciar en modo debug
- `npm run test` - Ejecutar tests unitarios
- `npm run test:e2e` - Ejecutar tests end-to-end
- `npm run lint` - Linting del código
- `npm run format` - Formatear código con Prettier

## 📚 Documentación de la API

Una vez que la aplicación esté ejecutándose, puedes acceder a la documentación interactiva de Swagger en:

```
http://localhost:3004/api/docs
```

## 🔗 Endpoints Principales

### Productos
- `GET /api/v1/products` - Obtener todos los productos
- `GET /api/v1/products/:id` - Obtener producto por ID
- `POST /api/v1/products` - Crear nuevo producto
- `PATCH /api/v1/products/:id` - Actualizar producto
- `DELETE /api/v1/products/:id` - Eliminar producto

### Usuarios
- `GET /api/v1/users` - Obtener todos los usuarios
- `GET /api/v1/users/:id` - Obtener usuario por ID
- `POST /api/v1/users` - Crear nuevo usuario
- `PATCH /api/v1/users/:id` - Actualizar usuario
- `DELETE /api/v1/users/:id` - Eliminar usuario

### Pedidos
- `GET /api/v1/orders` - Obtener todos los pedidos
- `GET /api/v1/orders/:id` - Obtener pedido por ID
- `POST /api/v1/orders` - Crear nuevo pedido
- `PATCH /api/v1/orders/:id` - Actualizar pedido
- `DELETE /api/v1/orders/:id` - Eliminar pedido

### Categorías
- `GET /api/v1/categories` - Obtener todas las categorías
- `GET /api/v1/categories/:id` - Obtener categoría por ID
- `POST /api/v1/categories` - Crear nueva categoría
- `PATCH /api/v1/categories/:id` - Actualizar categoría
- `DELETE /api/v1/categories/:id` - Eliminar categoría

### Carrito
- `GET /api/v1/cart` - Obtener carrito actual
- `POST /api/v1/cart/items` - Agregar item al carrito
- `PATCH /api/v1/cart/items/:id` - Actualizar item del carrito
- `DELETE /api/v1/cart/items/:id` - Eliminar item del carrito
- `DELETE /api/v1/cart` - Vaciar carrito

## 📁 Estructura del Proyecto

```
src/
├── app.module.ts              # Módulo principal
├── main.ts                    # Punto de entrada
├── common/                    # Utilidades comunes
│   ├── filters/              # Filtros globales
│   ├── interceptors/         # Interceptores
│   └── interfaces/           # Interfaces comunes
├── products/                 # Módulo de productos
├── users/                    # Módulo de usuarios
├── orders/                   # Módulo de pedidos
├── categories/               # Módulo de categorías
└── cart/                     # Módulo de carrito
```

## 🔧 Configuración

### Variables de Entorno

- `PORT`: Puerto del servidor (default: 3004)
- `CORS_ORIGIN`: Origen permitido para CORS (default: *)

### Características de Seguridad

- **Helmet**: Headers de seguridad HTTP
- **CORS**: Configuración de Cross-Origin Resource Sharing
- **Validación**: Validación automática de datos de entrada
- **Sanitización**: Limpieza de datos no permitidos

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests con coverage
npm run test:cov

# Tests end-to-end
npm run test:e2e

# Tests en modo watch
npm run test:watch
```

## 📝 Formato de Respuesta

Todas las respuestas siguen un formato estandarizado:

```json
{
  "success": true,
  "data": {},
  "message": "Operación exitosa",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia UNLICENSED.

## 👨‍💻 Autor

Desarrollado como parte del proyecto de titulación.

---

**Nota**: Esta API está diseñada como una base sólida para aplicaciones de e-commerce. Puede ser extendida con funcionalidades adicionales como autenticación, paginación, filtros avanzados, etc.

