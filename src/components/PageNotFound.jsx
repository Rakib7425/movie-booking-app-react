import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { useAuth } from '../contexts/firebase/auth';
// import '../pu'
export default function PageNotFound() {
    const { authUser } = useAuth();
    const navigate = useNavigate();

    return (
        <section>
            <div className='flex flex-col items-center justify-center max-h-[78vh] '>
                <img className={'max-h-[500px]'} src="/404.svg" alt="404" />
                <h1 className='text-3xl font-bold p-1'>Page not found</h1>
                <h4 className='text-lg p-1'>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</h4>

                <Link to={authUser ? navigate(-1) : '/login'} className=' z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1 p-2'> <button className='flex items-center justify-center'> <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5 mx-1" /> Goooo Back! </button> </Link>
            </div>

        </section>
    );
}