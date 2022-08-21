import React from 'react';

const About = () => {
    return (
        <div >
            <div>
                <div class="hero bg-[url(https://wallpaperaccess.com/full/1657858.jpg)]" >
                    <div class="hero-overlay bg-opacity-30"></div>
                    <div class="hero-content text-left text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-4xl font-bold text-white">About Us</h1>
                            <p class="mb-5 text-white">Keep yourself updated with the latest tech and new course we are working with</p>
                        </div>
                    </div>
                </div>
                <div class="hero min-h-screen bg-base-200 px-20">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://www.inspiress.in/img/softSkills.png" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div className='w-60'>
                            <h1 class="text-3xl font-bold">Achieve Your
                                Goals With Ed-Tech</h1>
                            <p class="py-6">Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                            <ul>
                                <li>Learn New skills with Ed-Tech</li>
                                <li>More then 1200+ lessons</li>
                                <li>Best place for online learning</li>
                            </ul>
                            <button class="btn btn-outline btn-success">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-3xl text-center font-bold text-primary mb-6'>Success Stories</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-10'>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title">Courses</div>
                            <div class="stat-value">1,200</div>
                            <div class="stat-desc">1500+ hours of lessons</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title">Instructor</div>
                            <div class="stat-value">100+</div>
                            <div class="stat-desc">Top rated Institute</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title">Awards</div>
                            <div class="stat-value">20</div>
                            <div class="stat-desc">Best online school award</div>
                        </div>
                    </div>
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-title">Total Students</div>
                            <div class="stat-value">89,400</div>
                            <div class="stat-desc">Active students</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-10 mb-10'>
                <div class="hero h-60 rounded-sm bg-[url(https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2019/9/13/7/53/37/skill_development_-_fial.jpg)]" >
                    <div class="hero-overlay bg-opacity-30"></div>
                    <div>
                        <h1 className='text-3xl font-bold text-white'>Free Course</h1>
                        <p className='text-white'>Free access for poor students</p>
                        <button className='btn btn-sm btn-success '>Details</button>
                    </div>
                </div>
                <div class="hero bg-[url(https://ichef.bbci.co.uk/news/976/cpsprodpb/A362/production/_120562814_officecovid.jpg)]" >
                    <div class="hero-overlay bg-opacity-30"></div>
                    <div class="hero-content text-left text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-4xl font-bold text-white">Remote Jobs</h1>
                            <p class="mb-5 text-black">Work from home for employee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;