import React from 'react';
import faker from 'faker';
import ContentCard from '../../content-card/ContentCard';


const CatJs = () => {
    return (
        <div className="js-block">
            <ContentCard title={faker.lorem.sentence()} content={faker.lorem.paragraph()} />
        </div>
    )
}

export default CatJs;