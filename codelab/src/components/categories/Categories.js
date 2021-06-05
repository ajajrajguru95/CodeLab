import React from 'react';

import CatCss from './css/CatCss';
import CatJs from './js/CatJs';
import CatPhp from './php/CatPhp';

const Categories = () => {
    return (
        <div className="category-content">
            <CatCss />
            <CatJs />
            <CatPhp />
        </div>
    )
}

export default Categories;