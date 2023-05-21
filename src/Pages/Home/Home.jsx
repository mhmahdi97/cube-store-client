import React from 'react';
import useTitle from '../../hooks/useTitle';
import Gallery from './Gallery';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import ContactUs from './ContactUs';

const Home = () => {

    useTitle('Cube Store | Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;