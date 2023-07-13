import React, { useState } from 'react'
import { BsFillPersonLinesFill, BsKey } from 'react-icons/bs'
import { getAuth, updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential, updateEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/firebase/auth'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const auth = getAuth();
    const fetchedUser = auth.currentUser;
    const { authUser, setAuthUser } = useAuth();

    const navigate = useNavigate();
    if (!authUser || !auth.currentUser || !fetchedUser || !fetchedUser.displayName) {
        navigate('/')
    }

    let initialName = fetchedUser?.displayName ? fetchedUser?.displayName : '';
    let initialEmail = fetchedUser?.email ? fetchedUser?.email : '';

    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");



    // console.log(authUser);
    // console.log(fetchedUser);
    const updatePasswordHandler = () => {
        try {
            if (password === cPassword && password.length > 7 && email) {
                updatePassword(auth.currentUser, cPassword).then(() => {
                    console.log(`Password updated successfully`);
                }).catch((error) => {
                    toast.error(`An error occurred: ${error}!`)
                    console.error(`An error ocurred in updatePassword`, error);
                });;


                setPassword('');
                setCPassword('');
            }
        } catch (error) {
            console.error(error);
        }
    }
    const updateProfileHandler = () => {
        try {
            if (name && email) {
                let uProfile = false;
                let uEmail = false;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"

                }).then(() => {
                    uProfile = true;
                    console.log(`Name updated Successfully`);
                }).catch((error) => {
                    toast.error(`An error occurred: ${error}!`)
                    console.error(` An error occurred In updateProfile: ${error}`);
                });
                updateEmail(auth.currentUser, email).then(() => {
                    // Email updated!
                    uEmail = true;
                    console.log(`Email updated!`);
                }).catch((error) => {
                    // An error occurred
                    toast.error(`An error occurred: ${error}!`)
                    console.error(`An error occurred in updateEmail`, error);
                });

                if (uProfile && uEmail) {
                    if (authUser) {
                        setAuthUser({
                            userId: fetchedUser.uid,
                            Email: email,
                            Name: name,
                        })
                    }

                    let credential = EmailAuthProvider.credential(
                        fetchedUser.email,
                        cPassword
                    );
                    reauthenticateWithCredential(fetchedUser, credential).then(result => {
                        // User successfully reauthenticated. New ID tokens should be valid.
                        console.log('User successfully reauthenticated', result);
                    }).catch(err => {
                        console.log(err);
                    });

                    toast.success(`Profile updated successfully!`)
                    console.log(`Profile updated!`);
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <h1 className="text-2xl mt-4 text-yellow-400">
                Your Profile
            </h1>
            <>
                <section className="h-full">
                    <div className="container px-6 pt-20">
                        <div
                            className="g-6 flex h-full flex-wrap items-start justify-center lg:justify-between">
                            {/* <!-- Left column container with form --> */}
                            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 mb-6">
                                <form onSubmit={(e) => e.preventDefault()}>

                                    {/* <!-- User ID --> */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>

                                        <label className=''
                                            htmlFor="uId"
                                        >User ID
                                        </label>
                                        <input
                                            className="bg-gray-300 mt-2 appearance-none border-2 border-green-500 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"

                                            type="text"
                                            id="uId"
                                            placeholder="user Id"
                                            disabled
                                            defaultValue={fetchedUser?.uid}
                                        />
                                    </div>
                                    {/* <!-- Password input --> */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <div className=''>
                                            <div className='mb-6'>
                                                <label className=''
                                                    htmlFor="password"
                                                >New Password
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
                                        cPassword === password || cPassword.length < 1 ? <span className='opacity-0'></span> : <span className='text-red-600 text-center pb-2 mb-2'>Confirm Password not matched!</span>
                                    }

                                    {/* <!-- Submit button --> */}
                                    <button

                                        className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-4"
                                        onClick={updatePasswordHandler}
                                    >
                                        <span className='flex justify-center items-center gap-3'><BsKey /><span>Update Password</span></span>
                                    </button>
                                </form>
                            </div>
                            {/* <!-- Right column container --> */}
                            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="relative mb-6" data-te-input-wrapper-init>

                                        <label className=''
                                            htmlFor="userId"
                                        >User ID
                                        </label>
                                        <input
                                            className="bg-gray-300 mt-2 appearance-none border-2 border-green-500 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"

                                            type="text"
                                            id="userId"
                                            placeholder="user Id"
                                            disabled
                                            defaultValue={fetchedUser?.uid}
                                        />
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <label className=''
                                                htmlFor="fullName"
                                            >Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 transition-all duration-200"
                                                id="fullName"
                                                placeholder="Full Name"
                                                required
                                                minLength={2}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
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
                                    </div>
                                    <button

                                        className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-4"
                                        onClick={updateProfileHandler}
                                    >
                                        <span className='flex justify-center items-center gap-3'><BsFillPersonLinesFill /><span>Update Profile</span></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Profile