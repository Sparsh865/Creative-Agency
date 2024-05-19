import React from 'react';

const Card = ({ bgImage, image, title, description }) => {
    return (
        <div
            className="relative bg-cover bg-center shadow-lg overflow-hidden w-56 h-96 p-4" 
            style={{ backgroundImage: `url(${bgImage})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <img src={image} alt={title} className="w-10 h-10 object-cover mb-4 self-center" />
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#fba419]">{title}</h3>
                    <p className="text-white mt-2 text-xs">{description}</p>
                    <button className="mt-4 bg-[#fba419] text-white py-2 px-4 rounded-full text-sm">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
