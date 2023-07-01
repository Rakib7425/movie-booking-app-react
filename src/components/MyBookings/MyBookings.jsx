import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/firebase/auth'

// eslint-disable-next-line
import { getDoc, where, query, deleteDoc, updateDoc, doc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../contexts/firebase/firebase';
import MovieCardMyBookings from './MovieCardMyBookings';
import { NavLink } from 'react-router-dom';
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
    }
    useEffect(() => {
        // console.log(authUser.userId);

        if (authUser) {
            fetchBookings(authUser.userId);
        }

        // eslint-disable-next-line
    }, []);
    console.log(fetchedData);
    const navLinksStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'yellow' : '',
        }
    }
    return (
        <>
            <div className=' text-center text-2xl'>
                <div className='flex justify-center items-center gap-20 '>
                    <NavLink style={navLinksStyles} className='text-white '>MyBookings- (Watchlist)</NavLink>

                    <NavLink style={navLinksStyles} to={'watched-movies'} className='text-white '>Watched Movies</NavLink>
                </div>
            </div>
            <h1 className='text-3xl text-red-700'>Working on This Page</h1>
            <section className='flex flex-wrap justify-between items-center gap-2'>

                {
                    Array.isArray(fetchedData) &&
                    fetchedData.map((item, index) => {
                        return (
                            <div className='' key={index}>
                                {/* <h1>{item.title}</h1> */}
                                <MovieCardMyBookings title={item.title} vote_average={item.vote_average} overview={item.overview} original_language={item.original_language} poster_path={item.poster_path} id={item.id} />

                            </div>
                        );
                    })

                }
            </section>

        </>
    )
}

export default MyBookings