import React from 'react';
import useTitle from '../../hooks/useTitle';
import Gallery from './Gallery';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import ContactUs from './ContactUs';
import CategoryTab from './CategoryTab';

const Home = () => {

    useTitle('Cube Store | Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;