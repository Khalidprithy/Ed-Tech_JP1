import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Service = () => {
    return (
        <div className='px-10 bg-base-100'>
            <div className='text-left'>
                <h1 className='text-3xl font-bold pt-2'>Pick your desired course</h1>
                <h4 className='text-sm text-primary'>Invest on yourself and learn something new.</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-4">
                <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://cdn.corporatefinanceinstitute.com/assets/marketing-strategy.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>32 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.5</p>
                        </div>
                        <h2 className="card-title">Marketing</h2>
                        <p>Everything you need to know about online marketing</p>
                        <div className="flex justify-between items-center">
                            <div className="avatar flex items-center">
                                <div className="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Tim Cock</p>
                            </div>
                            <button className="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://assets.justinmind.com/wp-content/uploads/2021/05/ux-design-principles-768x492.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>20 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.0</p>
                        </div>
                        <h2 className="card-title">UX Design</h2>
                        <p>Learn to design great UX design</p>
                        <div className="flex justify-between items-center">
                            <div className="avatar flex items-center">
                                <div className="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Henesy</p>
                            </div>
                            <button className="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                    <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://www.extremetech.com/wp-content/uploads/2020/11/AI-artificial-intelligence-2-640x360.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-primary'>52 Lesson</p>
                            <p className='flex items-center justify-end'><AiFillStar className='text-red-400 mr-1'></AiFillStar>4.8</p>
                        </div>
                        <h2 className="card-title">Data Science</h2>
                        <p>Complex machine learning algorithms to build predictive models</p>
                        <div className="flex justify-between items-center">
                            <div className="avatar flex items-center">
                                <div className="w-6 rounded-full ring ring-secondary">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='ml-2 font-semibold'>Mark J</p>
                            </div>
                            <button className="btn btn-sm btn-link text-success">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;