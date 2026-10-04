/**
 * Página Login equivalente a login.html de Level-Up Gamer.
 * Migrado de HTML a JSX (Tutorial 01A).
 */
export default function Login() {
  return (
    <main className="main-container">
      <section className="form-card">
        <h2>Iniciar Sesión — Administrador</h2>
        <p>Ingresa tus credenciales para acceder al panel de control de Level-Up Gamer.</p>
        <form>
          <div className="form-group">
            <label htmlFor="usuario">Usuario o Correo</label>
            <input id="usuario" type="text" placeholder="admin o admin@levelupgamer.cl" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>
          <button className="primary" type="button">
            Ingresar al Panel
          </button>
        </form>
      </section>
    </main>
  );
}
