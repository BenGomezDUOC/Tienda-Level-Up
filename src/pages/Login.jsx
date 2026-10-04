/**
 * Página Login adaptada a Tutorial 01B.
 * En esta etapa migramos el formulario a JSX sin Router.
 */
export default function Login() {
  return (
    <section className="form-card">
      <h2>Login Administrador</h2>
      <p>
        En esta etapa migramos el formulario a JSX interactivo. La
        autenticación se incorpora en Versión 03.
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="usuario">Usuario o Correo</label>
          <input
            id="usuario"
            type="text"
            placeholder="admin o admin@levelupgamer.cl"
          />
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
  );
}
