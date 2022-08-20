import React from 'react';

const Deals = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center pt-10'>Exclusive Courses</h1>
            <h4 className='text-2xl text-center text-primary'>Offer of the month</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4'>
                <div class="card card-compact w-72 h-72 bg-base-200 border rounded-md mx-auto">
                    <div class="card-body">
                        <h2 class="card-title">Gold Package</h2>
                        <p className='font-semibold'>10$/Month</p>
                        <ul>
                            <li className='py-1'><label class="flex items-center">
                                <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                <span class="label-text pl-2">2 Hours lesson daily</span>
                            </label>
                            </li>
                            <li className='py-1'><label class="flex items-center">
                                <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                <span class="label-text pl-2">1 Hour Mentorship</span>
                            </label>
                            </li>
                            <li className='py-1'><label class="flex items-center">
                                <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                <span class="label-text pl-2">Course Discussions</span>
                            </label>
                            </li>
                            <li className='py-1'><label class="flex items-center">
                                <input type="checkbox" class="checkbox checkbox-xs" disabled checked />
                                <span class="label-text pl-2">Problem solving sessions</span>
                            </label>
                            </li>
                            <li className='py-1'><label class="flex items-center">
                                <input type="checkbox" class="checkbox checkbox-xs" disabled checked />
                                <span class="label-text pl-2">Life time access</span>
                            </label>
                            </li>

                        </ul>
                        <div class="card-actions justify-start">
                            <button class="btn btn-sm btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="indicator">
                    <span class="indicator-item indicator-center badge badge-error">Best</span>
                    <div class="card card-compact w-80 h-80 bg-base-200 border rounded-md mx-auto">
                        <div class="card-body">
                            <h2 class="card-title">Diamond Package</h2>
                            <p className='font-semibold'>99.99$/Year</p>
                            <ul>
                                <li className='py-1'><label class="flex items-center">
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                    <span class="label-text pl-2">2 Hours lesson daily</span>
                                </label>
                                </li>
                                <li className='py-1'><label class="flex items-center">
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                    <span class="label-text pl-2">1 Hour Mentorship</span>
                                </label>
                                </li>
                                <li className='py-1'><label class="flex items-center">
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                    <span class="label-text pl-2">Course Discussions</span>
                                </label>
                                </li>
                                <li className='py-1'><label class="flex items-center">
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                    <span class="label-text pl-2">Problem solving sessions</span>
                                </label>
                                </li>
                                <li className='py-1'><label class="flex items-center">
                                    <input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-secondary" />
                                    <span class="label-text pl-2">Life time access</span>
                                </label>
                                </li>

                            </ul>
                            <div class="card-actions justify-start">
                                <button class="btn btn-sm btn-success">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Deals;