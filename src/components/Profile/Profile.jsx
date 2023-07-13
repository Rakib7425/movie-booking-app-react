import React, { useState } from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
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

    const updateHandler = () => {
        if (password === cPassword && password.length > 7 && email) {
            try {

                updateProfile(auth.currentUser, {
                    displayName: name,
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"

                }).then(() => {
                    console.log(`name updated Successfully`);
                }).catch((error) => {
                    toast.error(`An error occurred: ${error}!`)
                    console.error(` An error occurred In updateProfile: ${error}`);
                });

                updatePassword(auth.currentUser, cPassword).then(() => {
                    console.log(`Password updated successfully`);
                }).catch((error) => {
                    toast.error(`An error occurred: ${error}!`)
                    console.error(`An error ocurred in updatePassword`, error);
                });;
                updateEmail(auth.currentUser, "user@example.com").then(() => {
                    // Email updated!
                    console.log(`Email updated!`);
                }).catch((error) => {
                    // An error occurred
                    toast.error(`An error occurred: ${error}!`)
                    console.error(`An error occurred in updateEmail`, error);
                });

                let credential = EmailAuthProvider.credential(
                    fetchedUser.email,
                    cPassword
                );
                reauthenticateWithCredential(fetchedUser, credential)
                    .then(result => {
                        // User successfully reauthenticated. New ID tokens should be valid.
                        console.log(result);
                    });

                if (authUser) {
                    setAuthUser({
                        userId: fetchedUser.uid,
                        Email: email,
                        Name: name,
                    })
                }
                setPassword('');
                setCPassword('');
                toast.success(`Profile updated successfully!`)
                console.log(`Profile updated!`);
            } catch (error) {
                console.log(error);
            }

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
                            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            {/* <!-- Left column container with background--> */}
                            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="w-full"
                                    alt="ImgG" />
                            </div>

                            {/* <!-- Right column container with form --> */}
                            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                                <form onSubmit={(e) => e.preventDefault()}>

                                    {/* <!-- User ID --> */}
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

                                    {/* <!-- Password input --> */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <div className='flex gap-2 '>
                                            <div>
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
                                        cPassword === password || cPassword.length < 1 ? "" : <span className='text-red-600 text-center pb-2 mb-2'>Confirm Password not matched!</span>
                                    }

                                    {/* <!-- Submit button --> */}
                                    <button

                                        className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mt-4"
                                        onClick={updateHandler}
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