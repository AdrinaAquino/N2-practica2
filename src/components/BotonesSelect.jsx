import React from 'react'

export default function BotonesSelect({ handClick }) {
    return (
        <nav>
            <div className='text-white text-center mx-5 flex flex-col md:flex-row md:justify-center'>
                <button className='rounded-md p-0.5 bg-[#051c33] mb-3 cursor-pointer md:w-25 sm:mx-2' value="Mountain" onClick={handClick}>Mountain</button>
                <button className='rounded-md p-0.5 bg-[#051c33] mb-3 cursor-pointer md:w-25 sm:mx-2' value="Beaches" onClick={handClick}>Beaches</button>
                <button className='rounded-md p-0.5 bg-[#051c33] mb-3 cursor-pointer md:w-25 sm:mx-2' value="Birds" onClick={handClick}>Birds</button>
                <button className='rounded-md p-0.5 bg-[#051c33] mb-3 cursor-pointer md:w-25 sm:mx-2' value="Food" onClick={handClick}>Food</button>
            </div>
        </nav>
    )
}
