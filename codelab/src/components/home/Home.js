import React from 'react';
// Header Import
import Header from '../header/Header';
// Main category import
import Categories from '../categories/Categories';
// Footer import
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div className="main-app">
            {/* Header */}
            <Header />
            {/* Main Categories */}
            <Categories />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;