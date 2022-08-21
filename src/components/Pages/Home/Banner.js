import React from 'react';
import banner from '../../../images/graphic.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img className="mask mask-decagon" src={banner} alt='' />
                <div>
                    <h4 className='font-semibold'>Over 1200+</h4>
                    <h1 className="text-5xl font-bold">Online Courses </h1>
                    <p className="py-6">We have well skilled instructor from countries best university. Here we provide the best online learning experience.</p>
                    <button className="btn btn-success">Start Free Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;