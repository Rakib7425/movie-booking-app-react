// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiOutlineAlipay } from "react-icons/ai";
import { getMovieDetails } from '../../api/movies';
import { useEffect, useState } from 'react';


import { useAuth } from '../../contexts/firebase/auth'
import { db } from '../../contexts/firebase/firebase'

// eslint-disable-next-line
import { collection, addDoc, getDoc, where, query, deleteDoc, updateDoc, doc } from 'firebase/firestore'

const BookingPage = () => {

    const [movieData, setMovieData] = useState([]);

    const params = useParams();
    const movieId = params.movieId;
    const price = params.price;
    const { authUser } = useAuth();
    const navigate = useNavigate();


    // console.log(authUser.userId);

    const fetchMovieDetails = () => {
        getMovieDetails(movieId)
            .then((res) => {
                if (!res) return;
                setMovieData(res);
            });
    };

    useEffect(() => {
        fetchMovieDetails()

        // eslint-disable-next-line
    }, [])

    console.log(movieData);

    const bookingHandler = async () => {
        try {
            const docRef = await addDoc(collection(db, 'movie-data'), {
                email: authUser.Email,
                movieId: movieData.id,
                original_language: movieData.original_language,
                overview: movieData.overview,
                owner: authUser.userId,
                ownerName: authUser.Name,
                poster_path: movieData.poster_path,
                price: price,
                title: movieData.title,
                vote_average: movieData.vote_average,
                watched: false,
            })

            toast.success(`${movieData.title} - Successfully Booked .`, { icon: "🚀" })
            // console.log(docRef.id);

            if (docRef) {
                navigate('/user/bookings')
            }
        } catch (error) {
            console.error("Error from bookingHandler fn: ", error);
        }
    }


    return (
        <>
            {/* <div className='text-2xl mx-auto'>Payment-Page</div>
            <div className="text-red-400">{movieId}</div>
            <div className="text-red-400">{price}</div> */}

            <ToastContainer theme="dark" />
            <section className="h-full">
                <div className="container">
                    {/* <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">*/}

                    {/* <!-- Right column container with form --> */}
                    <div className=" flex  px-5 pb-4 pt-14 flex-wrap">
                        <div className="mb-12 max-w-[40%] md:mb-10 md:w-8/12 lg:w-6/12 text-left top-0">
                            {/* <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone" /> */}
                            <div className="w-full ">
                                <h1 className='text-3xl text-yellow-300 mb-6'>Product Deatails</h1>
                                <h1 className='text-xl'>Product Id: {movieId} </h1>
                                <h1 className='text-2xl '>Product Name: <span className='font-bold'>{movieData.original_title}</span> </h1>
                                <h1 className='text-xl'>Original Language : <span className='uppercase'>{movieData.original_language}</span> </h1>
                                <h1 className='text-xl'>Release Date : {movieData.release_date} </h1>
                                <h1 className='text-xl'>Price: {price} </h1>
                                <h1 className='text-xl'>Average Vote: {movieData.vote_average} </h1>
                                <h1 className='text-3xl text-red-700'>Working on This Page</h1>

                                {/* Temp Feild */}
                                <div>
                                    <button className="flex mt-20 items-center justify-center  w-full max-w-xs mx-auto active:bg-pink-500 hover:bg-indigo-700 bg-pink-700 text-white rounded-lg px-2 py-2 font-semibold" onClick={bookingHandler}> <AiOutlineAlipay size={20} /> <span className="mx4">Book Now</span> <AiOutlineAlipay size={20} /></button>
                                </div>

                            </div>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-gray-400 shadow-lg p-5 text-black" style={{ maxWidth: "600px" }}>
                            <div className="w-full pt-1 pb-5">
                                <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                    <FaMoneyCheckDollar size={35} />
                                </div>
                            </div>
                            <div className="mb-8">
                                <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                            </div>

                            <div className="mb-3 flex -mx-2">
                                <div className="px-2">
                                    <label htmlFor="type1" className="flex items-center ">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500 cursor-pointer" name="type" id="type1" defaultChecked />
                                        <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt='' />
                                    </label>
                                </div>
                                <div className="px-2">
                                    <label htmlFor="type2" className="flex items-center ">
                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500 cursor-pointer" name="type" id="type2" />
                                        <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt='' />
                                    </label>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                                <div>
                                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Rakib RsM (Ignore this Input)" type="text" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                                <div>
                                    <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000 (Ignore this Input)" type="text" />
                                </div>
                            </div>
                            <div className="mb-3 -mx-2 flex items-end">
                                <div className="px-2 w-1/2">
                                    <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                                    <div>
                                        <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                            <option value="01">01 - January</option>
                                            <option value="02">02 - February</option>
                                            <option value="03">03 - March</option>
                                            <option value="04">04 - April</option>
                                            <option value="05">05 - May</option>
                                            <option value="06">06 - June</option>
                                            <option value="07">07 - July</option>
                                            <option value="08">08 - August</option>
                                            <option value="09">09 - September</option>
                                            <option value="10">10 - October</option>
                                            <option value="11">11 - November</option>
                                            <option value="12">12 - December</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="px-2 w-1/2">
                                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                        <option value="2034">2034</option>
                                        <option value="2035">2035</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="font-bold text-sm mb-2 ml-1">Security code / CVV</label>
                                <div>
                                    <input className="w-36 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000 (Ignore this)" type="text" />
                                </div>
                            </div>
                            <div className=''>
                                <button className="flex items-center justify-center  w-full max-w-xs mx-auto active:bg-pink-500 hover:bg-indigo-700 bg-pink-700 text-white rounded-lg px-2 py-2 font-semibold" onClick={bookingHandler}> <AiOutlineAlipay size={20} /> <span className="mx4">PAY NOW</span> <AiOutlineAlipay size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section >
        </>
    )
}

export default BookingPage