import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Message from '../Message/Message';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Featured from '../Featured/Featured';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Message></Message>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;