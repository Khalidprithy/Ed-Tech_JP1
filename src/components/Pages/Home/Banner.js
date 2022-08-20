import React from 'react';
import banner from '../../../images/graphic.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col md:flex-row-reverse">
                <img class="mask mask-decagon" src={banner} alt='' />
                <div>
                    <h4 className='font-semibold'>Over 1200+</h4>
                    <h1 class="text-5xl font-bold">Online Courses </h1>
                    <p class="py-6">We have well skilled instructor from countries best university. Here we provide the best online learning experience.</p>
                    <button class="btn btn-success">Start Free Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;