/**
 * Navbar reutilizable de Level-Up Gamer.
 * Por ahora los enlaces no realizan navegación React (intencional en Tutorial 01A).
 */
export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
        <a href="#">Login</a>
        <a href="#">Admin</a>
      </div>
    </nav>
  );
}
