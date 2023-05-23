import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyCubesTable = ({myCube, myCubes, setMyCubes}) => {

    const {cubeName, cubeImage1, category, price, sellerName, sellerEmail, ratings, quantity, _id} = myCube;


    
   const handleDelete = _id => {
        console.log(_id)
        console.log(myCubes)

        Swal.fire({
            title: 'Are you sure to delete the cube?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/cubes/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your cube has been deleted.',
                            'success'
                        )
                        const remaining = myCubes.filter(cube => cube._id !== _id)
                        setMyCubes(remaining)
                    }
                })
                
            }
        })
    }

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
            <td className='text-center'> <Link to={`/update-cube/${_id}`} >
                <button className='bg-gray-500 px-2 py-1 rounded-md text-white'>Update</button>
                </Link> </td>
            <td className='text-center'><button onClick={() => handleDelete(_id)} className='bg-red-500 px-2 py-1 rounded-md text-white'>Delete</button> </td>
        
        </tr>
    );
};

export default MyCubesTable;