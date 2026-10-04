import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";

/**
 * Tutorial 01A — Primera ejecución.
 * Muestra deliberadamente solo Inicio para validar la estructura de componentes.
 */
export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Inicio />
      <Footer />
    </>
  );
}
