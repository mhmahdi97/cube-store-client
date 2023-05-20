import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    

    return (
        <div className='flex justify-center content-center'>
             <div >
                
                <div>
                    <img src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="" />
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