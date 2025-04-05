import React from 'react'

export default function BarraBusqueda() {
  return (
      <form action="" className='flex justify-center  p-0 m-4' >
        <input type="text" name='search' placeholder='Search...' className=' w-70 border-3 border-gray-300 border-r-0 rounded-l-md ' />
        <button type='submit' className="border-3 border-gray-300 rounded-r-md">
          <svg height="32" width="32">
            <path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#000000" fillRule="evenodd"></path>
          </svg>
        </button>
      </form>
  )
}
