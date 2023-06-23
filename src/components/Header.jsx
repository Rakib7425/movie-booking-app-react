import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SearchMovie from './SearchMovie'




const Header = () => {
    const [inputData, setInputData] = useState('')
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const url = `https://api.themoviedb.org/3/search/movie?query=${inputData}&api_key=c43eafb6cfde3357615b65d291332480&page=${page}`

    // const url = `https://api.themoviedb.org/3/search/movie?query=xx&api_key=c43eafb6cfde3357615b65d291332480&page=2`

    useEffect(() => {
        fetchMovie();
        // eslint-disable-next-line
    }, [page])

    const fetchMovie = async () => {
        try {
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
            console.log(result);
            // console.log(result.results);
            // console.log(result.page);
        } catch (error) {
            console.error('Error from getData in Header input', error);
        }

    };

    console.log(data.total_results);
    return (
        <>
            <header className='flex justify-between items-center my-4'>
                <div className="logo">
                    <Link to={'/'}>
                        <h1 className='text-xl hover:text-gray-300' >My-Movie-App</h1>
                    </Link>
                </div>
                <div className="relative flex flex-wrap items-stretch ">
                    <input
                        type="text"
                        className="relative m-0 -mr-0.5 block w-[250px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                        placeholder="Search Movie..."
                        aria-label="Search"
                        aria-describedby="Search"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        onMouseLeave={fetchMovie}
                        onKeyUp={(e) => e.key === 'Enter' ? fetchMovie() : ''}

                    />
                    <button
                        className="z-[2] inline-block rounded-r bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"

                        type="button"
                        id="Search"
                        onClick={fetchMovie} >
                        Search
                    </button>
                    <Link to="/login"
                        className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"

                        type="button"
                        id="sign-btn">
                        login
                    </Link>
                </div>
            </header >

            <div className={`${data.total_results > 0 && inputData.length > 0 ? '' : 'hidden'}`} >

                {
                    Array.isArray(data.results) &&
                    <SearchMovie data={data} page={page} setPage={setPage} inputData={inputData} />

                }
            </div >


        </>
    )
}

export default Header