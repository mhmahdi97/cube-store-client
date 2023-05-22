import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContextProvider';
import Swal from 'sweetalert2';

const CubeCard = ({card}) => {
    const {cubeName, cubeImage1, price, ratings, _id} = card;
    const {user} = useContext(AuthContext);

    const handlePrevent = () => {
        if (!user) {
            Swal.fire('You Need to Login First to See the Details!')
        }
    }

    return (
       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={cubeImage1} />
            </div>
            <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">{cubeName}</h2>
            <p className="mt-1">Ratings: {ratings}</p>
            <p className="mt-1 mb-2">Price: {price} BDT</p>
            <Link className='mt-2' to={`/cubes/${_id}`}><button onClick={handlePrevent} className='bg-gray-500 px-2 py-1 rounded-md text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default CubeCard;