import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import SearchMovie from './SearchMovie'
import { useAuth } from '../contexts/firebase/auth'
import { FaRegCircleUser } from 'react-icons/fa6'
import { BiMoviePlay } from 'react-icons/bi'
import { BsCalendar2Check } from 'react-icons/bs'


const Header = () => {

  const [inputData, setInputData] = useState('');

  const { authUser, signOut, isLoading } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [authUser, isLoading])
  // console.log(authUser);

  const navLinksStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'yellow' : '',
      // fontWeight: isActive ? 'bold' : '',
    }
  }

  return (
    <>
      <header className='header flex justify-between items-center my-3 mx-auto flex-col xl:flex-row max-w-[95vw]'>
        <div className='mb-3 lg:mb-0'>
          <ul className="logo flex  items-center justify-center my-auto gap-3 ">
            <Link to={authUser ? '/' : '/login'}>
              <li className='text-xl hover:text-gray-300 font-semibold' >My-Movie-App </li>
            </Link>
            {/* <h1 className='text-xl ml-4 text-green-400 '> <NavLink to={authUser && '/user-profile'} style={navLinksStyles} > {authUser ? `Hello-  ${authUser?.Name} ` : <span className='text-red-500 no-underline' >Login to Access</span>}</NavLink> </h1> */}

            <li className="explore text-xl  text-green-500 hover:text-blue-400  ml-8"> <NavLink style={navLinksStyles} to={'/explore'} className={authUser ? 'flex items-center' : "hidden"}>

              {<BiMoviePlay className='mx-1' />} Explore Movies

            </NavLink></li>
            <li className="explore text-xl mx-3 text-green-500 hover:text-blue-400 flex items-center "><NavLink style={navLinksStyles} to={'user/bookings'} className={authUser ? 'flex items-center' : "hidden"}>

              {<BsCalendar2Check size={18} className='mx-1' />} My Bookings

            </NavLink></li>
            <li className='text-xl mx-3 text-green-400 '> <NavLink to={authUser && '/user-profile'} style={navLinksStyles} > {authUser ? <span className='flex items-center'> {<FaRegCircleUser className='mx-1' />} Profile</span> : <span className='text-red-500 ' >Login to Access</span>}</NavLink> </li>
          </ul>
        </div>
        <div className="relative flex flex-wrap items-stretch ">
          <input
            type="text"
            className="relative m-0 -mr-0.5 block w-[250px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search Movie..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          // onMouseLeave={fetchMovie}
          // onKeyUp={(e) => e.key === 'Enter' ? fetchMovie() : ''}

          />
          <Link
            className="z-[2] inline-block rounded-r bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"

            // to={'/search-movie'}
            type="button"
            id="Search"
            // onClick={fetchMovie}
            disabled>


            Search
          </Link>
          <div className={authUser ? 'hidden' : ""}>
            <Link to={'/login'}
              className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"

              type="button"
              id="sign-btn">
              Login
            </Link>
          </div>

          <div className={!authUser ? 'hidden' : ""}>
            <Link
              className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"
              type="button"
              id="sign-btn" onClick={signOut}>
              Logout
            </Link>
          </div>

        </div>
      </header >
      <hr className=' h-1' />
      {/* <div className={`${data.total_results > 0 && inputData.length > 0 ? '' : 'hidden'}`} >

            {
              Array.isArray(data.results) &&
              <SearchMovie inputData={inputData} />
              // <SearchMovie data={data} page={page} setPage={setPage} inputData={inputData} />

            }
          </div > */}
      {inputData ? < SearchMovie inputData={inputData} setInputData={setInputData} /> : ''}

    </>
  )
}

export default Header;

// export {inputData}



/**
 * import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import SearchMovie from './SearchMovie';
import { useAuth } from '../contexts/firebase/auth';

const Header = () => {
  const [inputData, setInputData] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { authUser, signOut, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [authUser, isLoading]);

  const navLinksStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'yellow' : '',
    };
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center my-4">
        <div className="logo flex">
          <Link to={authUser ? '/' : '/login'}>
            <h1 className="text-xl hover:text-gray-300">My-Movie-App</h1>
          </Link>
          <h1 className="text-xl ml-4 text-green-400">
            <NavLink to={authUser && '/user-profile'} style={navLinksStyles}>
              {authUser ? `Hello-  ${authUser.Name}` : <span className="text-red-500">Login to Access</span>}
            </NavLink>
          </h1>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            className="relative m-0 -mr-0.5 block w-[250px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search Movie..."
            aria-label="Search"
            aria-describedby="Search"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <Link
            className="z-[2] inline-block rounded-r bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"
            type="button"
            id="Search"
            disabled
          >
            Search
          </Link>
          <div className={authUser ? 'hidden' : ''}>
            <Link
              to="/login"
              className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"
              type="button"
              id="sign-btn"
            >
              Login
            </Link>
          </div>
          <div className={!authUser ? 'hidden' : ''}>
            <Link
              className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"
              type="button"
              id="sign-btn"
              onClick={signOut}
            >
              Logout
            </Link>
          </div>
          <button
            className="md:hidden ml-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                className={`${isMenuOpen ? 'hidden' : 'block'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isMenuOpen ? 'block' : 'hidden'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                style={navLinksStyles}
                to="/explore"
                className={authUser ? '' : 'hidden'}
                onClick={() => setMenuOpen(false)}
              >
                Explore Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navLinksStyles}
                to="user/bookings"
                className={authUser ? '' : 'hidden'}
                onClick={() => setMenuOpen(false)}
              >
                My Bookings
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {inputData ? <SearchMovie inputData={inputData} setInputData={setInputData} /> : ''}
    </>
  );
};

export default Header;

 */