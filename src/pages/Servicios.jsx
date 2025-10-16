import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <div>
        <h1>Servicios</h1>
        <hr />
        <p>You are a contracted worker for the Company. 
          Your job is to collect scrap from abandoned, industrialized moons to meet the Company's profit quota. 
          You can use the cash you earn to travel to new moons with higher risks and rewards--or you can buy fancy suits and decorations for your ship. 
          Experience nature, scanning any creature you find to add them to your bestiary. 
          Explore the wondrous outdoors and rummage through their derelict, steel and concrete underbellies. 
          Just never miss the quota.</p>
        <Link to="/"><button>Volver al Inicio</button></Link>

    </div>
  )
}

export default Servicios