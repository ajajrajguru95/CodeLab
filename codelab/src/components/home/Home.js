import React from 'react';
// Header Import
import Header from '../header/Header';
// Footer import
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div className="main-app">
            {/* Header */}
            <Header />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;