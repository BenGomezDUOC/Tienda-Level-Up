/**
 * Página Admin adaptada a Tutorial 01B.
 * La protección de ruta y lectura de sesión se agregan en Versión 03.
 */
export default function Admin() {
  return (
    <section className="panel">
      <h2>Panel Administrador — Level-Up Gamer</h2>
      <p>
        Por ahora esta página es visible sin autenticación para comprender el
        flujo de estado de la aplicación.
      </p>

      <div className="admin-grid">
        <article className="kpi">
          <strong>13</strong>
          <span>Productos en Catálogo</span>
        </article>

        <article className="kpi">
          <strong>1</strong>
          <span>Administrador Activo</span>
        </article>

        <article className="kpi">
          <strong>0</strong>
          <span>Pedidos Pendientes</span>
        </article>
      </div>
    </section>
  );
}
