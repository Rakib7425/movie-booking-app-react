import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/firebase/auth';
// import '../pu'
export default function PageNotFound() {
    const { authUser } = useAuth();
    const navigate = useNavigate();

    return (
        <section>
            <div className='flex flex-col items-center justify-center max-h-[78vh] '>
                <img className={'mt-5 max-h-[500px]'} src="/404.svg" alt="404" />
                <h1 h1 className='text-3xl'>Page not found</h1>
                <Link to={authUser ? navigate(-1) : '/login'}> <button >Goooo Back! </button> </Link>
            </div>

        </section>
    );
}