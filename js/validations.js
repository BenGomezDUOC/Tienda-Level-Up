/* ============================================================
   LEVEL-UP GAMER — Validaciones JavaScript reutilizables
   Requisito: "Aplicar validaciones JavaScript que vayan más allá
   de depender solamente de required o type='email'" (sección 6).
   ============================================================ */

const LugValidate = {
  /* Un correo con formato correcto y dominio con al menos un punto */
  email(valor) {
    const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return re.test(String(valor).trim());
  },

  /* Regla de negocio: solo mayores de 18 años pueden registrarse */
  mayorDeEdad(fechaNacimiento) {
    if (!fechaNacimiento) return false;
    const nacimiento = new Date(fechaNacimiento + "T00:00:00");
    if (isNaN(nacimiento.getTime())) return false;
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad >= 18;
  },

  /* Regla de negocio: correos @duocuc.cl obtienen 20% de descuento de por vida */
  esCorreoDuoc(valor) {
    return /@duocuc\.cl$/i.test(String(valor).trim());
  },

  soloTexto(valor) {
    return /^[a-zA-ZÀ-ÿ\s']{2,60}$/.test(String(valor).trim());
  },

  telefonoChile(valor) {
    // Acepta +56 9 XXXX XXXX o variantes con/sin espacios
    return /^(\+?56)?\s?9\s?\d{4}\s?\d{4}$/.test(String(valor).trim());
  },

  passwordSegura(valor) {
    // Mínimo 8 caracteres, al menos una letra y un número
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(String(valor));
  },

  requerido(valor) {
    return valor !== null && valor !== undefined && String(valor).trim().length > 0;
  },

  rangoNumerico(valor, min, max) {
    const n = Number(valor);
    if (Number.isNaN(n)) return false;
    return n >= min && n <= max;
  },

  /* Código de referido: 6 caracteres alfanuméricos en mayúsculas */
  codigoReferidoValido(valor) {
    return /^[A-Z0-9]{6}$/.test(String(valor).trim());
  },
};

/* Muestra/oculta un mensaje de error personalizado bajo un campo.
   Requiere que el campo tenga un elemento hermano con
   [data-error-for="idDelCampo"] en el HTML. */
function lugSetFieldError(inputId, mensaje) {
  const input = document.getElementById(inputId);
  const errorEl = document.querySelector(`[data-error-for="${inputId}"]`);
  if (!input || !errorEl) return;
  if (mensaje) {
    errorEl.textContent = mensaje;
    errorEl.classList.add("visible");
    input.classList.add("input-invalido");
    input.setAttribute("aria-invalid", "true");
  } else {
    errorEl.textContent = "";
    errorEl.classList.remove("visible");
    input.classList.remove("input-invalido");
    input.removeAttribute("aria-invalid");
  }
}

function lugMostrarAlerta(contenedorId, mensaje, tipo = "exito") {
  const cont = document.getElementById(contenedorId);
  if (!cont) return;
  cont.textContent = mensaje;
  cont.className = `alerta alerta-${tipo} visible`;
  cont.scrollIntoView({ behavior: "smooth", block: "center" });
}
