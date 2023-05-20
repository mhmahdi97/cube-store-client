import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import erroImage from '../../assets/404.png';

const ErrorPage = () => {

    useTitle('Error | 404')

    return (
        <div className='flex justify-center content-center'>
             <div >
                
                <div>
                    <img src={erroImage} alt="" />
                </div>
                <div className='flex justify-center'>
                    <Link to='/'>
                        <button className='bg-slate-300 font-medium px-2 py-1 rounded-lg'> Back to Home</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;