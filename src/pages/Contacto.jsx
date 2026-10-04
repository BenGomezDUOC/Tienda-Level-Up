/**
 * Página Contacto adaptada a Tutorial 01B.
 * La funcionalidad completa de validación se perfecciona en Versión 03.
 */
export default function Contacto() {
  return (
    <section className="form-card">
      <h2>Contacto y Asistencia Gamer</h2>
      <p>
        En esta etapa migramos la estructura sin Router. Luego agregaremos
        estado y validaciones.
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input id="nombre" type="text" placeholder="Tu nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input id="correo" type="email" placeholder="ejemplo@correo.cl" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows="5" placeholder="Escribe tu mensaje..."></textarea>
        </div>

        <button className="primary" type="button">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
