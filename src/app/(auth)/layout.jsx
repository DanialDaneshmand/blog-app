import React from 'react'

function Layout({children}) {
    return (
        <div className='flex justify-center items-center'>
            <div className=' w-full flex justify-center  p-8'>
                {children}
            </div>
        </div>
    )
}

export default Layout
