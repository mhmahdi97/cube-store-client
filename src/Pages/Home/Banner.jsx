import React from 'react';
import bannerImg from '../../assets/cube-store-banner.png';

const Banner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={bannerImg} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get Your Puzzle Needs From
                    <br className="hidden lg:inline-block" />Cube Store
                </h1>
                <p className="mb-8 leading-relaxed">We have a large collection of 9000 Puzzles at your disposal. We primarily sell speedcubes and quality puzzles. If you are a speedcuber or puzzle enthusiast, you will find useful puzzles and accessories from us.</p>
           
                </div>
            </div>
        </section>
    );
};

export default Banner;