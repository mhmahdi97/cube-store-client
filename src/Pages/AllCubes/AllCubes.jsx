import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import AllCubesTable from './AllCubesTable';

const AllCubes = () => {
    useTitle('Cube Store | All Cubes')

    const loadedCubes = useLoaderData();
    const [cubes, setCubes] = useState(loadedCubes);

    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-8 mb-8">All the Cubes We Have:</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Seller Name</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cubes.map(cube => <AllCubesTable
                            key={cube._id}
                            cube={cube}
                        ></AllCubesTable> )
                    }
                </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllCubes;