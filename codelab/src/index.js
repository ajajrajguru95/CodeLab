import React from 'react';
import ReactDOM from 'react-dom';


// Main App/Home import
import Home from './components/home/Home';

const App = () => {
    return (
        <Home />
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));