/* ============================================================
   LEVEL-UP GAMER — Carrito de compras
   Producto → JavaScript → Carrito → JSON.stringify() → localStorage
   localStorage → JSON.parse() → Carrito restaurado   (sección 7)
   ============================================================ */

function lugGetCart() {
  try {
    return JSON.parse(localStorage.getItem(LUG_KEYS.CART)) || [];
  } catch (e) {
    return [];
  }
}

function lugSaveCart(cart) {
  localStorage.setItem(LUG_KEYS.CART, JSON.stringify(cart));
  lugActualizarBadgeCarrito();
}

/* Regla de negocio: no se puede agregar más unidades que el stock disponible */
function lugAgregarAlCarrito(codigo, cantidad = 1) {
  const producto = lugGetProductByCode(codigo);
  if (!producto) return { ok: false, error: "Producto no encontrado." };

  const cart = lugGetCart();
  const item = cart.find((i) => i.codigo === codigo);
  const cantidadActual = item ? item.cantidad : 0;

  if (cantidadActual + cantidad > producto.stock) {
    return { ok: false, error: `Solo quedan ${producto.stock - cantidadActual} unidades disponibles.` };
  }

  if (item) {
    item.cantidad += cantidad;
  } else {
    cart.push({ codigo, cantidad });
  }
  lugSaveCart(cart);
  return { ok: true };
}

function lugModificarCantidad(codigo, nuevaCantidad) {
  const producto = lugGetProductByCode(codigo);
  const cart = lugGetCart();
  const item = cart.find((i) => i.codigo === codigo);
  if (!item || !producto) return { ok: false, error: "Producto no está en el carrito." };

  if (nuevaCantidad <= 0) {
    return lugEliminarDelCarrito(codigo);
  }
  if (nuevaCantidad > producto.stock) {
    return { ok: false, error: `Stock máximo disponible: ${producto.stock} unidades.` };
  }
  item.cantidad = nuevaCantidad;
  lugSaveCart(cart);
  return { ok: true };
}

function lugEliminarDelCarrito(codigo) {
  const cart = lugGetCart().filter((i) => i.codigo !== codigo);
  lugSaveCart(cart);
  return { ok: true };
}

function lugVaciarCarrito() {
  lugSaveCart([]);
}

function lugCarritoConDetalle() {
  return lugGetCart()
    .map((item) => {
      const producto = lugGetProductByCode(item.codigo);
      if (!producto) return null;
      return { ...item, producto, subtotal: producto.precio * item.cantidad };
    })
    .filter(Boolean);
}

function lugTotalCarrito() {
  return lugCarritoConDetalle().reduce((acc, i) => acc + i.subtotal, 0);
}

function lugCantidadTotalItems() {
  return lugGetCart().reduce((acc, i) => acc + i.cantidad, 0);
}

/* Calcula el total aplicando el 20% de descuento de por vida (correos
   @duocuc.cl) y, si existe, un cupón de puntos LevelUp canjeados. */
function lugCalcularTotales() {
  const subtotal = lugTotalCarrito();
  const usuario = typeof lugUsuarioActual === "function" ? lugUsuarioActual() : null;

  let descuentoDuocPct = usuario && usuario.descuentoDuoc ? 20 : 0;
  let cupon = null;
  try {
    cupon = JSON.parse(sessionStorage.getItem("lug_cupon_puntos"));
  } catch (e) {
    cupon = null;
  }
  const descuentoCuponPct = cupon && cupon.usuario === (usuario ? usuario.email : null) ? cupon.porcentaje : 0;

  // Los descuentos no son acumulativos multiplicativos: se suman con tope de 40%.
  const descuentoTotalPct = Math.min(descuentoDuocPct + descuentoCuponPct, 40);
  const montoDescuento = Math.round(subtotal * (descuentoTotalPct / 100));
  const total = subtotal - montoDescuento;

  return { subtotal, descuentoDuocPct, descuentoCuponPct, descuentoTotalPct, montoDescuento, total };
}

function lugActualizarBadgeCarrito() {
  const badges = document.querySelectorAll("[data-cart-badge]");
  const total = lugCantidadTotalItems();
  badges.forEach((b) => {
    b.textContent = total;
    b.style.display = total > 0 ? "inline-flex" : "none";
  });
}
