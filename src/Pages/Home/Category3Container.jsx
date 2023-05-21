import React, { useEffect, useState } from 'react';
import CubeCard from './CubeCard';

const Category3Container = () => {
    const url = `http://localhost:5000/cubes?category=3x3x3`;
    
    const [category3Cards, setcategory3Cards] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setcategory3Cards(data))
    }, [])


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    
                    {
                        category3Cards.map(card => <CubeCard
                            key={card._id}
                            card={card}
                        ></CubeCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Category3Container;