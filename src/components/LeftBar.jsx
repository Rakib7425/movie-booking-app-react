import React from 'react'
import { Link } from 'react-router-dom'

const LeftBar = () => {
    return (
        <>
            <div className="leftbar w-[10vw] min-h-full border-2 border-red-400 mr-2">
                <h2 className='text-center text-2xl'>Genres</h2>
                <hr />
                <ul className='text-left text-[1.2rem] mx-4'>
                    <li>
                        <Link >Home</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftBar