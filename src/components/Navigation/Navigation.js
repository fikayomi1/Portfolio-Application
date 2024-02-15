
import React, { useState } from 'react';
import Logo from '../Navigation/Ola.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    function handleMenuClick() {
        setIsOpen(false)
    }

    return (
        <nav className="bg-gray-50 p-2 font-semibold border-b border-gray fixed w-full top-0">
            <div className="bg-gray-50 container mx-auto">
                <div className=" bg-gray-50 flex justify-between items-center">
                    <div className="bg-gray-50 text-black font-bold text-xl">
                        <a href="/"><img className="h-14 w-18 bg-gray-50" src={Logo}></img></a>
                    </div>
                    <div className="bg-gray-50 hidden md:flex flex-grow items-stretch justify-end space-x-4 px-20">
                        <a href="#Home" className=" bg-gray-50 flex items-center text-black mr-3">

                            Home
                        </a>
                        <a href="#About" className="bg-gray-50 flex items-center text-black mr-3">

                            About
                        </a>
                        <a href="#Skills" className="bg-gray-50 flex items-center text-black mr-3">

                            Skills
                        </a>
                        <a href="#Project" className="bg-gray-50 flex items-center text-black mr-3">

                            Projects
                        </a>
                        <a href="#Contact" className="bg-gray-50 flex items-center text-black mr-1">

                            Contact
                        </a>
                        <button className="bg-gray text-black px-4 py-2 rounded-full transition-all hover:bg-black hover:text-white border border-black"><a href = "#Contact" className="items-center hover:bg-black hover:text-white">Hire Me!</a></button>
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
                        <a href="#Home" className="text-black mb-3" onClick={handleMenuClick}>Home</a>
                        <a href="#About" className="text-black mb-3" onClick={handleMenuClick}>About</a>
                        <a href="#Skills" className="text-black mb-3" onClick={handleMenuClick}>Skills</a>
                        <a href="#Project" className="text-black mb-3" onClick={handleMenuClick}>Projects</a>
                        <a href="#Contact" className="text-black mb-2" onClick={handleMenuClick}>Contact</a>
                        <button onClick={handleMenuClick} className="bg-black text-white px-4 py-2 rounded mt-4 border border-white transition-all hover:bg-white hover:text-black hover:border hover:border-black">Hire Me!</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;

