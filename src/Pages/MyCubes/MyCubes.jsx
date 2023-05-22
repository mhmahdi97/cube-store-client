import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthContextProvider';
import MyCubesTable from './MyCubesTable';

const MyCubes = () => {

    useTitle('Cube Store | My Cubes')

    const { user } = useContext(AuthContext);
    const email =  user.email;

    const url = `http://localhost:5000/cubes?sellerEmail=${email}`;

    const [myCubes, setMyCubes] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyCubes(data))
    }, [])

    console.log(myCubes)



    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-8 mb-8">Cube You Have Added:</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* hello */}
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
                       myCubes.map(myCube => <MyCubesTable
                        key={myCube._id}
                        myCube={myCube}
                       ></MyCubesTable>) 
                    }
                </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCubes;