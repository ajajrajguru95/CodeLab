import React from 'react';

const ContentCard = (props) => {
    return (
        // Post Card
        <div className="card">
            {/* Card Header */}
            <div className="card__header">
                {/* Post Title */}
                <div className="card__title">
                    {/* {faker.lorem.sentence()} */}
                    {props.title}
                </div>
                {/* Post Content */}
                <div className="card__content">
                    {/* {faker.lorem.paragraph()} */}
                    {props.content}
                </div>
            </div>{/* Card Header ends */}
        </div>
    )
}

export default ContentCard;