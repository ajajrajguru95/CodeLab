import React from 'react';
import faker from 'faker';
import ContentCard from '../../content-card/ContentCard';

const CatPhp = () => {
    return (
        <div className="php-block">
            <ContentCard title={faker.lorem.sentence()} content={faker.lorem.paragraph()} />
        </div>
    )
}

export default CatPhp;