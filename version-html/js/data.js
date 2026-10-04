/* ============================================================
   LEVEL-UP GAMER — Datos base del catálogo
   Requisito: "Crear un arreglo de productos y mostrarlos
   mediante JavaScript" (sección 7 de las instrucciones EV1).
   ============================================================ */

const LUG_CATEGORIES = [
  { id: "juegos-mesa", nombre: "Juegos de Mesa", icono: "🎲" },
  { id: "accesorios", nombre: "Accesorios", icono: "🎧" },
  { id: "consolas", nombre: "Consolas", icono: "🕹️" },
  { id: "computadores", nombre: "Computadores Gamers", icono: "💻" },
  { id: "sillas", nombre: "Sillas Gamers", icono: "🪑" },
  { id: "mouse", nombre: "Mouse", icono: "🖱️" },
  { id: "mousepad", nombre: "Mousepad", icono: "🟩" },
  { id: "poleras", nombre: "Poleras Personalizadas", icono: "👕" },
  { id: "polerones", nombre: "Polerones Gamers Personalizados", icono: "🧥" },
  { id: "servicio-tecnico", nombre: "Servicio Técnico", icono: "🛠️" },
];

/* Catálogo base — el requerido "detalle de productos (ejemplo)"
   del documento de la tienda, más al menos un producto por cada
   categoría restante para que el catálogo esté completo. */
const LUG_PRODUCTS_BASE = [
  {
    codigo: "JM001", categoria: "juegos-mesa", nombre: "Catan",
    precio: 29990, stock: 18, rating: 4.7,
    descripcion: "Clásico juego de estrategia donde compites por colonizar y expandirte en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    fabricante: "Devir Chile", icono: "🎲",
    imagen: "img/Catan.webp",
  },
  {
    codigo: "JM002", categoria: "juegos-mesa", nombre: "Carcassonne",
    precio: 24990, stock: 22, rating: 4.6,
    descripcion: "Juego de colocación de fichas donde construyes el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
    fabricante: "Z-Man Games", icono: "🏰",
    imagen: "img/Carcassonne.jpg",
  },
  {
    codigo: "AC001", categoria: "accesorios", nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990, stock: 30, rating: 4.8,
    descripcion: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
    fabricante: "Microsoft", icono: "🎮",
    imagen: "img/Controlador Inalámbrico Xbox Series X.webp",
  },
  {
    codigo: "AC002", categoria: "accesorios", nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 79990, stock: 25, rating: 4.9,
    descripcion: "Sonido envolvente de calidad con micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
    fabricante: "HyperX", icono: "🎧",
    imagen: "img/Auriculares Gamer HyperX Cloud II.jpg",
  },
  {
    codigo: "CO001", categoria: "consolas", nombre: "PlayStation 5",
    precio: 549990, stock: 10, rating: 4.9,
    descripcion: "La consola de última generación de Sony, con gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
    fabricante: "Sony", icono: "🕹️",
    imagen: "img/PlayStation 5.jpg",
  },
  {
    codigo: "CG001", categoria: "computadores", nombre: "PC Gamer ASUS ROG Strix",
    precio: 1299990, stock: 6, rating: 4.8,
    descripcion: "Equipo potente diseñado para los gamers más exigentes, equipado con los últimos componentes para un rendimiento excepcional en cualquier juego.",
    fabricante: "ASUS", icono: "💻",
    imagen: "img/PC Gamer ASUS ROG Strix.jpg",
  },
  {
    codigo: "SG001", categoria: "sillas", nombre: "Silla Gamer Secretlab Titan",
    precio: 349990, stock: 12, rating: 4.7,
    descripcion: "Diseñada para el máximo confort, ofrece soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
    fabricante: "Secretlab", icono: "🪑",
    imagen: "img/Silla Gamer Secretlab Titan.jpg",
  },
  {
    codigo: "MS001", categoria: "mouse", nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 49990, stock: 40, rating: 4.8,
    descripcion: "Sensor de alta precisión y botones personalizables, ideal para gamers que buscan control preciso y personalización.",
    fabricante: "Logitech", icono: "🖱️",
    imagen: "img/Mouse Gamer Logitech G502 HERO.jpg",
  },
  {
    codigo: "MP001", categoria: "mousepad", nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 29990, stock: 35, rating: 4.6,
    descripcion: "Área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    fabricante: "Razer", icono: "🟩",
    imagen: "img/Mousepad Razer Goliathus Extended Chroma.jpg",
  },
  {
    codigo: "PP001", categoria: "poleras", nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990, stock: 50, rating: 4.5,
    descripcion: "Camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.",
    fabricante: "Level-Up Gamer", icono: "👕",
    imagen: "img/Polera Gamer Personalizada 'Level-Up'.png",
  },
  {
    codigo: "PG001", categoria: "polerones", nombre: "Polerón Gamer Personalizado 'Level-Up'",
    precio: 22990, stock: 40, rating: 4.6,
    descripcion: "Polerón con capucha, tela afelpada y personalización de tu gamer tag o diseño favorito. Ideal para maratones de juego en invierno.",
    fabricante: "Level-Up Gamer", icono: "🧥",
    imagen: "img/Polerón Gamer Personalizado 'Level-Up'.png",
  },
  {
    codigo: "ST001", categoria: "servicio-tecnico", nombre: "Mantención y Limpieza de PC Gamer",
    precio: 19990, stock: 999, rating: 4.9,
    descripcion: "Servicio técnico de limpieza interna, cambio de pasta térmica y optimización de rendimiento para tu equipo gamer.",
    fabricante: "Level-Up Gamer", icono: "🛠️",
    imagen: "img/Mantención y Limpieza de PC Gamer.webp",
  },
  {
    codigo: "ST002", categoria: "servicio-tecnico", nombre: "Armado de PC a Pedido",
    precio: 39990, stock: 999, rating: 4.8,
    descripcion: "Nuestros técnicos arman tu PC Gamer a medida según el presupuesto y los juegos que quieras correr.",
    fabricante: "Level-Up Gamer", icono: "🛠️",
    imagen: "img/Armado de PC a Pedido.webp",
  },
];

/* Blog — requisito "Contenido Educativo y de Comunidad" del
   documento de la tienda (blogs y noticias del mundo gamer). */
const LUG_BLOG_POSTS = [
  {
    id: "bp001",
    titulo: "5 juegos de mesa para iniciarte en el mundo del boardgaming",
    resumen: "Si nunca has jugado un juego de mesa moderno, estos títulos son la puerta de entrada perfecta a la comunidad.",
    fecha: "2026-08-02",
    autor: "Equipo Level-Up",
    icono: "🎲",
    imagen: "img/Catan blog.jpg",
    contenido: `Los juegos de mesa modernos han evolucionado muchísimo desde el clásico Monopoly. Hoy existen experiencias para todos los gustos: estrategia, cooperación, deducción y fiesta.

Catan y Carcassonne son dos excelentes puntos de partida: reglas simples, partidas de menos de una hora y mucha interacción social. A medida que tu grupo agarre confianza, puedes avanzar a juegos con mayor profundidad estratégica.

Nuestra recomendación: junta a 3 o 4 amigos, elige un juego de nuestra categoría "Juegos de Mesa" y dedica una tarde completa a aprender las reglas. La curva de aprendizaje vale la pena.`,
  },
  {
    id: "bp002",
    titulo: "Cómo elegir la silla gamer ideal para sesiones largas",
    resumen: "Ergonomía, materiales y ajustes: todo lo que debes revisar antes de comprar tu próxima silla gamer.",
    fecha: "2026-08-15",
    autor: "Equipo Level-Up",
    icono: "🪑",
    imagen: "img/Titan lab blog.webp",
    contenido: `Pasar muchas horas sentado frente al computador exige una silla que cuide tu espalda. Al elegir una silla gamer, revisa estos puntos:

1. Soporte lumbar ajustable.
2. Reposabrazos 4D.
3. Reclinación de al menos 135°.
4. Materiales transpirables.

La Secretlab Titan de nuestro catálogo cumple con todos estos puntos y es una de las más recomendadas por la comunidad competitiva.`,
  },
  {
    id: "bp003",
    titulo: "Guía rápida: arma tu setup gamer con el mejor rendimiento",
    resumen: "Componentes, periféricos y accesorios que marcan la diferencia en tu experiencia de juego.",
    fecha: "2026-08-28",
    autor: "Equipo Level-Up",
    icono: "💻",
    imagen: "img/Armando PC blog.webp",
    contenido: `Un buen setup gamer no depende solo del computador. El mouse, el mousepad y los audífonos también influyen en tu rendimiento.

Para juegos competitivos, prioriza un mouse liviano y de alta precisión como el Logitech G502 HERO, junto a un mousepad extendido como el Razer Goliathus. Complementa con audífonos con buen aislamiento de sonido, como los HyperX Cloud II.

Recuerda: la ergonomía y la comodidad se traducen directamente en mejor rendimiento durante sesiones largas.`,
  },
  {
    id: "bp004",
    titulo: "Estrategia y expansión: El arte de dominar Carcassonne",
    resumen: "Consejos clave para posicionar tus losetas y dominar castillos, caminos y monasterios medievales.",
    fecha: "2026-09-04",
    autor: "Equipo Level-Up",
    icono: "🏰",
    imagen: "img/Carcassonne blog.jpg",
    contenido: `Carcassonne es uno de los mayores clásicos modernos por su perfecta mezcla de simplicidad y profundidad táctica.

Colocar estratégicamente a tus seguidores (meeples) como caballeros, ladrones, monjes o granjeros puede cambiar el rumbo de la partida en el último turno. Aprender a cerrar ciudades rivales o disputar campos fértiles es el sello de los verdaderos estrategas.

Disponible en Level-Up Gamer con entrega inmediata para tus tardes de juego con amigos.`,
  },
];

/* ------------------------------------------------------------
   Persistencia de productos: el catálogo base convive con los
   productos que el administrador cree/edite/elimine desde el
   panel (localStorage), sin perder los datos de ejemplo.
   ------------------------------------------------------------ */
const LUG_KEYS = {
  PRODUCTS: "lug_products",
  USERS: "lug_users",
  SESSION: "lug_session",
  CART: "lug_cart",
  REVIEWS: "lug_reviews",
  MESSAGES: "lug_messages",
};

function lugInitProducts() {
  const raw = localStorage.getItem(LUG_KEYS.PRODUCTS);
  if (!raw) {
    localStorage.setItem(LUG_KEYS.PRODUCTS, JSON.stringify(LUG_PRODUCTS_BASE));
    return LUG_PRODUCTS_BASE.slice();
  }
  try {
    let prods = JSON.parse(raw);
    let modificado = false;
    // Asegurar que cada producto tenga su imagen correspondiente
    prods = prods.map((p) => {
      const base = LUG_PRODUCTS_BASE.find((b) => b.codigo === p.codigo);
      if (base && (!p.imagen || p.imagen !== base.imagen)) {
        p.imagen = base.imagen;
        modificado = true;
      }
      return p;
    });
    if (modificado) {
      localStorage.setItem(LUG_KEYS.PRODUCTS, JSON.stringify(prods));
    }
    return prods;
  } catch (e) {
    localStorage.setItem(LUG_KEYS.PRODUCTS, JSON.stringify(LUG_PRODUCTS_BASE));
    return LUG_PRODUCTS_BASE.slice();
  }
}

function lugGetProducts() {
  return lugInitProducts();
}

function lugSaveProducts(products) {
  localStorage.setItem(LUG_KEYS.PRODUCTS, JSON.stringify(products));
}

function lugGetProductByCode(codigo) {
  return lugGetProducts().find((p) => p.codigo === codigo);
}

function lugGetProductImage(producto) {
  if (!producto) return "";
  if (producto.imagen) return producto.imagen;
  const base = LUG_PRODUCTS_BASE.find((p) => p.codigo === producto.codigo || p.nombre === producto.nombre);
  return base && base.imagen ? base.imagen : "";
}

function lugRenderProductVisual(producto, className = "producto-img") {
  const src = lugGetProductImage(producto);
  if (src) {
    return `<img src="${src}" alt="${producto.nombre}" class="${className}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><span class="fallback-icono" style="display:none;">${producto.icono || '🎮'}</span>`;
  }
  return `<span>${producto.icono || '🎮'}</span>`;
}

function lugGetCategoryName(id) {
  const c = LUG_CATEGORIES.find((c) => c.id === id);
  return c ? c.nombre : id;
}

function lugFormatCLP(valor) {
  return "$" + Math.round(valor).toLocaleString("es-CL") + " CLP";
}
