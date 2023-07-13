import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import './forgotPassword.css';
import { FaLock } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const auth = getAuth();

    const triggerResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success(`📧 Email has been sent successfully`)
            console.log("Password reset email sent");
            setEmail('');
        } catch (error) {
            toast.error(`${error.message}`);
            console.error(`An error occurred in triggerResetEmail: ${error.message}`);
        }
    }

    return (
        <>
            <section className="mainDiv">

                <div className="card text-center">
                    <p className="lock-icon"><FaLock /></p>
                    <h2 className='heading'>Forgot Password?</h2>
                    <p className='info'>You can reset your Password here</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input className="emailInput text-center  focus:border-green-400  placeholder-gray-300 transition-transform duration-150 focus:placeholder-gray-900"
                            placeholder='Enter your email address'
                            required
                            type="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        {/* <button>Send My Password</button> */}
                        <button className={` resetBtn inline-block  rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-[35px] w-[90%] `}

                            onClick={triggerResetEmail}

                        >Reset password</button>
                    </form>
                </div>
            </section>

        </>
    )
}
export default ForgotPassword