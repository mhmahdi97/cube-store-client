import React, { useEffect, useState } from 'react';
import CubeCard from './CubeCard';

const Category2Container = () => {
  const url = `http://cube-store-five.vercel.app/cubes?category=2x2x2`;
    
    const [category2Cards, setcategory2Cards] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setcategory2Cards(data))
    }, [])


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    
                    {
                        category2Cards.map(card => <CubeCard
                            key={card._id}
                            card={card}
                        ></CubeCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Category2Container;