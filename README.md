# Level-Up Gamer — Proyecto Semestral DSY1104 (EV1)

![Level-Up Gamer](https://img.shields.io/badge/Forma-B%20%7C%20Level--Up%20Gamer-1E90FF?style=for-the-badge)
![Duoc UC](https://img.shields.io/badge/Duoc%20UC-Desarrollo%20Full%20Stack%20II-39FF14?style=for-the-badge&labelColor=000000)
![Tecnologías](https://img.shields.io/badge/HTML5-CSS3-JavaScript%20ES6+-orange?style=for-the-badge)
![Localhost](https://img.shields.io/badge/Servidor-localhost%3A5501-blueviolet?style=for-the-badge)

Este repositorio contiene la versión funcional del Front-End para la **Evaluación Parcial 1 (EV1)** de la asignatura **Desarrollo Full Stack II (DSY1104)**, correspondiente al **Caso Forma B: Tienda Level-Up Gamer**.

---

## 🎮 Acerca de Level-Up Gamer

**Level-Up Gamer** es una tienda online chilena especializada en hardware, periféricos, consolas, computadores, sillas gamer, indumentaria personalizada, juegos de mesa y servicio técnico. Opera **100% online con despachos a todo el país**, sin sucursal física, integrando a su comunidad mediante un sistema de gamificación y apoyo a torneos locales en Chile.

- **Misión:** Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia de compra única y personalizada con foco en la satisfacción y comunidad.
- **Visión:** Ser la tienda online líder en gaming en Chile, destacada por su servicio, innovación y programa de fidelización gamificado.

---

## 📁 Estructura del Proyecto

```text
Tienda-Level-Up/
├── css/
│   └── styles.css               # Estilos globales, paleta gamer (#000, #1E90FF, #39FF14), Orbitron y Roboto
├── img/                         # Galería de imágenes reales de cada producto del catálogo
│   ├── Catan.webp
│   ├── Carcassonne.jpg
│   ├── Controlador Inalámbrico Xbox Series X.webp
│   ├── Auriculares Gamer HyperX Cloud II.jpg
│   ├── PlayStation 5.jpg
│   ├── PC Gamer ASUS ROG Strix.jpg
│   ├── Silla Gamer Secretlab Titan.jpg
│   ├── Mouse Gamer Logitech G502 HERO.jpg
│   ├── Mousepad Razer Goliathus Extended Chroma.jpg
│   ├── Polera Gamer Personalizada 'Level-Up'.png
│   ├── Polerón Gamer Personalizado 'Level-Up'.png
│   ├── Mantención y Limpieza de PC Gamer.webp
│   └── Armado de PC a Pedido.webp
├── js/
│   ├── data.js                  # Catálogo de 10 categorías, productos base con rutas a img/ y posts de blog
│   ├── auth.js                  # Gestión de usuarios, sesiones, roles (Admin/Cliente), niveles y canje de puntos
│   ├── cart.js                  # Lógica del carrito, stock, cálculo de subtotales, descuentos y totales
│   ├── validations.js           # Validaciones JS: mayor de 18 años, correo Duoc, teléfono chileno, etc.
│   ├── reviews.js               # Sistema de reseñas y cálculo de promedio de calificaciones en estrellas
│   └── nav.js                   # Header/Footer inyectados, control de pestaña Admin protegida + WhatsApp flotante
├── index.html                   # HOME / Página principal con Hero, categorías, destacados con fotos e impacto
├── productos.html               # Catálogo completo con filtros avanzados (búsqueda, categorías, orden)
├── detalle-producto.html        # Vista detallada, fotos en gran formato, origen/fabricante, stock, reseñas
├── registro.html                # Registro con validación >= 18 años, detección correo Duoc y referidos
├── login.html                   # Inicio de sesión con soporte Admin ('admin' / 'duoc123') + botones Demo
├── mi-cuenta.html               # Perfil de usuario, nivel gamer, código de referido y canje de puntos
├── nosotros.html                # Historia, Misión, Visión, origen de productos e Impacto Comunitario
├── blog.html                    # Novedades, consejos gamer y modal de lectura completa + compartir en RRSS
├── contacto.html                # Formulario validado, enlace a WhatsApp y Mapa de Eventos en Chile
├── carrito.html                 # Carrito de compras con persistencia localStorage y checkout simulado
├── admin-productos.html         # Panel Admin Protegido: CRUD completo de productos con imágenes
├── admin-usuarios.html          # Panel Admin Protegido: Gestión de usuarios, edición de puntos y rol Duoc
└── README.md                    # Documentación del proyecto
```

---

## 🖼️ Integración de Imágenes Reales de Productos

Se reemplazaron todos los placeholders genéricos de emojis por las **fotografías reales ubicadas en la carpeta `img/`**:
- Cada producto del catálogo base (`LUG_PRODUCTS_BASE`) cuenta con su propiedad `imagen` apuntando al archivo correspondiente.
- Se implementó la función helper `lugRenderProductVisual(producto)` con carga diferida (`loading="lazy"`) y respaldo visual en caso de error.
- En `css/styles.css` se definieron reglas con `object-fit: contain` y transiciones con zoom para las tarjetas del catálogo, productos destacados, detalle en gran formato y miniaturas del carrito y del panel administrativo.
- La función `lugInitProducts()` sincroniza y migra de manera automática los datos almacenados en `localStorage` para garantizar la visualización inmediata de las imágenes sin necesidad de limpiar la caché manualmente.

---

## 🔒 Seguridad y Acceso al Módulo Administrativo

Para cumplir con el requerimiento de control de acceso a las operaciones críticas (borrar productos, modificar precios y ajustar usuarios):

### Credenciales de Administrador:
- **Usuario:** `admin` (o correo `admin@levelupgamer.cl`)
- **Contraseña:** `duoc123`

### Mecanismos de Protección:
1. **Pestaña "⚙️ Admin" Dinámica:** El enlace a la administración en la barra de navegación superior solo se renderiza si el usuario activo tiene sesión iniciada con rol de administrador (`lugEsAdmin()`).
2. **Bloqueo en Vistas Administrativas:** Si un usuario sin privilegios o un visitante anónimo ingresa directamente por URL a `admin-productos.html` o `admin-usuarios.html`, la vista se bloquea mostrando una pantalla de acceso restringido con redirección al inicio de sesión.
3. **Inicio de Sesión Simplificado:** En `login.html`, el campo de identificación admite tanto correos tradicionales como el nombre de usuario `admin`. Se incorporó además el botón **`🛡️ Iniciar Sesión como Admin (admin / duoc123)`** para agilizar la evaluación docente.

---

## 🚀 Vistas y Funcionalidades Desarrolladas

### 🌐 Tienda Pública
1. **HOME / Página Principal (`index.html`)**: Banner principal gamer, estadísticas de la tienda, parrilla de categorías, productos destacados con imágenes reales, llamada a gamificación y sección de impacto comunitario.
2. **Catálogo de Productos (`productos.html`)**: Muestra todas las 10 categorías requeridas con chips rápidos, buscador en tiempo real, filtro por categoría y ordenamiento (precio y rating).
3. **Detalle de Producto (`detalle-producto.html`)**: Renderizado dinámico vía `?codigo=...`, fotografía en alta resolución, indicador de origen/fabricante, disponibilidad de stock, selector de cantidad rectangular, cálculo de precio con 20% de descuento Duoc, productos recomendados y **sistema de reseñas y calificaciones realistas**:
   - Entre 2 y 5 reseñas auténticas por producto con notas de 3 a 5 estrellas.
   - 5 reseñas completas para los artículos más cotizados: **Auriculares HyperX Cloud II**, **PC Gamer ASUS ROG Strix** y **Mouse Logitech G502 HERO**.
   - Cálculo dinámico del promedio en estrellas y formulario para agregar nuevas reseñas de clientes con persistencia en `localStorage`.
4. **Registro de Usuario (`registro.html`)**:
   - **Regla de Negocio 1**: Verificación estricta de **mayor de 18 años** mediante validación en JavaScript.
   - **Regla de Negocio 2**: Detección en vivo de correos Duoc UC (`@duocuc.cl`, `@duoc.cl`, `@alumnos.duoc.cl`) activando el **20% de descuento de por vida**.
   - **Regla de Negocio 3**: Ingreso opcional de **código de referido** (otorga 50 pts al referente y 20 pts de bienvenida al nuevo usuario).
5. **Inicio de Sesión (`login.html`)**: Autenticación Front-End con `localStorage`, soporte de credenciales de Administrador (`admin` / `duoc123`) y accesos directos demo para evaluación rápida.
6. **Gestión de Perfil (`mi-cuenta.html`)**: Nivel actual de gamificación (Novato 🥉, Jugador Frecuente 🥈, Veterano 🥇, Leyenda 🏆), barra de progreso, código personal de referido para compartir y botón de canje de puntos por cupones de descuento.
7. **Nosotros (`nosotros.html`)**: Historia de Level-Up Gamer, Misión y Visión, origen y autenticidad de los productos e Impacto Comunitario.
8. **Blog y Detalles de Blog (`blog.html`)**: Artículos educativos sobre setups, sillas ergonómicas y juegos de mesa con modal de lectura y botones para compartir en X, Facebook y WhatsApp.
9. **Contacto y Mapa de Eventos (`contacto.html`)**: Formulario con validación de teléfono chileno (+56 9 XXXX XXXX), enlace directo al chat de WhatsApp de soporte técnico y **Mapa de Ubicaciones de Eventos Gamer en Chile** donde registrar asistencia y ganar puntos LevelUp presenciales.
10. **Carrito de Compras (`carrito.html`)**:
    - Agregar, modificar y eliminar cantidades respetando el stock disponible.
    - Miniatura de cada producto en la tabla.
    - Desglose con Subtotal, Descuento Duoc (20%), Cupón de Puntos LevelUp y Total en CLP.
    - **Persistencia con `localStorage`**:
      `Producto → JavaScript → Carrito → JSON.stringify() → localStorage → JSON.parse() → Carrito restaurado`.
    - Simulación de Checkout con número de orden, acumulación de puntos y descuento de stock.

### ⚙️ Área Administrativa (Protegida)
11. **Gestión de Productos (`admin-productos.html`)**:
    - Tabla administrativa con miniaturas de fotos, listado de productos, búsqueda y contador.
    - Formulario modal para **Crear** nuevos productos y **Editar** existentes (incluyendo código, nombre, precio, stock, descripción, fabricante e imagen).
    - **Eliminación** de productos con confirmación.
    - Botón para **Restaurar Catálogo Base** de fábrica.
12. **Gestión de Usuarios (`admin-usuarios.html`)**:
    - Tabla de clientes registrados, visualización de puntos, nivel y descuento Duoc.
    - Modal para ajustar puntos LevelUp (para comprobar ascensos de nivel) y modificar condición Duoc.
    - Eliminación de cuentas.

---

## 🎨 Paleta de Colores y Tipografía (Pauta Oficial)

- **Fondo Principal:** Negro (`#000000`) y fondo elevado (`#0C0F14`).
- **Acentos:** Azul Eléctrico (`#1E90FF`) y Verde Neón (`#39FF14`).
- **Textos:** Blanco (`#FFFFFF`) y Gris Claro (`#D3D3D3`).
- **Tipografías:**
  - `Orbitron`: Encabezados y títulos principales (Google Fonts).
  - `Roboto`: Textos descriptivos y formularios (Google Fonts).

---

## 🛠️ Cómo Ejecutar el Proyecto en Localhost (Puerto 5501)

1. Abre la terminal en el directorio raíz del proyecto:
   ```bash
   cd "c:\Users\Solink\Desktop\Uni\Fullstack 2\Tienda Level Up\Tienda-Level-Up"
   ```
2. Inicia el servidor local en el puerto 5501 mediante Python:
   ```bash
   py -m http.server 5501
   ```
3. Abre tu navegador e ingresa a:
   ```text
   http://localhost:5501/
   ```
4. También es 100% compatible con la extensión **Live Server** de Visual Studio Code configurada en el puerto 5501.

---

## 📝 Autores y Asignatura

- **Asignatura:** Desarrollo Full Stack II (DSY1104)
- **Institución:** Duoc UC
- **Evaluación:** Evaluación Parcial 1 (EV1) — Semestre 2026
