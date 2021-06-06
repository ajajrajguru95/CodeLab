import React from 'react';
import faker from 'faker';

import ContentCard from '../../content-card/ContentCard';

const CatCss = () => {
    return (
        <div className="css-block">
            <ContentCard title={faker.lorem.sentence()} content={faker.lorem.paragraph()} />
        </div>
    )
}

export default CatCss;