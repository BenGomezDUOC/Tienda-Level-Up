/* ============================================================
   LEVEL-UP GAMER — Navegación compartida
   Inyecta un header y footer consistentes en todas las páginas
   (sección 6: "Mantener una estructura consistente entre páginas").
   El body debe tener data-root="" en la raíz o data-root="../"
   dentro de /admin, y data-page="id" para marcar el link activo.
   ============================================================ */

function lugInit() {
  const body = document.body;
  const root = body.getAttribute("data-root") || "";
  const page = body.getAttribute("data-page") || "";
  const usuario = typeof lugUsuarioActual === "function" ? lugUsuarioActual() : null;

  const links = [
    { id: "home", href: root + "index.html", label: "Home" },
    { id: "productos", href: root + "productos.html", label: "Productos" },
    { id: "nosotros", href: root + "nosotros.html", label: "Nosotros" },
    { id: "blog", href: root + "blog.html", label: "Blog" },
    { id: "contacto", href: root + "contacto.html", label: "Contacto" },
    { id: "admin", href: root + "admin-productos.html", label: "⚙️ Admin" },
  ];

  const navLinksHtml = links
    .map(
      (l) =>
        `<a href="${l.href}" class="nav-link ${page === l.id ? "activo" : ""}">${l.label}</a>`
    )
    .join("");

  const cuentaHtml = usuario
    ? `<a href="${root}mi-cuenta.html" class="nav-link ${page === "cuenta" ? "activo" : ""}">👤 ${usuario.nombre.split(" ")[0]}</a>
       <button class="btn btn-ghost btn-sm" id="lug-btn-logout" type="button">Salir</button>`
    : `<a href="${root}login.html" class="nav-link ${page === "login" ? "activo" : ""}">Iniciar sesión</a>
       <a href="${root}registro.html" class="btn btn-primary btn-sm">Regístrate</a>`;

  const header = document.getElementById("lug-header");
  if (header) {
    header.innerHTML = `
      <div class="nav-bar">
        <a href="${root}index.html" class="logo" aria-label="Level-Up Gamer, ir al inicio">
          <span class="logo-icon">🎮</span><span class="logo-text">LEVEL-UP<span class="logo-accent">GAMER</span></span>
        </a>
        <button class="nav-toggle" id="lug-nav-toggle" aria-label="Abrir menú" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav-links" id="lug-nav-links">
          ${navLinksHtml}
        </nav>
        <div class="nav-actions">
          ${cuentaHtml}
          <a href="${root}carrito.html" class="cart-link ${page === "carrito" ? "activo" : ""}" aria-label="Ver carrito">
            🛒 <span class="cart-badge" data-cart-badge style="display:none">0</span>
          </a>
        </div>
      </div>`;

    const toggle = document.getElementById("lug-nav-toggle");
    const navLinks = document.getElementById("lug-nav-links");
    toggle.addEventListener("click", () => {
      const abierto = navLinks.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
      toggle.classList.toggle("activo", abierto);
    });

    const logoutBtn = document.getElementById("lug-btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        lugCerrarSesion();
        window.location.href = root + "index.html";
      });
    }
  }

  const footer = document.getElementById("lug-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-grid">
        <div>
          <div class="logo footer-logo"><span class="logo-icon">🎮</span><span class="logo-text">LEVEL-UP<span class="logo-accent">GAMER</span></span></div>
          <p class="footer-texto">Tienda online para gamers en todo Chile. Despachos a nivel nacional, sin ubicación física, con toda la comunidad al centro.</p>
        </div>
        <div>
          <h3 class="footer-titulo">Tienda</h3>
          <a href="${root}productos.html">Catálogo de productos</a>
          <a href="${root}carrito.html">Carrito de compras</a>
          <a href="${root}registro.html">Crear cuenta</a>
          <a href="${root}mi-cuenta.html">Mi Cuenta y Puntos LevelUp</a>
        </div>
        <div>
          <h3 class="footer-titulo">Comunidad & Admin</h3>
          <a href="${root}blog.html">Blog gamer</a>
          <a href="${root}nosotros.html">Nosotros</a>
          <a href="${root}contacto.html">Contacto y Mapa de Eventos</a>
          <a href="${root}admin-productos.html" style="color: var(--verde);">Panel Admin: Productos</a>
          <a href="${root}admin-usuarios.html" style="color: var(--verde);">Panel Admin: Usuarios</a>
        </div>
        <div>
          <h3 class="footer-titulo">Soporte técnico</h3>
          <p class="footer-texto">¿Dudas con tu compra o tu equipo? Escríbenos por WhatsApp.</p>
          <a href="https://wa.me/56900000000" target="_blank" rel="noopener" class="btn btn-outline btn-sm">💬 Soporte por WhatsApp</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Level-Up Gamer. Proyecto semestral académico DSY1104 — Duoc UC.</p>
      </div>`;
  }

  lugActualizarBadgeCarrito();
  lugInitWhatsapp(root);
}

function lugInitWhatsapp(root) {
  if (document.getElementById("lug-whatsapp-float")) return;
  const a = document.createElement("a");
  a.id = "lug-whatsapp-float";
  a.className = "whatsapp-float";
  a.href = "https://wa.me/56900000000";
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Contactar soporte técnico por WhatsApp");
  a.innerHTML = "💬";
  document.body.appendChild(a);
}

document.addEventListener("DOMContentLoaded", lugInit);
