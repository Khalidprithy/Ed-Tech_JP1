import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="hero bg-[url(https://blog.smarterservices.com/hubfs/Blog%20Post%202.jpg)]" >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Welcome to Ed-Tech Blog</h1>
                        <p className="mb-5 text-white">Keep yourself updated with the latest tech and new course we are working with</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-20 mb-10">
                    <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto">
                        <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex items-center justify-between'>
                            </div>
                            <h2 className="card-title">Social Media Effect</h2>
                            <p>Everything you need to know about online marketing</p>
                            <div className="flex justify-between items-center">
                                <div className="avatar flex items-center">
                                    <div className="w-6 rounded-full ring ring-secondary">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                    <p className='ml-2 font-semibold'>Tim Jock</p>
                                </div>
                                <p className='pl-4'>April 2, 12.20pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                        <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex items-center justify-between'>
                            </div>
                            <h2 className="card-title">Time management and Habit building</h2>
                            <p>Being productive is a skill as well. We can focus on building micro habit. </p>
                            <div className="flex justify-between items-center">
                                <div className="avatar flex items-center">
                                    <div className="w-6 rounded-full ring ring-secondary">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                    <p className='ml-2 font-semibold'>John Alu</p>
                                </div>
                                <p className='pl-4'>March 5, 1.40pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-60 bg-base-100 rounded-md shadow-lg mx-auto md:mx-0">
                        <figure><img className='hover:scale-110 transition delay-75 duration-300 ease-in-out' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex items-center justify-between'>
                            </div>
                            <h2 className="card-title">Act happy to Be happy </h2>
                            <p>Happiness is a illusion. Dhoya dhoya ondhokar ondhokar </p>
                            <div className="flex justify-between items-center">
                                <div className="avatar flex items-center">
                                    <div className="w-6 rounded-full ring ring-secondary">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                    <p className='ml-2 font-semibold'>Kevin Dal</p>
                                </div>
                                <p className='pl-4'>June 9, 11.10am</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;