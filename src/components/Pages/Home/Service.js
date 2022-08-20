import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Service = () => {
    return (
        <div className='px-10 bg-base-100'>
            <div className='text-left'>
                <h1 className='text-3xl font-bold pt-2'>Pick your desired course</h1>
                <h4 className='text-sm text-primary'>Invest on yourself and learn something new.</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-4">
                <div class="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>32 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.5</p>
                        </div>
                        <h2 class="card-title">Marketing</h2>
                        <p>Everything you need to know about online marketing</p>
                        <div class="flex justify-between items-center">
                            <div class="avatar flex items-center">
                                <div class="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Tim Cock</p>
                            </div>
                            <button class="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>32 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.5</p>
                        </div>
                        <h2 class="card-title">Marketing</h2>
                        <p>Everything you need to know about online marketing</p>
                        <div class="flex justify-between items-center">
                            <div class="avatar flex items-center">
                                <div class="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Tim Cock</p>
                            </div>
                            <button class="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>32 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.5</p>
                        </div>
                        <h2 class="card-title">Marketing</h2>
                        <p>Everything you need to know about online marketing</p>
                        <div class="flex justify-between items-center">
                            <div class="avatar flex items-center">
                                <div class="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Tim Cock</p>
                            </div>
                            <button class="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;