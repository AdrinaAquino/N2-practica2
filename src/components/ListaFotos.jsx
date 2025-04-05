import React, { useEffect, useState } from 'react'
import BotonesSelect from './BotonesSelect'
import NombreBusqueda from './NombreBusqueda'

export default function ListaFotos() {
  const [searchValue, setSearchValue] = useState("gato")
  const [fotos, setFotos] = useState([])

  async function obtenerFotos() {
    let rs = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchValue}&format=json&nojsoncallback=1`)
    const data = await rs.json()
    console.log(searchValue)
    setFotos(data.photos.photo)
  }
  useEffect(() => {
    obtenerFotos();
  }, [searchValue])

  const handClick = (e) => setSearchValue(e.target.value)
  return (
    <>
      <BotonesSelect
        handClick={handClick}
      />
      <div>
        <NombreBusqueda
          searchValue={searchValue}
        />
        <div className='flex justify-center bg-red-300'>
          <div className='w-3/4 grid grid-cols-2 md:grid-cols-4 place-items-center'>
            {fotos.map((foto) => {
              const { farm, server, id, secret } = foto
              return (
                <div className='bg-amber-300 w-9/10 h-70 mt-5 overflow-hidden rounded-md' key={id}>
                  <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt="imagen" className='w-full h-full object-cover' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
