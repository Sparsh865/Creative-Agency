import React from 'react';

const Case = ({ image, title, description }) => {
    return (
        <div className="relative group overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover md:rounded-none rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold text-[#fba419]">{title}</h3>
                    <p className="mt-2 text-base">{description}</p>
                    <button className="mt-4 bg-[#fba419] text-white px-4 py-2 rounded-full">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Case;
