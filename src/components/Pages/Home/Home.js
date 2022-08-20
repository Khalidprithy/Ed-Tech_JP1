import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Deals from './Deals';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Deals></Deals>
            <Contact></Contact>
        </div>
    );
};

export default Home;