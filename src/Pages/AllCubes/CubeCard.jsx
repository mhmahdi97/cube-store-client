import React from 'react';

const CubeCard = ({cube}) => {

    console.log(cube)
    const {cubeName, cubeImage1, category, price, quantity} = cube;



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
            <td className='text-center'> <button className='bg-gray-500 px-2 py-1 rounded-md text-white'>View Details</button> </td>
        
        </tr>
);
};

export default CubeCard;