import React from 'react';
import backgroundImage from '../assets/header-bg.svg';
import agencyLogo from '../assets/logo.svg';
import searchIcon from '../assets/search.png';
import fbIcon from '../assets/fb.png';
import './Header.css';

const Header = () => {
    const fontLato = {
        fontFamily: 'Lato, sans-serif',
    };
    return (
        <section
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            className="bg-cover bg-center h-screen">

            <header className="text-white p-0 m-0 w-full z-10 top-0">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-4 lg:px-8">
                    <div className="logo flex items-center mx-4 my-4 lg:my-6">
                        <img src={agencyLogo} alt="Agency Logo" className="h-8 mr-2" />
                        <div className="text-xl lg:text-2xl font-bold" style={fontLato}>Creative Agency</div>
                    </div>
                    <nav className="flex items-center flex-wrap justify-evenly">
                        <a href="#" className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Home</a>
                        <a href="#" onClick={() => scrollToSection('about')} className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>About Us</a>
                        <a href="#" onClick={() => scrollToSection('team')}  className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Team</a>
                        <a href="#" onClick={() => scrollToSection('services')}  className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Services</a>
                        <a href="#" onClick={() => scrollToSection('process')}  className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Process</a>
                        <a href="#" onClick={() => scrollToSection('clients')}  className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Clients</a>
                        <a href="#" onClick={() => scrollToSection('work')} className="mx-2 font-medium hover:text-[#fba419]" style={fontLato}>Work</a>
                        <img src={searchIcon} alt="Search" className="h-4 ml-4" />
                        <img src={fbIcon} alt="Facebook" className="h-4 ml-4" />
                    </nav>
                </div>
                <div className="bg-white border-b w-full"></div>
            </header>

            <div className="flex flex-col lg:flex-row justify-center items-center py-10 h-full w-full px-4 lg:px-0 lg:w-6/12 lg:pl-20 lg:py-25">
                <div className="p-4 lg:p-8 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={fontLato}>
                        Creative idea for <span className="text-[#fba419]">Professionals</span>
                    </h1>
                    <p className="text-white mb-6 text-base" style={fontLato}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="bg-[#fba419] text-white px-5 py-2 rounded-full hover:shadow-md" style={fontLato}>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Header;
