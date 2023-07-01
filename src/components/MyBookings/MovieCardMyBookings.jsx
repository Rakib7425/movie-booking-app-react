import React from 'react'
import { deleteDoc, doc, } from 'firebase/firestore'
import { db } from '../../contexts/firebase/firebase';
let temp_render = 0;

const MovieCardMyBookings = ({ title, vote_average, overview, original_language, poster_path, id }) => {

    const deleteBooking = async (docId) => {
        try {
            temp_render += 1;
            await deleteDoc(doc(db, 'movie-data', docId))

        } catch (error) {
            console.error("Error From deleteBooking function.", error);
        }
    };

    return (
        <>

            {/* <h1>Hello {data[0].id}</h1> */}
            <div className="relative flex w-full max-w-[13.5rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg " title={title}>
                <div className="relative mx-2 mt-2 overflow-hidden rounded-xl bg-gray-500 bg-clip-border text-white shadow-lg shadow-blue-500/40">
                    <img
                        src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'}

                        alt={title}
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

                </div>
                <div className="px-2 pt-2">
                    <div className="mb-1 flex items-center justify-between">
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
                    {/* <p className="block font-sans text-base leading-relaxed text-black  antialiased ">
                        {`${overview.slice(0, 45)}....`}
                    </p> */}
                    <div className="flex justify-between gap-3 mt-2">

                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer mb-2 text-white transition-colors  hover:!opacity-100 group-hover:opacity-70"
                        >
                            <button className='bg-red-700 rounded-md py-2 px-3 border hover:border-pink-500 hover:bg-white hover:text-red-600' onClick={() => deleteBooking(id)}>Delete</button>
                        </span>
                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer mb-2 text-yellow-500 transition-colors  hover:!opacity-100 group-hover:opacity-70"
                        >
                            <button className='bg-gray-700 rounded-md py-2 px-3 border hover:border-pink-500 hover:bg-white hover:text-black'>Watched</button>
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MovieCardMyBookings;
export { temp_render };