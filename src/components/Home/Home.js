import React from 'react';
import Pict from "../Images/Ola.png"

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row py-44" id = "Home">

            {/* Section 2 */}
            <div className="flex items-center justify-center md:order-2 md:w-1/2 p-2">
                <img src={Pict} alt="Profile" className="rounded-full h-52 w-48 sm:h-56 w-56  " />
            </div>

            {/* Section 1 */}
            <div className="flex items-center justify-center md:order-1 md:w-1/2 p-4 lg:text-justify sm:text-center">
                <div className="max-w-xl py-10 px-20">
                    <p className="text-lg font-semibold mb-2">Hello, my name is</p>
                    <h1 className="text-4xl font-bold mb-2">Odedunmoye Olaoluwa</h1>
                    <p className="text-gray-400 text-sm mb-8">I'm a Frontend Developer from Nigeria. I develop interactive and interesting websites.</p>
                    <a href="#Project" className="font-semibold py-3 px-5 rounded-full bg-black text-white shadow-lg">View Projects <i class="fas fa-arrow-right text-white bg-black"></i></a>
                </div>
            </div>
            <div id ="About"></div>

        </div>
    );
};

export default Home;


