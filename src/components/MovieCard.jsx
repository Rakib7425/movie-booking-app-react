import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ data, page, setPage, title, vote_average, overview, original_language, poster_path, id }) => {
    // data = data.results;
    // console.log('From Card', data.results);
    return (
        <>

            {/* <h1>Hello {data[0].id}</h1> */}
            <Link to={`/movie/${id}`} className="relative flex w-full max-w-[15rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg cursor-pointer">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'}

                        alt="MoviePhoto"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >

                    </button>
                </div>
                <div className="px-6 pt-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {`${title.slice(0, 10)}..`}
                        </h5>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            {vote_average}
                        </p>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased ">
                        {`${overview.slice(0, 45)}....`}
                    </p>
                    <div className="group inline-flex flex-wrap items-center gap-3">
                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer mb-2 text-pink-500 transition-colors hover:border-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            Language: <span className='uppercase'>{original_language}</span>
                        </span>
                    </div>
                    {/* <div className="group inline-flex flex-wrap items-center gap-3">
                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer pl-2 mb-2 text-pink-500 transition-colors hover:border-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            Price: {Math.floor(Math.random() * 100 + 200)}
                        </span>
                    </div> */}
                </div>
                {/* <div className="p-6 pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Book Now
                    </button>
                </div> */}
            </Link>
        </>
    )
}

export default MovieCard