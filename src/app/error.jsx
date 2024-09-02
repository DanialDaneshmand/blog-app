"use client"

import React from 'react'

function Error({error,reset}) {
    return (
        <div className='flex justify-center'>
            <div className=' max-w-screen-lg py-32 flex justify-center items-center'>
            <div>
                <p className='text-xl text-red-500'>{error.message}</p>
                <button className=' text-slate-400'>تلاش مجدد</button>
            </div>
        </div>
        </div>
    )
}

export default Error
