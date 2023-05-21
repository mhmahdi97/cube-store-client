import React from 'react';
import cube1 from '../../assets/gallery/cube-1.png';
import cube2 from '../../assets/gallery/cube-2.png';
import cube3 from '../../assets/gallery/cube-3.png';

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font mt-14">
            <h1 className='text-5xl text-red-500 text-center font-semibold'>See Our Best Selling Cubes Gallery</h1>
            <div className="container px-5 py-14 mx-auto flex flex-wrap">
                <div className="lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={cube1} />
                    <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">CubingClassroom RS3 M 3x3 2020 - Stickerless</h2>
                    <a className="mt-3 text-red-800 inline-flex items-center">See Details
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={cube2} />
                        <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">YuXin Little Magic 3x3x3 Cube - Stickerless 2021</h2>
                        <a className="mt-3 text-red-800 inline-flex items-center">See Details
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 absolute inset-0" src={cube3} />
                        <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Meilong M 3x3</h2>
                        <a className="mt-3 text-red-800 inline-flex items-center">See Details
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
};

export default Gallery;