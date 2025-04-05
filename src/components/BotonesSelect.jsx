import React from 'react'

export default function BotonesSelect({ handClick }) {
    return (
        <nav>
            <div className='text-white text-center mx-5 flex flex-col'>
                <button className='border bg-blue-950 mb-3 cursor-pointer' value="Mountain" onClick={handClick}>Mountain</button>
                <button className='border bg-blue-950 mb-3 cursor-pointer' value="Beaches" onClick={handClick}>Beaches</button>
                <button className='border bg-blue-950 mb-3 cursor-pointer' value="Birds" onClick={handClick}>Birds</button>
                <button className='border bg-blue-950 mb-3 cursor-pointer' value="Food" onClick={handClick}>Food</button>
            </div>
        </nav>
    )
}
