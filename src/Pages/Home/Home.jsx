import React from 'react';
import useTitle from '../../hooks/useTitle';
import Gallery from './Gallery';
import Hero from './Hero';

const Home = () => {

    useTitle('Cube Store | Home')

    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;