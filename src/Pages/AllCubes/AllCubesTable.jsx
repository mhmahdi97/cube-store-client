import React from 'react';
import { Link } from 'react-router-dom';

const AllCubesTable = ({cube}) => {

    console.log(cube)
    const {cubeName, cubeImage1, category, price, quantity, _id} = cube;



    return (
       <tr>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {cubeImage1 && <img src={cubeImage1} alt="" />}
                    </div>
                </div>
            </td>
            <td className='text-center'>{cubeName}</td>
            <td className='text-center'>{category}</td>
            <td className='text-center'>{price} BDT</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'></td>
            <td className='text-center'> <Link to={`/cubes/${_id}`}><button className='bg-gray-500 px-2 py-1 rounded-md text-white'>View Details</button></Link> </td>
        
        </tr>
);
};

export default AllCubesTable;