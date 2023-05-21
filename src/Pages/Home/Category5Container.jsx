import React, { useEffect, useState } from 'react';
import CubeCard from './CubeCard';

const Category5Container = () => {
   const url = `http://localhost:5000/cubes?category=5x5x5`;
    
    const [category2Cards, setcategory5Cards] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setcategory5Cards(data))
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

export default Category5Container;