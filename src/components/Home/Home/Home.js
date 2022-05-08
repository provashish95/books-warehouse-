import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';
import ContactUs from '../ContactUs/ContactUs';
import Stationary from '../Stationary/Stationary';
import './Home.css';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <section className='background-img'>
                <Categories></Categories>
                <Books></Books>
                <Stationary></Stationary>
                <ContactUs></ContactUs>
            </section>
        </div>
    );
};

export default Home;