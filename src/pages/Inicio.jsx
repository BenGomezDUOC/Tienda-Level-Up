/**
 * Página Inicio equivalente a index.html de Level-Up Gamer.
 * Migrado de HTML a JSX (Tutorial 01A).
 */
export default function Inicio() {
  return (
    <main className="main-container">
      <section className="hero">
        <span className="hero-eyebrow">🚀 BIENVENIDO A LEVEL-UP GAMER</span>
        <h2>EQUÍPATE CON LO MEJOR DEL GAMING EN CHILE</h2>
        <p>
          Desde consolas de última generación y PCs armados hasta juegos de mesa
          y accesorios de alta precisión. Despachos a todo el país con beneficios
          exclusivos para la comunidad gamer y estudiantil.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>20% OFF</strong>
            <span>Permanente con correo Duoc UC</span>
          </div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Despachos a todo Chile</span>
          </div>
          <div className="hero-stat">
            <strong>LevelUp PTS</strong>
            <span>Acumula y canjea premios</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2>Productos Destacados & Gamificación</h2>
        <p>
          En Level-Up Gamer premiamos tu lealtad: gana puntos por compras y
          referidos para ascender desde Novato hasta Leyenda LevelUp.
        </p>
        <div className="destacados-preview">
          <div className="destacado-mini">
            <span>🎮</span>
            <strong>Consolas & Accesorios</strong>
          </div>
          <div className="destacado-mini">
            <span>💻</span>
            <strong>Computadores Gamers</strong>
          </div>
          <div className="destacado-mini">
            <span>🎲</span>
            <strong>Juegos de Mesa</strong>
          </div>
          <div className="destacado-mini">
            <span>🪑</span>
            <strong>Sillas Gamers</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
