import React from 'react';

const TeamMember = ({ image, name, role }) => {
    return (
        <div className="relative w-full h-full">
            <img
                src={image}
                alt={name}
                className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 flex flex-col items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <h3 className="text-white text-lg font-semibold">{name}</h3>
                <p className="text-gray-300">{role}</p>
            </div>
        </div>
    );
};

export default TeamMember;
