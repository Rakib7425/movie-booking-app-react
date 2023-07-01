import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/firebase/auth'

// eslint-disable-next-line
import { getDoc, where, query, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../contexts/firebase/firebase';
import MovieCardMyBookings from './MovieCardMyBookings';
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MyBookings = () => {
    const { authUser } = useAuth();
    const [fetchedData, setFetchedData] = useState([])

    const fetchBookings = async (userId) => {
        try {
            const qry = query(collection(db, 'movie-data'), where('owner', '==', userId));
            const querySnapshot = await getDocs(qry);
            let data = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, '=>', doc.data());
                if (!doc.data().watched) {
                    data.push({ ...doc.data(), id: doc.id })
                }
                // console.log(doc.data().watched);
            });

            setFetchedData(data);

        } catch (error) {
            console.error("Error From fetchBookings function.", error);
        }
    };

    var temp_render = 0;
    const deleteBooking = async (docId) => {
        try {
            await deleteDoc(doc(db, 'movie-data', docId));
            temp_render = temp_render + 1;
            fetchBookings(authUser.userId);
            console.log(`Sucessfully deleted`);
            toast.success(`Sucessfully deleted`);

        } catch (error) {
            console.error("Error From deleteBooking function.", error);
            toast.error(error);
        }
    };
    useEffect(() => {
        if (authUser) {
            fetchBookings(authUser.userId);
        }
        // eslint-disable-next-line
    }, [temp_render]); // TODO temp_render

    // console.log(fetchedData);

    // console.log('temp render', temp_render)


    const navLinksStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'yellow' : '',
        }
    };

    return (
        <>
            <ToastContainer />
            <div className=' text-center text-2xl'>
                <div className='flex justify-center items-center gap-20 bg-gray-700 pt-1 pb-2 '>
                    <NavLink style={navLinksStyles} className='text-white text-xl'>MyBookings- (Watchlist)</NavLink>

                    <NavLink style={navLinksStyles} to={'watched-movies'} className='text-white text-xl'>Watched Movies</NavLink>
                </div>
            </div>

            <h1 className='text-3xl text-yellow-300 my-4'>Your Booked Movies</h1>
            <section className='flex flex-wrap justify-evenly items-center gap-4'>

                {
                    Array.isArray(fetchedData) &&
                    fetchedData.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                {/* <h1>{item.title}</h1> */}
                                <MovieCardMyBookings title={item.title} vote_average={item.vote_average} overview={item.overview} original_language={item.original_language} poster_path={item.poster_path} id={item.id} />
                                <div className="buttons flex">
                                    <span
                                        data-tooltip-target="money"
                                        className="cursor-pointer mb-2 text-white transition-colors  hover:!opacity-100 group-hover:opacity-70"
                                    >
                                        <button className='bg-red-700 rounded-md py-2 px-3 border hover:border-pink-500 hover:bg-white hover:text-red-600'
                                            onClick={() => {
                                                deleteBooking(item.id);
                                            }}>Delete</button>
                                    </span>
                                    <span
                                        data-tooltip-target="money"
                                        className="cursor-pointer mb-2 text-yellow-500 transition-colors  hover:!opacity-100 group-hover:opacity-70"
                                    >
                                        <button className='bg-gray-700 rounded-md py-2 px-3 border hover:border-pink-500 hover:bg-white hover:text-black'>Watched</button>
                                    </span>
                                </div>

                            </div>
                        );
                    })

                }
            </section>

        </>
    )
}

export default MyBookings