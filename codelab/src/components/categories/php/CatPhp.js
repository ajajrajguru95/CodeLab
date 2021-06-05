import React from 'react';
import faker from 'faker';
import ContentCard from '../../content-card/ContentCard';

const CatPhp = () => {
    return (
        <ContentCard title={faker.lorem.sentence()} content={faker.lorem.paragraph()} />
    )
}

export default CatPhp;