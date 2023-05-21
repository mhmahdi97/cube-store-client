import React from 'react';
import { Link } from 'react-router-dom';

const CubeCard = ({card}) => {
    const {cubeName, cubeImage1, price, ratings, _id} = card;

    return (
       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={cubeImage1} />
            </div>
            <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">{cubeName}</h2>
            <p className="mt-1">Ratings: {ratings}</p>
            <p className="mt-1 mb-2">Price: {price} BDT</p>
            <Link className='mt-2' to={`/cubes/${_id}`}><button className='bg-gray-500 px-2 py-1 rounded-md text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default CubeCard;