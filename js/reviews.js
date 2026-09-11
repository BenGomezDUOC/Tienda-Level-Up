/* ============================================================
   LEVEL-UP GAMER — Reseñas y calificaciones
   Requisito: "Permitir a los clientes dejar reseñas y calificar
   los productos comprados."
   ============================================================ */

function lugGetReviews(codigo) {
  try {
    const todas = JSON.parse(localStorage.getItem(LUG_KEYS.REVIEWS)) || {};
    return todas[codigo] || [];
  } catch (e) {
    return [];
  }
}

function lugAgregarReview(codigo, { autor, calificacion, comentario }) {
  if (!autor || !comentario || !calificacion) {
    return { ok: false, error: "Completa tu nombre, calificación y comentario." };
  }
  let todas = {};
  try {
    todas = JSON.parse(localStorage.getItem(LUG_KEYS.REVIEWS)) || {};
  } catch (e) {
    todas = {};
  }
  if (!todas[codigo]) todas[codigo] = [];
  todas[codigo].push({
    autor,
    calificacion: Number(calificacion),
    comentario,
    fecha: new Date().toISOString(),
  });
  localStorage.setItem(LUG_KEYS.REVIEWS, JSON.stringify(todas));
  return { ok: true };
}

function lugPromedioCalificacion(codigo) {
  const reviews = lugGetReviews(codigo);
  if (reviews.length === 0) {
    const producto = lugGetProductByCode(codigo);
    return producto ? producto.rating : 0;
  }
  const suma = reviews.reduce((acc, r) => acc + r.calificacion, 0);
  return suma / reviews.length;
}

function lugRenderEstrellas(promedio) {
  const llenas = Math.round(promedio);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= llenas ? "★" : "☆";
  }
  return html;
}
