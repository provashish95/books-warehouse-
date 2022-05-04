import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';
import './Home.css';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <section className='background-img'>
                <Categories></Categories>
                <Books></Books>
                <Books></Books>
                <Books></Books>
            </section>
        </div>
    );
};

export default Home;