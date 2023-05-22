import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CubeDetails = () => {

    const cubeData = useLoaderData();
    console.log(cubeData)
    const {cubeName, cubeImage2, ratings, description, sellerName, sellerEmail, category, price, quantity, _id} = cubeData;

    return (
       <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="cube" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={cubeImage2} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{cubeName}</h1>

                        <p class="text-gray-600 font-medium text-xl mb-4">Ratings: {ratings}</p>
                        
                        <p className="leading-relaxed">{description}</p>
                       
                        <div className='mt-2'>
                        <p className="title-font font-medium text-2xl mt-6 text-gray-900">Price: {price} BDT</p>
                        <p className="title-font font-medium text-2xl mt-6 text-gray-900">Available Quantity: {quantity}</p>
                        <p className="title-font font-medium text-2xl mt-6 text-gray-900">Seller Name: {sellerName} </p>
                        <p className="title-font font-medium text-2xl mt-6 text-gray-900">Seller Email: {sellerEmail} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CubeDetails;