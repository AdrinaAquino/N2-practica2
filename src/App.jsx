import React from 'react'
import { useEffect, useState } from 'react'
import ListaFotos from './components/ListaFotos'
import BarraBusqueda from './components/BarraBusqueda'
import BotonesSelect from './components/BotonesSelect'
import NombreBusqueda from './components/NombreBusqueda'
export default function App() {
  const [searchValue, setSearchValue] = useState("Gato")
  const [fotos, setFotos] = useState([])

  async function obtenerFotos() {
    let rs = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchValue}&format=json&nojsoncallback=1`)
    const data = await rs.json()
    setFotos(data.photos.photo)
  }
  useEffect(() => {
    obtenerFotos();
  }, [searchValue])

  const handClick = (e) => setSearchValue(e.target.value)
  return (
    <>
      <h1 className='text-center mt-20'>SnapShot</h1>
      <BarraBusqueda
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handClick={handClick}
      />
      <BotonesSelect
        handClick={handClick}
      />
      <div>
        <NombreBusqueda
          searchValue={searchValue}
        />
        <div className='flex justify-center'>
          <div className='w-3/4 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
            {fotos.map((foto) => {
              const { farm, server, id, secret } = foto
              return (
                <ListaFotos
                  farm={farm}
                  server={server}
                  id={id}
                  secret={secret}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )

}
