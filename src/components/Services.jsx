import React from 'react';
import CreativeWork from './CreativeWork';
import backgroundImage from '../assets/background.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

const Services = () => {
    const creativeWorks = [
        {
            icon: icon1,
            title: 'CREATIVE WORK',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        },
        {
            icon: icon2,
            title: 'CREATIVE WORK',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        },
        {
            icon: icon3,
            title: 'CREATIVE WORK',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        },
        {
            icon: icon4,
            title: 'CREATIVE WORK',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        },
    ];

    return (
        <section id="services" className="flex flex-col md:flex-row  items-center justify-center h-auto bg-cover bg-center text-white" style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
            <div className="md:p-40 md:w-7/12 p-5">
                <div className=" text-center md:text-left mb-8">
                    <h1 className="text-5xl font-bold my-3">Our Company</h1>
                    <h2 className="text-3xl text-[#fba419] font-semibold mb-4">Great Services</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-11">
                {creativeWorks.map((work, index) => (
                    <CreativeWork
                        key={index}
                        icon={work.icon}
                        title={work.title}
                        description={work.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
