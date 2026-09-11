/* ============================================================
   LEVEL-UP GAMER — Autenticación simulada (Front-End)
   EV1 no exige autenticación real, JWT, backend ni base de
   datos (sección 5). Todo se resuelve con JavaScript + localStorage.
   ============================================================ */

const LUG_NIVELES = [
  { nombre: "Novato", minPuntos: 0, icono: "🥉" },
  { nombre: "Jugador Frecuente", minPuntos: 100, icono: "🥈" },
  { nombre: "Veterano", minPuntos: 300, icono: "🥇" },
  { nombre: "Leyenda LevelUp", minPuntos: 700, icono: "🏆" },
];

const LUG_ADMIN_USER = {
  id: "u_admin",
  nombre: "Administrador Level-Up",
  email: "admin@levelupgamer.cl",
  username: "admin",
  password: "duoc123",
  rol: "admin",
  descuentoDuoc: true,
  codigoReferido: "ADM001",
  puntosLevelUp: 9999,
  fechaNacimiento: "1990-01-01",
  preferencias: { categoriasFavoritas: [] },
  creado: "2026-01-01T00:00:00.000Z",
};

function lugGetUsers() {
  try {
    let users = JSON.parse(localStorage.getItem(LUG_KEYS.USERS));
    if (!users || !Array.isArray(users)) {
      users = [LUG_ADMIN_USER];
      localStorage.setItem(LUG_KEYS.USERS, JSON.stringify(users));
      return users;
    }
    // Asegurar que el usuario admin siempre exista en la lista
    if (!users.some((u) => u.username === "admin" || u.email.toLowerCase() === "admin@levelupgamer.cl")) {
      users.unshift(LUG_ADMIN_USER);
      localStorage.setItem(LUG_KEYS.USERS, JSON.stringify(users));
    }
    return users;
  } catch (e) {
    return [LUG_ADMIN_USER];
  }
}

function lugSaveUsers(users) {
  localStorage.setItem(LUG_KEYS.USERS, JSON.stringify(users));
}

function lugGenerarCodigoReferido(nombre) {
  const base = (nombre || "GMR").replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 3).padEnd(3, "X");
  const numero = Math.floor(100 + Math.random() * 900);
  return `${base}${numero}`;
}

function lugNivelPorPuntos(puntos) {
  let nivel = LUG_NIVELES[0];
  for (const n of LUG_NIVELES) {
    if (puntos >= n.minPuntos) nivel = n;
  }
  return nivel;
}

/* Registra un nuevo usuario aplicando las reglas de negocio del caso:
   - Solo mayores de 18 años.
   - 20% de descuento de por vida si el correo es @duocuc.cl.
   - Código de referido opcional: otorga puntos LevelUp a quien refiere. */
function lugRegistrarUsuario({ nombre, email, fechaNacimiento, password, codigoReferido }) {
  const users = lugGetUsers();

  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, error: "Ya existe una cuenta registrada con ese correo." };
  }

  let puntosIniciales = 0;
  let referidoPor = null;

  if (codigoReferido) {
    const referente = users.find((u) => u.codigoReferido === codigoReferido.toUpperCase());
    if (!referente) {
      return { ok: false, error: "El código de referido ingresado no existe." };
    }
    referente.puntosLevelUp = (referente.puntosLevelUp || 0) + 50;
    referidoPor = referente.email;
    puntosIniciales = 20; // el nuevo usuario también parte con puntos de bienvenida
  }

  const nuevoUsuario = {
    id: "u_" + Date.now(),
    nombre,
    email,
    fechaNacimiento,
    password, // Nota: EV1 es front-end puro; en etapas futuras se reemplaza por backend seguro.
    descuentoDuoc: LugValidate.esCorreoDuoc(email),
    codigoReferido: lugGenerarCodigoReferido(nombre),
    referidoPor,
    puntosLevelUp: puntosIniciales,
    preferencias: { categoriasFavoritas: [] },
    creado: new Date().toISOString(),
  };

  users.push(nuevoUsuario);
  lugSaveUsers(users);
  return { ok: true, usuario: nuevoUsuario };
}

function lugIniciarSesion(identificador, password) {
  const idLimpio = String(identificador || "").trim().toLowerCase();
  
  // Regla especial Administrador: usuario "admin" y contraseña "duoc123"
  if ((idLimpio === "admin" || idLimpio === "admin@levelupgamer.cl") && password === "duoc123") {
    const users = lugGetUsers();
    let admin = users.find((u) => u.username === "admin" || u.email.toLowerCase() === "admin@levelupgamer.cl");
    if (!admin) {
      admin = LUG_ADMIN_USER;
      users.unshift(admin);
      lugSaveUsers(users);
    }
    localStorage.setItem(LUG_KEYS.SESSION, JSON.stringify({ email: admin.email, rol: "admin" }));
    return { ok: true, usuario: admin };
  }

  const users = lugGetUsers();
  const usuario = users.find(
    (u) =>
      ((u.email && u.email.toLowerCase() === idLimpio) ||
       (u.username && u.username.toLowerCase() === idLimpio)) &&
      u.password === password
  );
  if (!usuario) {
    return { ok: false, error: "Usuario o contraseña incorrectos." };
  }
  localStorage.setItem(LUG_KEYS.SESSION, JSON.stringify({ email: usuario.email, rol: usuario.rol || "usuario" }));
  return { ok: true, usuario };
}

function lugCerrarSesion() {
  localStorage.removeItem(LUG_KEYS.SESSION);
}

function lugUsuarioActual() {
  try {
    const sesion = JSON.parse(localStorage.getItem(LUG_KEYS.SESSION));
    if (!sesion) return null;
    const users = lugGetUsers();
    return users.find((u) => u.email.toLowerCase() === sesion.email.toLowerCase()) || null;
  } catch (e) {
    return null;
  }
}

function lugEsAdmin() {
  const usuario = lugUsuarioActual();
  if (!usuario) return false;
  return usuario.rol === "admin" || usuario.username === "admin" || usuario.email.toLowerCase() === "admin@levelupgamer.cl";
}

function lugActualizarUsuario(email, cambios) {
  const users = lugGetUsers();
  const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
  if (idx === -1) return { ok: false, error: "Usuario no encontrado." };
  users[idx] = { ...users[idx], ...cambios };
  lugSaveUsers(users);
  return { ok: true, usuario: users[idx] };
}

/* Canjear puntos LevelUp por un cupón de descuento aplicable en el carrito.
   Regla de negocio simple: cada 100 puntos = 5% de descuento adicional,
   hasta un máximo de 20%. */
function lugCanjearPuntos(email) {
  const users = lugGetUsers();
  const idx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
  if (idx === -1) return { ok: false, error: "Usuario no encontrado." };

  const puntos = users[idx].puntosLevelUp || 0;
  if (puntos < 100) {
    return { ok: false, error: "Necesitas al menos 100 puntos LevelUp para canjear un descuento." };
  }
  const bloques = Math.min(Math.floor(puntos / 100), 4); // tope de 4 bloques = 20%
  const descuento = bloques * 5;
  const puntosUsados = bloques * 100;
  users[idx].puntosLevelUp = puntos - puntosUsados;
  lugSaveUsers(users);
  return { ok: true, descuentoPorcentaje: descuento, puntosRestantes: users[idx].puntosLevelUp };
}
