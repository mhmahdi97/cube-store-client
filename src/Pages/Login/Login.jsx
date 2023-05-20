import React from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const Login = () => {

    useTitle('Cube Store | Login')

    return (
        <div className="text-gray-600 body-font">
            
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-3xl font-medium title-font mb-5">Log In to Your Account</h2>
                <div className="relative mb-4">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
            <p className="text-xs text-gray-500 mt-3">
                Dont Have Account? Please <Link to="/register" className=" text-blue-600">Register</Link>
            </p>
            </div>
            {/* <div className="container px-5 py-24 mx-auto flex flex-wrap content-center items-center">
                
                
            </div> */}

        </div>
    );
};

export default Login;