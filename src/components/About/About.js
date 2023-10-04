import React from 'react';

const About = () => {
    return (
        <section className=" py-6 px-16 rounded-xl shadow-lg bg-white m-14">
            <div className="container bg-white mx-auto text-center">
                <h2 className="text-3xl font-bold bg-white mb-3">About Me</h2>
                <div className="p-6 bg-white">
                    <p className=" bg-white text-lg text-gray-800 mb-4">
                        Hi, I'm [Your Name], a passionate Frontend Developer based in [Location]. I specialize in crafting beautiful and functional user interfaces using React, Bootstrap, and Tailwind CSS.
                    </p>
                    <p className="bg-white text-lg text-gray-800">
                        I believe in the power of clean code and intuitive design to create exceptional web experiences. With a strong eye for detail and a love for problem-solving, I'm committed to delivering projects that exceed client expectations.
                                                 
                    </p>
                    <button className = "bg-black text-white font-semibold rounded-full px-4 py-2 mt-3 border border-white hover:bg-white hover:text-black hover:border hover:border-black">Download CV</button>
                </div>
            </div>
        </section>
    );
};

export default About;
