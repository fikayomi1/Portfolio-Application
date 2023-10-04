
import React, { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 font-semibold border-b border-gray">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-black font-bold text-xl">Logo</div>
                    <div className="hidden md:flex flex-grow items-stretch justify-end space-x-4 px-20">
                        <a href="#" className="flex items-center text-black mr-3">
                            
                            Home
                        </a>
                        <a href="#" className="flex items-center text-black mr-3">
                            
                            About
                        </a>
                        <a href="#" className="flex items-center text-black mr-3">
                            
                            Skills
                        </a>
                        <a href="#" className="flex items-center text-black mr-3">
                            
                            Projects
                        </a>
                        <a href="#" className="flex items-center text-black mr-1">
                            
                            Contact
                        </a>
                        <button className="bg-gray text-black px-4 py-2 rounded-full hover:bg-black hover:text-white border border-black">Hire Me!</button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-black">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobileMenu">
                    <div className="flex flex-col items-center mt-4">
                        <a href="#" className="text-black mb-3">Home</a>
                        <a href="#" className="text-black mb-3">About</a>
                        <a href="#" className="text-black mb-3">Skills</a>
                        <a href="#" className="text-black mb-3">Projects</a>
                        <a href="#" className="text-black mb-2">Contact</a>
                        <button className="bg-black text-white px-4 py-2 rounded mt-4 border border-white hover:bg-white hover:text-black hover:border hover:border-black">Hire Me!</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;

