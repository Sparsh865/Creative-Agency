import React from 'react';

const TestimonialCard = ({ image, description, name, title }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-8 md:mb-0 w-3/4">
            <img src={image} alt={name} className="w-48 h-48 object-cover" />
            <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-black-600 mb-2">❝</p>
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-black font-bold">{name}, {title}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
