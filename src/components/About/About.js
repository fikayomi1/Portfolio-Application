import React from 'react';

//Tailwind is mobile first approach

const About = () => {
    return (
        

            <div className="shadow-2xl rounded-3xl bg-white text-center mx-6 px-10 py-8 font-sans md:mx-20 md:px-40">
                <h2 className="text-3xl font-bold bg-white ">About Me</h2>
                <div className="bg-white mt-2">
                    <p className="bg-white text-justify p-2 text-lg md: text-base">
                        Hi, I'm Odedunmoye Olaoluwa, a passionate Frontend Developer based in Nigeria. I specialize in crafting beautiful and functional user interfaces using React, Bootstrap, and Tailwind CSS.
                    </p>
                    <p className="bg-white text-justify p-2 text-lg md: text-base">
                        I believe in the power of clean code and intuitive design to create exceptional web experiences. With a strong eye for detail and a love for problem-solving, I'm committed to delivering projects that exceed client expectations.

                    </p>
                    <button className="mt-4 bg-black text-white font-semibold rounded-full px-4 py-3 border border-black transition-all hover:bg-white hover:text-black hover:border-black"><a href = "https://ola-resume.tiiny.site/" className ="bg-transparent hover:bg-white" target =" _blank" rel = "noopener noreferrer">Check CV</a></button>
                </div>
                <div id="Skills"></div>
            </div>
            
        
    );
};

export default About;
