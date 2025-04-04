import React from 'react'
import Fotos from './components/Fotos'

export default function App() {
  return (
    <div>
      <h1 className='text-center text-6xl mt-14 mb-10'>SnapShot</h1>
      <form action="" className='flex justify-center  p-0 m-4' >
        <input type="text" name='search' placeholder='Search...' className=' w-70 border-3 border-gray-300 border-r-0 rounded-l-md ' />
        <button type='submit' className="border-3 border-gray-300 rounded-r-md">
          <svg height="32" width="32">
            <path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#000000" fillRule="evenodd"></path>
          </svg>
        </button>
      </form>
      <nav>
        <ul className='text-white text-center mx-5 '>
          <li className='border bg-blue-950 mb-3'>Mountain</li>
          <li className='border bg-blue-950 mb-3'>Beaches</li>
          <li className='border bg-blue-950 mb-3'>Birds</li>
          <li className='border bg-blue-950 mb-3'>Food</li>
        </ul>
      </nav>
      <div className=''>
        <h2 className='text-center text-3xl'>MUNDOS Images</h2>
        <div className='flex justify-center bg-red-300'>
          <Fotos/>
        </div>
      </div>
    </div>
  )
}
