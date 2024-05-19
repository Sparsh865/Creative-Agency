// Contact.jsx
import React from 'react';
import background from '../assets/contact-bg.svg';
import facebookIcon from '../assets/fb-icon.png';
import googlePlusIcon from '../assets/g+.png';
import vkIcon from '../assets/vk.png';
import youtubeIcon from '../assets/youtube.png';
import linkedinIcon from '../assets/linkedin.png';
import diggIcon from '../assets/digg.png';
import xIcon from '../assets/x.png';
import agencyLogo from '../assets/logo.svg';
import emailIcon from '../assets/emailIcon.png'; 
import phoneIcon from '../assets/callIcon.png'; 
import addressIcon from '../assets/addressIcon.png'; 

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}>
                <div className="bg-black bg-opacity-75 h-full flex items-center justify-center group px-10 md:px-20">
                    <div className="text-center md:text-left text-white p-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h1 className="text-5xl font-extrabold">Get</h1>
                        <h2 className="text-5xl font-extrabold text-[#fba419]">in Touch</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor esse cillum dolore eu fugiat.</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-white p-8 flex flex-col justify-center md:ml-10 md:pl-10 md:pr-20">
                <div className='flex flex-row gap-2'>
                    <img src={agencyLogo} alt="Agency Logo" className="h-8 mr-2" />
                    <h2 className="text-3xl font-extrabold mb-4">Creative Agency</h2>
                </div>
                <p className="mb-8 text-black text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <img src={emailIcon} alt="Email" className="w-10 h-8 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">EMAIL</h3>
                            <p>free@psdfreebies.com</p>
                            <p>free@psdfreebies.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={phoneIcon} alt="Phone" className="w-10 h-12 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">CALL US !</h3>
                            <p>+123 456 7890</p>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={addressIcon} alt="Address" className="w-10 h-10 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">ADDRESS</h3>
                            <p>123, Main Road, New City,</p>
                            <p>My Country 123456</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 justify-center md:space-x-10 mt-16">
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='Facebook'><img src={facebookIcon} alt="Facebook" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='Google+'><img src={googlePlusIcon} alt="Google Plus" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='Wk'><img src={vkIcon} alt="WK" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='Youtube'><img src={youtubeIcon} alt="Youtube" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='LinkedIn'><img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='Digg'><img src={diggIcon} alt="Digg" className="w-4 h-4" /></a>
                    <a href="#" className="text-gray-600 hover:text-gray-800" title='X'><img src={xIcon} alt="X" className="w-4 h-4" /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
