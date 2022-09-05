import React from 'react';
import banner from '../../../Asset/blog-banner.png';

const Banner = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold font-serif mt-20 mb-5 text-center'>Welcome to My Blog Galaxy!</h1>
            <img className='mb-10 mx-auto h-[30rem] w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;