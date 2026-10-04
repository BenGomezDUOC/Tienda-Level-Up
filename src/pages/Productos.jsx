import { useMemo, useState } from "react";
import ProductoCard from "../components/ProductoCard.jsx";
import { productos } from "../data/productos.js";

/**
 * Página dinámica de Productos (Tutorial 01B).
 * Utiliza useState para el buscador, useMemo para optimizar el filtrado y map() para renderizar ProductoCard.
 */
export default function Productos() {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto),
    );
  }, [busqueda]);

  return (
    <>
      <section className="hero">
        <h2>Catálogo de Productos</h2>
        <p>
          El catálogo ahora se representa con componentes y props, consumiendo
          datos desde productos.js y con filtrado en tiempo real.
        </p>
      </section>

      <input
        className="buscador"
        type="search"
        placeholder="Buscar producto por nombre o categoría..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />

      <section className="grid-productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem", color: "var(--texto-tenue)" }}>
            No se encontraron productos que coincidan con "{busqueda}".
          </p>
        )}
      </section>
    </>
  );
}
