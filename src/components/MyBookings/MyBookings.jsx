import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/firebase/auth'

// eslint-disable-next-line
import { getDoc, where, query, deleteDoc, updateDoc, doc, collection } from 'firebase/firestore'
import { db } from '../../contexts/firebase/firebase';

const MyBookings = () => {
    const { authUser } = useAuth();

    const fetchBookings = async (userId) => {
        try {
            const q = query(collection(db, 'movie-data'), where('owner', '==', userId));

            const querySnapshot = await getDoc(q);

            querySnapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                console.log(doc.data());
            });

        } catch (error) {
            console.error("Error From fetchBookings function.", error);
        }
    }
    useEffect(() => {
        console.log(authUser.userId);

        if (authUser) {
            fetchBookings(authUser.userId);
        }

        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div>MyBookings</div>
            <h1 className='text-3xl text-red-700'>Working on This Page</h1>
        </>
    )
}

export default MyBookings