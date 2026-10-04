/* ============================================================
   LEVEL-UP GAMER — Reseñas y calificaciones
   Requisito: "Permitir a los clientes dejar reseñas y calificar
   los productos comprados."
   ============================================================ */

const LUG_REVIEWS_BASE = {
  "AC002": [
    {
      autor: "Vortax",
      calificacion: 5,
      comentario: "Simplemente brutales para shooters como CS2 y Valorant. La cancelación pasiva de ruido y la comodidad de las almohadillas permiten maratones de horas sin molestia.",
      fecha: "2026-08-12T18:30:00.000Z"
    },
    {
      autor: "Nyxor",
      calificacion: 5,
      comentario: "El audio envolvente 7.1 te da una ventaja clara para ubicar pasos. El micrófono desmontable suena super nítido en Discord. 100% recomendados.",
      fecha: "2026-08-20T21:15:00.000Z"
    },
    {
      autor: "Zkylar",
      calificacion: 4,
      comentario: "Excelente calidad de construcción en aluminio y sonido balanceado. El único detalle es que el cable es algo largo para escritorios pequeños, pero la calidad es indiscutible.",
      fecha: "2026-08-28T14:45:00.000Z"
    },
    {
      autor: "DonComedia",
      calificacion: 5,
      comentario: "Los tengo hace un par de semanas y no los cambio por nada. La tarjeta de sonido USB que incluye es comodísima para mutear rápido.",
      fecha: "2026-09-02T19:10:00.000Z"
    },
    {
      autor: "Rin",
      calificacion: 4,
      comentario: "Comodísimos incluso usando lentes, lo cual siempre era un problema con otros auriculares. Gran compra para jugar y escuchar música.",
      fecha: "2026-09-08T16:20:00.000Z"
    }
  ],

  "CG001": [
    {
      autor: "Kurogane",
      calificacion: 5,
      comentario: "Una verdadera bestia. Corre Cyberpunk 2077 y Warzone en ultra a más de 120 FPS sin pestañear. Las temperaturas se mantienen bajo control en sesiones intensas.",
      fecha: "2026-07-28T22:00:00.000Z"
    },
    {
      autor: "Fernando Zapata (SSSR)",
      calificacion: 5,
      comentario: "Aproveché el 20% de descuento con mi correo de Duoc UC y fue la mejor inversión. Rinde de sobra para modelado 3D en la U y para jugar todo en máxima calidad.",
      fecha: "2026-08-05T17:35:00.000Z"
    },
    {
      autor: "Zephyrus",
      calificacion: 4,
      comentario: "Componentes tope de línea y ensamble impecable con excelente cable management. El gabinete es imponente, asegúrense de medir bien su escritorio.",
      fecha: "2026-08-18T13:50:00.000Z"
    },
    {
      autor: "ElTíoDelPan",
      calificacion: 5,
      comentario: "Tiempos de carga casi inexistentes con el SSD NVMe y la iluminación Aura Sync queda hermosa sincronizada con el teclado y mouse.",
      fecha: "2026-08-30T20:10:00.000Z"
    },
    {
      autor: "Aethel",
      calificacion: 4,
      comentario: "Rendimiento top para streaming y gaming competitivo a la vez. Muy silencioso cuando no está al 100% de carga.",
      fecha: "2026-09-05T15:25:00.000Z"
    }
  ],

  "MS001": [
    {
      autor: "ManzanaVeloz",
      calificacion: 5,
      comentario: "El sensor HERO 25K es el más preciso que he probado. El sistema de pesas ajustables te permite dejarlo exactamente al gramo que te acomoda.",
      fecha: "2026-08-01T12:10:00.000Z"
    },
    {
      autor: "Zev",
      calificacion: 5,
      comentario: "La rueda de scroll con giro infinito es adictiva para navegar y los botones laterales quedan perfectos para asignar macros en MOBA y MMO.",
      fecha: "2026-08-14T18:40:00.000Z"
    },
    {
      autor: "Kuro",
      calificacion: 4,
      comentario: "Ergonomía perfecta para agarre de palma. Si tienes manos medianas o grandes se siente como un guante desde la primera partida.",
      fecha: "2026-08-22T21:05:00.000Z"
    },
    {
      autor: "FrijolMágico",
      calificacion: 5,
      comentario: "Construcción sólida que dura años. El software G HUB permite guardar perfiles en la memoria interna del mouse. Despacho rápido a Temuco.",
      fecha: "2026-09-01T16:50:00.000Z"
    },
    {
      autor: "Yoshi",
      calificacion: 3,
      comentario: "El sensor y los clicks son impecables, pero para juegos rápidos como Overwatch se me hace un poco pesado incluso retirándole todas las pesas.",
      fecha: "2026-09-07T11:15:00.000Z"
    }
  ],

  "JM001": [
    {
      autor: "Sora",
      calificacion: 5,
      comentario: "Infaltable para jugar con amigos y familia los fines de semana. Las partidas nunca son iguales y la negociación de recursos es genial.",
      fecha: "2026-08-10T19:20:00.000Z"
    },
    {
      autor: "Tooru",
      calificacion: 4,
      comentario: "Un clásico indispensable. Fácil de enseñar a novatos en 15 minutos y genera partidas muy entretenidas.",
      fecha: "2026-08-25T17:40:00.000Z"
    },
    {
      autor: "ElTíoDelPan",
      calificacion: 4,
      comentario: "Excelente edición de Devir Chile con materiales de madera de muy buen acabado. Llegó en perfecto estado.",
      fecha: "2026-09-03T14:30:00.000Z"
    }
  ],

  "JM002": [
    {
      autor: "Zkylar",
      calificacion: 5,
      comentario: "Reglas súper directas pero con mucha estrategia al posicionar meeples y cerrar monasterios o ciudades. Ideal para jugar en pareja.",
      fecha: "2026-08-15T20:15:00.000Z"
    },
    {
      autor: "Rin",
      calificacion: 4,
      comentario: "Partidas ágiles y dinámicas. Gran puerta de entrada al hobby de los juegos de mesa modernos.",
      fecha: "2026-09-04T18:00:00.000Z"
    }
  ],

  "AC001": [
    {
      autor: "Vortax",
      calificacion: 5,
      comentario: "La textura en gatillos y la cruz direccional híbrida son lo mejor que ha hecho Xbox. Se empareja en 2 segundos en PC por Bluetooth.",
      fecha: "2026-08-11T16:00:00.000Z"
    },
    {
      autor: "DonComedia",
      calificacion: 4,
      comentario: "Comodísimo para jugar títulos de Game Pass en computador. Respuesta táctil precisa y botones bien firmes.",
      fecha: "2026-08-26T22:30:00.000Z"
    },
    {
      autor: "Zephyrus",
      calificacion: 3,
      comentario: "El mando es ergonómico y preciso, aunque por el precio preferiría que viniera con batería de litio en vez de pilas tradicionales.",
      fecha: "2026-09-06T13:45:00.000Z"
    }
  ],

  "CO001": [
    {
      autor: "Kurogane",
      calificacion: 5,
      comentario: "La respuesta háptica del DualSense y los gatillos adaptativos llevan la inmersión a otro nivel. Tiempos de carga casi instantáneos.",
      fecha: "2026-08-08T20:00:00.000Z"
    },
    {
      autor: "Nyxor",
      calificacion: 5,
      comentario: "Llegó súper rápido a Viña del Mar, con sello intacto y embalaje muy seguro. Gran atención de la tienda.",
      fecha: "2026-08-24T18:10:00.000Z"
    },
    {
      autor: "Yoshi",
      calificacion: 4,
      comentario: "Gráficos espectaculares a 60 FPS estables. La consola es bastante grande pero muy silenciosa.",
      fecha: "2026-09-09T21:40:00.000Z"
    }
  ],

  "SG001": [
    {
      autor: "Aethel",
      calificacion: 5,
      comentario: "Trabajo programando y en la noche juego: se acabaron los dolores lumbares. El soporte ajustable integrado y los apoyabrazos 4D valen cada peso.",
      fecha: "2026-08-04T15:30:00.000Z"
    },
    {
      autor: "Fernando Zapata (SSSR)",
      calificacion: 4,
      comentario: "Materiales premium que se sienten resistentes al paso del tiempo. Fácil de armar con las instrucciones y herramientas incluidas.",
      fecha: "2026-08-19T17:50:00.000Z"
    },
    {
      autor: "Zev",
      calificacion: 4,
      comentario: "La almohadilla magnética para el cuello es lo más cómodo que hay. Firme y con postura ergonómica real.",
      fecha: "2026-09-02T12:00:00.000Z"
    }
  ],

  "MP001": [
    {
      autor: "ManzanaVeloz",
      calificacion: 4,
      comentario: "Cubre perfectamente todo el espacio del teclado y el mouse. La superficie microtexturizada permite un deslizamiento fluido y controlado.",
      fecha: "2026-08-16T14:20:00.000Z"
    },
    {
      autor: "Kuro",
      calificacion: 5,
      comentario: "La tira RGB en el contorno ilumina hermoso el setup nocturno. La base de goma antideslizante se adhiere firme al escritorio.",
      fecha: "2026-08-29T19:30:00.000Z"
    },
    {
      autor: "FrijolMágico",
      calificacion: 4,
      comentario: "Costuras de buena calidad y cable mallado flexible que no molesta. Muy satisfecho con el mousepad.",
      fecha: "2026-09-06T18:15:00.000Z"
    }
  ],

  "PP001": [
    {
      autor: "Tooru",
      calificacion: 5,
      comentario: "El estampado con mi gamertag personalizado quedó con excelente definición. Algodón suave y fresco para jugar en verano.",
      fecha: "2026-08-18T16:40:00.000Z"
    },
    {
      autor: "Sora",
      calificacion: 4,
      comentario: "Buen corte y la talla corresponde a las medidas indicadas. No se destiñó ni achicó tras el primer lavado.",
      fecha: "2026-09-03T20:50:00.000Z"
    }
  ],


  "PG001": [
    {
      autor: "Zev",
      calificacion: 5,
      comentario: "Muy abrigado con forro afelpado por dentro. El estampado con el logo y gamer tag quedó de primera calidad.",
      fecha: "2026-08-13T17:15:00.000Z"
    },
    {
      autor: "Zkylar",
      calificacion: 4,
      comentario: "Ideal para sesiones de juego en invierno. El gorro es lo suficientemente amplio para usarlo con los audífonos puestos.",
      fecha: "2026-08-27T19:00:00.000Z"
    }
  ],


  "ST001": [
    {
      autor: "Kurogane",
      calificacion: 5,
      comentario: "Le bajaron casi 15 grados al procesador y gráfica con el cambio de pasta térmica y limpieza de ventiladores. Trabajo muy profesional.",
      fecha: "2026-08-17T13:10:00.000Z"
    },
    {
      autor: "ElTíoDelPan",
      calificacion: 5,
      comentario: "Coordiné todo rápido por WhatsApp. Me enviaron fotos del antes y después del mantenimiento. Quedó silencioso como nuevo.",
      fecha: "2026-08-31T15:45:00.000Z"
    },
    {
      autor: "Vortax",
      calificacion: 4,
      comentario: "Puntualidad en el servicio y buen trato. Diagnóstico claro de los componentes que requerían cambio de almohadillas térmicas.",
      fecha: "2026-09-07T17:30:00.000Z"
    }
  ],


  "ST002": [
    {
      autor: "Fernando Zapata (SSSR)",
      calificacion: 5,
      comentario: "Me asesoraron en la compatibilidad de piezas según mi presupuesto. Llegó listo para enchufar, con BIOS actualizada y benchmarks de rendimiento.",
      fecha: "2026-08-09T18:00:00.000Z"
    },
    {
      autor: "Nyxor",
      calificacion: 5,
      comentario: "Excelente servicio para quienes no nos atrevemos a armar el equipo por cuenta propia. Cableado invisible y garantía respaldada.",
      fecha: "2026-08-23T20:25:00.000Z"
    },
    {
      autor: "ManzanaVeloz",
      calificacion: 4,
      comentario: "Muy buen servicio técnico. Entregan todas las cajas y tornillos sobrantes de los componentes comprados. 100% confiables.",
      fecha: "2026-09-04T16:10:00.000Z"
    }
  ]
};

function lugInitReviews() {
  let guardadas = {};
  try {
    guardadas = JSON.parse(localStorage.getItem(LUG_KEYS.REVIEWS)) || {};
  } catch (e) {
    guardadas = {};
  }

  let modificado = false;
  // Asegurar que cada producto cuente con sus reseñas y nicknames actualizados
  for (const codigo in LUG_REVIEWS_BASE) {
    const baseList = LUG_REVIEWS_BASE[codigo];
    const storedList = guardadas[codigo] || [];

    // Si no existen o si aún tienen los autores antiguos (ej: Matias_FPS), sincronizar con LUG_REVIEWS_BASE
    const tieneNicknamesActuales = storedList.length > 0 && storedList.some(r => r.autor === baseList[0].autor);

    if (!tieneNicknamesActuales) {
      // Conservar opiniones añadidas por el usuario en tiempo real
      const agregadasPorUsuario = storedList.filter(r => 
        !baseList.some(b => b.comentario === r.comentario)
      );
      guardadas[codigo] = [...agregadasPorUsuario, ...baseList];
      modificado = true;
    }
  }

  if (modificado) {
    localStorage.setItem(LUG_KEYS.REVIEWS, JSON.stringify(guardadas));
  }
  return guardadas;
}

function lugGetReviews(codigo) {
  const todas = lugInitReviews();
  return todas[codigo] || [];
}

function lugAgregarReview(codigo, { autor, calificacion, comentario }) {
  if (!autor || !comentario || !calificacion) {
    return { ok: false, error: "Completa tu nombre o gamertag, calificación y comentario." };
  }
  const todas = lugInitReviews();
  if (!todas[codigo]) todas[codigo] = [];
  todas[codigo].unshift({
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
    return producto && producto.rating ? producto.rating : 4.5;
  }
  const suma = reviews.reduce((acc, r) => acc + r.calificacion, 0);
  return Number((suma / reviews.length).toFixed(1));
}

function lugRenderEstrellas(promedio) {
  const llenas = Math.round(promedio);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= llenas ? "★" : "☆";
  }
  return html;
}
