import React, { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContextProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    useTitle('Cube Store | Login')

    const [error, setError] = useState('');


    const { auth, signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                if(error.message === 'Firebase: Error (auth/wrong-password).') {
                setError('You Have Entered a Wrong Password!!!')
                
            }
                else if (error.message === 'Firebase: Error (auth/configuration-not-found).' ||'Firebase: Error (auth/user-not-found).') {
                    setError('Account Not Found!!!')
                }
            })

    }

   
    const googleProvider = new GoogleAuthProvider;

    const handleGoogleSignIn = () => {
                signInWithPopup(auth, googleProvider)
                .then(result => {
                    const googleUser = result.user;
                    console.log(googleUser);
                    setLoading(true)
                })
                .catch(error => {
                    console.log(error)
                })
            }

          

    return (
        <div className="text-gray-600 body-font">
            
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        <p className='text-red-600 text-lg mt-2'>{error}</p> 
                    </div>
                    <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                    Dont Have Account? Please <Link to="/register" className=" text-blue-600">Register</Link>
                </p>

                 <div className='mt-6 text-center'>
                    <button onClick={handleGoogleSignIn} className=" bg-stone-500 hover:bg-stone-600 px-4 py-2 rounded-md text-white font-semibold text-center">Sign-In with Google <FaGoogle /> </button>
                    
                </div>
            
            </div>

        </div>
    );
};

export default Login;