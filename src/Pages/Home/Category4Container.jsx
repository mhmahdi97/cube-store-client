import React, { useEffect, useState } from 'react';
import CubeCard from './CubeCard';

const Category4Container = () => {
    const url = `http://cube-store-five.vercel.app/cubes?category=4x4x4`;
    
    const [category4Cards, setcategory4Cards] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setcategory4Cards(data))
    }, [])


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    
                    {
                        category4Cards.map(card => <CubeCard
                            key={card._id}
                            card={card}
                        ></CubeCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Category4Container;