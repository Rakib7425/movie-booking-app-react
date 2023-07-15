import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SubHeading = () => {
    const navigate = useNavigate();

    const navLinksStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'yellow' : '',
        }
    };
    const goToWatchedMovies = () => {
        navigate('/watched-movies',)
    }
    return (
        <div className=' text-center text-2xl'>
            <div className='flex justify-center items-center gap-20 bg-gray-700 pt-1 pb-2 '>
                <NavLink style={navLinksStyles} className='text-white text-lg'>MyBookings- (Watchlist)</NavLink>

                <NavLink style={navLinksStyles} to={'watched-movies'} onClick={goToWatchedMovies} className='text-white text-lg'>Watched Movies</NavLink>
            </div>
        </div>
    )
}

export default SubHeading