import React from 'react';
import TeamMember from './TeamMember';
import Image1 from '../assets/image1.svg';
import Image2 from '../assets/image2.svg';
import Image3 from '../assets/image3.svg';
import Image4 from '../assets/image4.svg';
import backgroundImage from '../assets/team-bg.svg';

const Team = () => {
    const teamMembers = [
        {
            image: Image1,
            name: 'Alice Johnson',
            role: 'Frontend Developer',
        },
        {
            image: Image2,
            name: 'Bob Smith',
            role: 'Backend Developer',
        },
        {
            image: Image3,
            name: 'Carol Williams',
            role: 'Designer',
        },
        {
            image: Image4,
            name: 'David Brown',
            role: 'Project Manager',
        },
    ];

    return (
        <div id="team"
            className="bg-cover bg-center text-white py-12"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }}
        >
            <div className="text-center mb-12">
                <h1 className="text-6xl font-extrabold py-5">
                    <span className="text-white">Business</span> <span className="text-[#fba419]">Team</span>
                </h1>
                <p className="mt-4 text-white text-center px-5 md:px-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur.
                    consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-10">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
