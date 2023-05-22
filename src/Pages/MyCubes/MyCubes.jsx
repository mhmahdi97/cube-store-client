import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthContextProvider';
import MyCubesTable from './MyCubesTable';

const MyCubes = () => {

    useTitle('Cube Store | My Cubes')

    const { user } = useContext(AuthContext);
    const email =  user.email;
    // const [email, setEmail] = useState('');
    // setEmail(user.email);
    console.log(email)


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
            <h2 className="text-5xl text-center font-bold mt-8 mb-8">Cubes You Have Added</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Ratings</th>
                            <th className='text-center'>Available Quantity</th>
                            <th className='text-center'>Seller Name</th>
                            <th className='text-center'>Seller Email</th>
                            <th className='text-center'>Update Action</th>
                            <th className='text-center'>Delete Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                       myCubes.map(myCube => <MyCubesTable
                        key={myCube._id}
                        myCube={myCube}
                        user={user}
                       ></MyCubesTable>) 
                
                    }
                </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCubes;