


export default function ListaFotos({farm, server, id, secret}) {

  return (
    <div className=' w-9/10 h-70 mt-5 overflow-hidden rounded-md' key={id}>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt="imagen" className='w-full h-full object-cover' />
    </div>
  )
}

