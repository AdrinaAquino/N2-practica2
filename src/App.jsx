import React from 'react'
import ListaFotos from './components/ListaFotos'
import BarraBusqueda from './components/BarraBusqueda'


export default function App() {
  return (
    <div>
      <h1 className='text-center'>SnapShot</h1>
      <BarraBusqueda/>
      <ListaFotos/>
      
    </div>
  )
}
