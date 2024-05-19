import React from 'react';
import Card from './Card';
import cardImage1 from '../assets/cardImage1.svg';
import cardImage2 from '../assets/cardImage2.svg'; 
import bgImage1 from '../assets/serviceCard1bg.svg'; 
import bgImage2 from '../assets/serviceCard2bg.svg'; 

const Page4 = () => {
    const cardsData = [
        {
            bgImage: bgImage1,
            image: cardImage1,
            title: 'CREATIVE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore.',
        },
        {
            bgImage: bgImage2,
            image: cardImage2,
            title: 'CREATIVE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore.',
        },
    ];

    return (
        <section id="process" className="flex flex-col md:flex-row items-center justify-between p-8 bg-white h-auto lg:h-screen md:pl-24">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        bgImage={card.bgImage}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left">
                <h1 className="text-6xl font-extrabold">Welcome</h1>
                <h2 className="text-4xl text-[#fba419] font-bold">for Professionals</h2>
                <p className="mt-4 text-black ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur. ed do eiusmod tempor esse cillum dolore eu fugiat nulla pariatur
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Lorem ipsum dolor sit consectetur adipiscing
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Lorem ipsum dolor sit amet adipiscing
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Lorem dolor sit amet, consectetur adipiscing
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Ipsum dolor sit amet, consectetur adipiscing
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Lorem ipsum dolor sit consectetur adipiscing
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Page4;
