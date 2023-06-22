import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../contexts/firebase/firebase'

const Signup = () => {
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const fullName = `${fName} ${lName}`
    // console.log(fullName);
    console.log(cPassword);

    const signuphandler = () => {
        if (email.length < 5 || !fullName || password === cPassword) return;
    }
    return (
        <section className="h-full">
            <div className="container px-6 pt-20">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    {/* <!-- Left column container with background--> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone" />
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={(e) => e.preventDefault()}>

                            {/* <!-- Name input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <div className='flex gap-2 '>
                                    <div>
                                        <label className=''
                                            htmlFor="fname"
                                        >First Name
                                        </label>
                                        <input
                                            className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"

                                            type="text"
                                            id="fName"
                                            placeholder="First Name"
                                            required
                                            minLength={2}
                                            value={fName}
                                            onChange={(e) => setfName(e.target.value)} />
                                    </div>
                                    <div>
                                        <label className=''
                                            htmlFor="lName"
                                        >Last Name
                                        </label>
                                        <input
                                            className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"

                                            type="text"
                                            id="lname"
                                            placeholder="Last Name"

                                            required
                                            minLength={2}
                                            value={lName}
                                            onChange={(e) => setlName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Email input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label className=''
                                    htmlFor="email"
                                >Email Address
                                </label>
                                <input
                                    type="email"
                                    className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"
                                    id="email"
                                    placeholder="Email address"
                                    required
                                    minLength={2}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <div className='flex gap-2 '>
                                    <div>
                                        <label className=''
                                            htmlFor="password"
                                        >Password
                                        </label>
                                        <input
                                            className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            minLength={8}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className=''
                                            htmlFor="cPassword"
                                        >Confirm Password
                                        </label>
                                        <input
                                            className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"

                                            type="password"
                                            id="cPassword"
                                            placeholder="Confirm Password"
                                            minLength={8}
                                            required
                                            value={cPassword}
                                            onChange={(e) => setCPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {
                                cPassword === password || cPassword.length < 1 ? "" : <span className='text-red-600 text-center pb-2'>Confirm Password not matched!</span>
                            }

                            <div className="create-account mb-4">
                                <span >Already have account ? <Link to={'.././login'} className='underline text-blue transition duration-150 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-700 mx-2'>Login Here</Link></span>
                            </div>
                            {/* <!-- Submit button --> */}
                            <button

                                className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                onClick={signuphandler}
                            >
                                Sign up
                            </button>

                            {/* <!-- Divider --> */}
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>

                            {/* <!-- Social login buttons --> */}
                            <Link
                                to={'/githubLogin'}
                                className="flex items-center justify-center px-4 py-3 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-700 focus:outline-none bg-white my-3"
                            >
                                <span>
                                    <svg
                                        className="w-5 h-5 text-gray-700 fill-current group-hover:text-white"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>

                            </Link>
                            <Link
                                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-500 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-500 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                                style={{ backgroundColor: "#55acee" }}

                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                {/* <!-- Twitter --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                                Continue with Twitter
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup