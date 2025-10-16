import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]); // 🔹 Estado del carrito
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Cargar productos desde la API
  useEffect(() => {
    fetch("https://68d5b658e29051d1c0af60c9.mockapi.io/api/v1/Apilador")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  // 🔹 Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
   
  };

   const quitarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((p) => p.id !== id));
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <br />
            Descripción: {producto.descripcion}
            <br />
            Precio: ${producto.precio}
            <br />
            <img src={producto.avatar} alt={producto.nombre} width="25%" />
            <br />
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>{" "}
            {/* 🔹 Botón nuevo */}
            <Link to={`/productos/${producto.id}`} state={{ producto }}>
              <button>Más detalles</button>
            </Link>
          </li>
        ))}
      </ul>

      {/* 🔹 Vista simple del carrito */}
      {carrito.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>🛍️ Carrito de Compras</h3>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
                 <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <p>
            <strong>
              Total: ${carrito.reduce((acc, prod) => acc + Number(prod.precio), 0)}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}
