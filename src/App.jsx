import React from 'react'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/DetalleProductos'
//import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom'
import CarritoCompras from './Tienda'
import EcommerceTotal from './EcommerceTotal'

function App() {
  return (
    <div>
     
     <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        
      </Routes>
      <EcommerceTotal/>

      
      
    </div>
  )
}

export default App