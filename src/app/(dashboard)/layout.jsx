import React from 'react'

function Layout({children}) {
    return (
        <>
            <p>header</p>
            {children}
        </>
    )
}

export default Layout
