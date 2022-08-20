import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../images/EdTechTitle.png'

const Header = () => {

    const menuItems = <>
        <li className='text-primary'><Link to='/'>Home</Link></li>
        <li className='text-primary'><Link to='/services'>Services</Link></li>
        <li className='text-primary'><Link to='/blogs'>Blog</Link></li>
        <li className='text-primary'><Link to='/about'>About</Link></li>
    </>


    return (
        <div>
            <div class="navbar bg-base-100">
                <div className="navbar-start flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-48">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-black"><img className='w-28' src={title} alt="" /></Link>
                </div>
                <div className="navbar-center hidden md:flex lg:flex-auto">
                    <ul className="menu menu-horizontal p-0 md:pr-8">
                        {menuItems}
                    </ul>
                </div>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">Profile</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;