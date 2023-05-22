import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthContextProvider';

const AllCubesTable = ({cube}) => {

    console.log(cube)
    const {cubeName, cubeImage1, category, price, sellerName, quantity, _id} = cube;

    const {user} = useContext(AuthContext);

     const handlePrevent = () => {
        if (!user) {
            Swal.fire('You Need to Login First to See the Details!')
        }
    }

    return (
       <tr>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {cubeImage1 && <img src={cubeImage1} alt="Cubes Image" />}
                    </div>
                </div>
            </td>
            <td className='text-center'>{cubeName}</td>
            <td className='text-center'>{category}</td>
            <td className='text-center'>{price} BDT</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{sellerName}</td>
            <td className='text-center'> <Link to={`/cubes/${_id}`}><button onClick={handlePrevent} className='bg-gray-500 px-2 py-1 rounded-md text-white'>View Details</button></Link> </td>
        
        </tr>
);
};

export default AllCubesTable;