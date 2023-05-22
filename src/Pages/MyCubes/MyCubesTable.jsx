import React from 'react';
import { Link } from 'react-router-dom';

const MyCubesTable = ({myCube}) => {

    const {cubeName, cubeImage1, category, price, sellerName, sellerEmail, ratings, quantity, _id} = myCube;

    return (
        <tr>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {cubeImage1 && <img src={cubeImage1} alt="Cube Image" />}
                    </div>
                </div>
            </td>
            <td className='text-center'>{cubeName}</td>
            <td className='text-center'>{category}</td>
            <td className='text-center'>{price} BDT</td>
            <td className='text-center'>{ratings}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{sellerName}</td>
            <td className='text-center'>{sellerEmail}</td>
            <td className='text-center'> <Link to={`/cubes/${_id}`}><button className='bg-gray-500 px-2 py-1 rounded-md text-white'>Update</button></Link> </td>
            <td className='text-center'> <Link to={`/cubes/${_id}`}><button className='bg-red-500 px-2 py-1 rounded-md text-white'>Delete</button></Link> </td>
        
        </tr>
    );
};

export default MyCubesTable;