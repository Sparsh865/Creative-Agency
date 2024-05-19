import React from 'react';
import Image1 from '../assets/image-served1.svg';
import Image2 from '../assets/image-served2.svg';
import Image3 from '../assets/image-served3.svg';

const Served = () => {
    return (
        <div className="container mx-auto px-6 lg:px-24 py-12 flex flex-col lg:h-screen justify-between">
            <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-4 w-full lg:w-2/3">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-3/5">
                            <img src={Image1} alt="Image 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full lg:w-2/5 flex flex-col justify-center">
                            <h2 className="text-4xl lg:text-6xl font-extrabold">
                                We have <span className="text-[#fba419] text-3xl lg:text-5xl">Served</span>
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-1/2">
                            <img src={Image2} alt="Image 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={Image3} alt="Image 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col justify-end h-full px-4 lg:px-10">
                        <p className="text-black text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Served;
