import React from 'react';
import welcomePic from '../assets/welcome-pic.svg';
const Welcome = () => {
    return (
        <div id ="about" className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="max-w-4xl mx-auto p-8">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                    <div className="md:w-1/2">
                        <h1 className="text-7xl font-bold mb-2">Welcome</h1>
                        <h2 className="text-4xl text-[#fba419] font-semibold mb-4">for Professionals</h2>
                        <p className="italic text-gray-600 mb-4">
                            <span className='m-0 p-0 font-extrabold text-4xl' >"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu.”
                        </p>
                        <p className="text-gray-700 mb-8 font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat nulla eu fugiat nulla pariaturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu.
                        </p>
                        <button className="inline-block px-5 py-2 bg-[#fba419] text-white rounded-full hover:bg-[#fba419] transition duration-200">
                            Read More
                        </button>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-8 relative w-full md:w-1/2 overflow-hidden">
                        <img src={welcomePic} alt="Professionals" className="w-full h-96 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="p-4">Lorem ipsum dolor sit amet, sed do eiusmod tempor esse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
