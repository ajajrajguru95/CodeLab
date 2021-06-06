import React from 'react';

import Route from '../Route';

import CatCss from './css/CatCss';
import CatJs from './js/CatJs';
import CatPhp from './php/CatPhp';

const Categories = () => {
    return (
        <div className="category-content">
            <Route path="/">
                <CatCss />
            </Route>
            <Route path="/js">
                <CatJs />
            </Route>
            <Route path="/php">
                <CatPhp />
            </Route>
        </div>
    )
}

export default Categories;