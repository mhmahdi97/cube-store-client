import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthContextProvider';

const UpdateCube = () => {
   useTitle('Cube Store | Update a Cube');

   const cube = useLoaderData();
   const {cubeName, category, price, ratings, cubeImage1, quantity, _id, sellerName, sellerEmail, description} = cube;
   console.log(cube)

    const {user} = useContext(AuthContext);

    const handleUpdateCube = event => {
        event.preventDefault();
        
        const form = event.target;
        const cubeName = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const cubeImage1 = form.photo.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const description = form.description.value;

        // console.log(cubeName)

        const updatedCubeInfo = {
            cubeName,
            category,
            price,
            ratings,
            cubeImage1,
            quantity,
            sellerName,
            sellerEmail,
            description
        }

        console.log(updatedCubeInfo)

         fetch(`http://cube-store-five.vercel.app/cubes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCubeInfo)
        } )
        .then(res =>  res.json())
        .then (data => {
            console.log(data)
            if (data.modifiedCount) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }

    return (
       <section className="text-gray-600 body-font relative">
            <h1 className='text-4xl font-bold text-center mb-8'>Add Your Cube Here</h1>
            <form onSubmit={handleUpdateCube}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cube Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={cubeName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name='ratings' defaultValue={ratings} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' defaultValue={cubeImage1} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='sellerEmail' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cube Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Your Cube" />
                </div>
            </form>
        </section>

    );
};

export default UpdateCube;