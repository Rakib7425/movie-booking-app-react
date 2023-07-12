import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const auth = getAuth();

    const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }

    return (
        <>
            <section>ForgotPassword
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <label htmlFor="email">Your Registered Email </label>
                    <input type="email" id='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <button className={`inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}

                        onClick={triggerResetEmail}

                    >Reset password</button>

                </form>
            </section>
        </>
    )
}
export default ForgotPassword