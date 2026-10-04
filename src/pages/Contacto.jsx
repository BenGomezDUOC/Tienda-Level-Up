/**
 * Página Contacto equivalente a contacto.html de Level-Up Gamer.
 * Migrado de HTML a JSX (Tutorial 01A).
 */
export default function Contacto() {
  return (
    <main className="main-container">
      <section className="form-card">
        <h2>Contacto y Soporte Gamer</h2>
        <p>¿Tienes dudas con un pedido o requieres servicio técnico para tu PC? Escríbenos.</p>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input id="nombre" type="text" placeholder="Ej: Alex Mercer" />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input id="correo" type="email" placeholder="ejemplo@correo.cl" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono / WhatsApp</label>
            <input id="telefono" type="tel" placeholder="+56 9 1234 5678" />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" rows="5" placeholder="¿En qué te podemos ayudar?"></textarea>
          </div>
          <button className="primary" type="button">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
