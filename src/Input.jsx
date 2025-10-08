import { useState } from 'react';

function Input() {
  const [nombre, setNombre] = useState(''); 
  
const manejarCambio = (e) => {
    setNombre(e.target.value); 
  };

  return (
    <div id="tarjeta">
      <h5>useState con evento onChange</h5>
        <h2>Ingrese su nombre y apellido</h2>
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        placeholder="Escribe tu nombre"
      />
      <p>¡Hola, {nombre || 'Anónimo'}!</p>
    </div>
  );
} export default Input;