# Level-Up Gamer — Proyecto Semestral DSY1104 (EV1)

![Level-Up Gamer](https://img.shields.io/badge/Forma-B%20%7C%20Level--Up%20Gamer-1E90FF?style=for-the-badge)
![Duoc UC](https://img.shields.io/badge/Duoc%20UC-Desarrollo%20Full%20Stack%20II-39FF14?style=for-the-badge&labelColor=000000)
![Tecnologías](https://img.shields.io/badge/HTML5-CSS3-JavaScript%20ES6+-orange?style=for-the-badge)

Este repositorio contiene la primera versión funcional del Front-End para la **Evaluación Parcial 1 (EV1)** de la asignatura **Desarrollo Full Stack II (DSY1104)**, correspondiente al **Caso Forma B: Tienda Level-Up Gamer**.

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
├── js/
│   ├── data.js                  # Catálogo de 10 categorías, productos base de la pauta y posts de blog
│   ├── auth.js                  # Gestión de usuarios, sesiones, niveles gamer y canje de puntos
│   ├── cart.js                  # Lógica del carrito, stock, cálculo de subtotales, descuentos y totales
│   ├── validations.js           # Validaciones JS: mayor de 18 años, correo Duoc, teléfono chileno, etc.
│   ├── reviews.js               # Sistema de reseñas y cálculo de promedio de calificaciones en estrellas
│   └── nav.js                   # Header y footer consistentes inyectados dinámicamente + WhatsApp flotante
├── index.html                   # HOME / Página principal con Hero, categorías, destacados y gamificación
├── productos.html               # Catálogo completo con filtros avanzados (búsqueda, categorías, orden)
├── detalle-producto.html        # Vista detallada, origen/fabricante, stock, reseñas y recomendados
├── registro.html                # Registro con validación >= 18 años, detección correo Duoc y referidos
├── login.html                   # Inicio de sesión con autenticación JS + botones de acceso rápido demo
├── mi-cuenta.html               # Perfil de usuario, nivel gamer, código de referido y canje de puntos
├── nosotros.html                # Historia, Misión, Visión, origen de productos e Impacto Comunitario
├── blog.html                    # Novedades, consejos gamer y modal de lectura completa + compartir en RRSS
├── contacto.html                # Formulario validado, enlace a WhatsApp y Mapa de Eventos en Chile
├── carrito.html                 # Carrito de compras con persistencia localStorage y checkout simulado
├── admin-productos.html         # Panel Admin: CRUD completo de productos con modal
├── admin-usuarios.html          # Panel Admin: Gestión de usuarios, edición de puntos y rol Duoc
└── README.md                    # Documentación del proyecto
```

---

## 🚀 Vistas y Funcionalidades Desarrolladas

### 🌐 Tienda Pública
1. **HOME / Página Principal (`index.html`)**: Banner principal gamer, estadísticas de la tienda, parrilla de categorías, productos destacados, llamada a gamificación y sección de impacto comunitario.
2. **Catálogo de Productos (`productos.html`)**: Muestra todas las 10 categorías requeridas con chips rápidos, buscador en tiempo real, filtro por categoría y ordenamiento (precio y rating).
3. **Detalle de Producto (`detalle-producto.html`)**: Renderizado dinámico vía `?codigo=...`, indicador de origen/fabricante, disponibilidad de stock, selector de cantidad, cálculo de precio con 20% de descuento Duoc, sistema de reseñas con estrellas y productos relacionados.
4. **Registro de Usuario (`registro.html`)**:
   - **Regla de Negocio 1**: Verificación estricta de **mayor de 18 años**.
   - **Regla de Negocio 2**: Detección en vivo de correo Duoc UC (`@duocuc.cl`, `@duoc.cl`, `@alumnos.duoc.cl`) activando el **20% de descuento de por vida**.
   - **Regla de Negocio 3**: Ingreso opcional de **código de referido** (otorga 50 pts al referente y 20 pts de bienvenida al nuevo usuario).
5. **Inicio de Sesión (`login.html`)**: Autenticación Front-End con `localStorage`, feedback visual y accesos directos demo para evaluación rápida.
6. **Gestión de Perfil (`mi-cuenta.html`)**: Nivel actual de gamificación (Novato 🥉, Jugador Frecuente 🥈, Veterano 🥇, Leyenda 🏆), barra de progreso, código personal de referido para compartir y botón de canje de puntos por cupones de descuento.
7. **Nosotros (`nosotros.html`)**: Historia de Level-Up Gamer, Misión y Visión, origen y autenticidad de los productos e Impacto Comunitario.
8. **Blog y Detalles de Blog (`blog.html`)**: Artículos educativos sobre setups, sillas ergonómicas y juegos de mesa con modal de lectura y botones para compartir en X, Facebook y WhatsApp.
9. **Contacto y Mapa de Eventos (`contacto.html`)**: Formulario con validación de teléfono chileno (+56 9 XXXX XXXX), enlace directo al chat de WhatsApp de soporte técnico y **Mapa de Ubicaciones de Eventos Gamer en Chile** con puntos presenciales.
10. **Carrito de Compras (`carrito.html`)**:
    - Agregar, modificar y eliminar cantidades respetando el stock disponible.
    - Desglose con Subtotal, Descuento Duoc (20%), Cupón de Puntos LevelUp y Total en CLP.
    - **Persistencia con `localStorage`**:
      `Producto → JavaScript → Carrito → JSON.stringify() → localStorage → JSON.parse() → Carrito restaurado`.
    - Simulación de Checkout con número de orden, acumulación de puntos y descuento de stock.

### ⚙️ Área Administrativa
11. **Gestión de Productos (`admin-productos.html`)**:
    - Tabla administrativa con listado de productos, búsqueda y contador.
    - Formulario modal para **Crear** nuevos productos y **Editar** existentes.
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

## 🛠️ Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/BenGomezDUOC/Tienda-Level-Up.git
   ```
2. Abre la carpeta en tu editor preferido (Visual Studio Code, etc.).
3. Abre el archivo `index.html` en cualquier navegador web moderno (o mediante la extensión *Live Server*).
4. No requiere dependencias de `npm` ni backend para esta primera entrega (EV1 Front-End puro con `localStorage`).

---

## 📝 Autores y Asignatura

- **Asignatura:** Desarrollo Full Stack II (DSY1104)
- **Institución:** Duoc UC
- **Evaluación:** Evaluación Parcial 1 (EV1) — Septiembre 2026
