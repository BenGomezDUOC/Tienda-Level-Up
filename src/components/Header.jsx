/**
 * Header reutilizable de Level-Up Gamer.
 * Proviene del <header> común adaptado para React.
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">
            LEVEL-UP <span className="logo-accent">GAMER</span>
          </span>
        </div>
        <p>Equípate con lo mejor del gaming en Chile · DSY1104</p>
      </div>
    </header>
  );
}
