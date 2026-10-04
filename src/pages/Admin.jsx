/**
 * Página Admin equivalente a las vistas administrativas de Level-Up Gamer.
 * En Tutorial 01A el acceso aún no está protegido.
 */
export default function Admin() {
  return (
    <main className="main-container">
      <section className="panel">
        <h2>Panel Administrador — Level-Up Gamer</h2>
        <p>
          En esta primera versión el acceso todavía no está protegido (Tutorial 01A).
        </p>
        <div className="admin-grid">
          <article className="kpi">
            <strong>13</strong>
            <span>Productos Activos</span>
          </article>
          <article className="kpi">
            <strong>1</strong>
            <span>Administrador</span>
          </article>
          <article className="kpi">
            <strong>0</strong>
            <span>Pedidos Pendientes</span>
          </article>
        </div>
      </section>
    </main>
  );
}
