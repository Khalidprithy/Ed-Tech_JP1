import React, { useRef } from 'react';
import { HiOutlineMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

const Contact = () => {
    const form = useRef();

    return (
        <div className="bg-base-200 min-h-full pt-10 grid grid-cols-1 md:grid-cols-2 px-10 lg:px-20 mt-8">
            <div className="text-center p-4 text-primary lg:text-left mx-auto">
                <h1 className="text-3xl font-bold">Let's get in touch</h1>
                <p className="py-6">Feel free to give us any feedback. All your feedback is highly appreciated</p>
                <div>
                    <div className="text pl-3">
                        <p className='flex items-center gap-2'> <HiLocationMarker></HiLocationMarker> <span>Address:</span> <a href="https://www.google.com.bd/maps/dir/23.755121,90.3600549//@23.7550124,90.3603433,20z/data=!4m2!4m1!3e0?hl=en" target="_blank" rel="noreferrer">Cox's Hat, Dhaka</a></p>
                    </div>
                    <div className="text pl-3">
                        <p className='flex items-center gap-2'> <HiPhone></HiPhone> <span>Phone:</span> <a href="tel://+8801842502822">+859893568</a></p>
                    </div>
                    <div className="text pl-3">
                        <p className='flex items-center gap-2'> <HiOutlineMail></HiOutlineMail> <span>Email:</span> <a href="mailto:khalidprithy@gmail.com">edtech101@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="card w-72 md:w-96 flex-shrink-0 mx-auto m-4 shadow-2xl bg-base-300">
                <div className="px-4 mt-4">
                    <form ref={form}>
                        <div className='flex my-2'>
                            <label className='font-bold mr-2'>Name</label>
                            <input className='rounded-md px-3 w-full' type="text" name="user_name" required autoComplete="off" />
                        </div>
                        <div className='flex my-2'>
                            <label className='font-bold mr-3'>Email</label>
                            <input className='rounded-md px-3 w-full' type="email" name="user_email" required autoComplete="off" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='font-bold mr-3 text-left'>Message</label>
                            <textarea className='rounded-md px-3 mt-1' name="message" />
                        </div>
                        <input className='btn btn-sm btn-success mb-2' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;