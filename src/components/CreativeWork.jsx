import React from 'react';

const CreativeWork = ({ icon, title, description }) => {
    return (
        <div className="flex mb-8 w-7/12">
            <img src={icon} alt={title} className="w-10 h-10 mr-4" />
            <div>
                <h3 className="text-xl font-semibold text-[#fba419]">{title}</h3>
                <p className="text-sm text-white">{description}</p>
            </div>
        </div>
    );
};

export default CreativeWork;
