import React from 'react';
import useTitle from '../../hooks/useTitle';
import Gallery from './Gallery';

const Home = () => {

    useTitle('Cube Store | Home')

    return (
        <div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;