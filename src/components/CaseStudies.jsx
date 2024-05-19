import React from 'react';
import CaseStudy from './Case';
import Image1 from '../assets/case1.svg';
import Image2 from '../assets/case2.svg';
import Image3 from '../assets/case3.svg';

const CaseStudies = () => {
    const caseStudiesData = [
        {
            image: Image1,
            title: 'Lorem Ipsum Dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: Image2,
            title: 'Lorem Ipsum Dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: Image3,
            title: 'Lorem Ipsum Dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    return (
        <section id="work"className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    Case <span className="text-[#fba419]">studies</span>
                </h2>
                <p className="text-black mb-8 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                    {caseStudiesData.map((caseStudy, index) => (
                        <CaseStudy
                            key={index}
                            image={caseStudy.image}
                            title={caseStudy.title}
                            description={caseStudy.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
