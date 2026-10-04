/**
 * Página Productos equivalente a productos.html de Level-Up Gamer.
 * En Tutorial 01A los productos se declaran directamente en JSX.
 */
export default function Productos() {
  return (
    <main className="main-container">
      <h2>Catálogo de Productos</h2>
      <p>Explora lo más vendido y recomendado por nuestra comunidad gamer.</p>

      <section className="productos">
        <article className="producto-card">
          <img
            src="/img/PC Gamer ASUS ROG Strix.jpg"
            alt="PC Gamer ASUS ROG Strix"
          />
          <div className="producto-body">
            <span className="categoria">Computadores</span>
            <h3>PC Gamer ASUS ROG Strix</h3>
            <p className="precio">$1.299.990</p>
          </div>
        </article>

        <article className="producto-card">
          <img
            src="/img/Auriculares Gamer HyperX Cloud II.jpg"
            alt="Auriculares Gamer HyperX Cloud II"
          />
          <div className="producto-body">
            <span className="categoria">Accesorios</span>
            <h3>Auriculares Gamer HyperX Cloud II</h3>
            <p className="precio">$79.990</p>
          </div>
        </article>

        <article className="producto-card">
          <img src="/img/PlayStation 5.jpg" alt="PlayStation 5" />
          <div className="producto-body">
            <span className="categoria">Consolas</span>
            <h3>PlayStation 5</h3>
            <p className="precio">$549.990</p>
          </div>
        </article>

        <article className="producto-card">
          <img src="/img/Catan.webp" alt="Catan" />
          <div className="producto-body">
            <span className="categoria">Juegos de Mesa</span>
            <h3>Catan</h3>
            <p className="precio">$29.990</p>
          </div>
        </article>

        <article className="producto-card">
          <img
            src="/img/Silla Gamer Secretlab Titan.jpg"
            alt="Silla Gamer Secretlab Titan"
          />
          <div className="producto-body">
            <span className="categoria">Sillas Gamers</span>
            <h3>Silla Gamer Secretlab Titan</h3>
            <p className="precio">$349.990</p>
          </div>
        </article>

        <article className="producto-card">
          <img
            src="/img/Mouse Gamer Logitech G502 HERO.jpg"
            alt="Mouse Gamer Logitech G502 HERO"
          />
          <div className="producto-body">
            <span className="categoria">Mouse</span>
            <h3>Mouse Gamer Logitech G502 HERO</h3>
            <p className="precio">$49.990</p>
          </div>
        </article>
      </section>
    </main>
  );
}
