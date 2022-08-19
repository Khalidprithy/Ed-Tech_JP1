import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Contact from './Contact';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;