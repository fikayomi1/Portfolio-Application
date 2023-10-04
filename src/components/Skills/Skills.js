import React from 'react';

const Skills = () => {
    return (
        <section className=" py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:m-3">
                    <div className="bg-white p-6 rounded-lg shadow-lg ">
                        <h3 className="text-xl font-bold mb-4 bg-gray-100 rounded-xl py-2">Frontend Development</h3>
                        <div className="text-black text-md rounded-xl bg-gray-100 py-3">
                            <p className = "py-1"><i className="fab fa-react"></i> React</p>
                            <p className = "py-1"><i className="fab fa-html5"></i> HTML5</p>
                            <p className = "py-1"><i className="fab fa-css3"></i> CSS3</p>
                            <p className = "py-1"><i className="fab fa-js"></i> JavaScript (ES6+)</p>
                            <p className = "py-1"><i className="fab fa-bootstrap"></i> Bootstrap</p>
                            <p className = "py-1"><i className="fab fa-css3"></i> Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 bg-gray-100 rounded-xl py-2">Backend Development</h3>
                        <div className="text-black text-md rounded-xl bg-gray-100 py-3">
                            <p className = "py-1"><i className="fab fa-node-js"></i> Node.js</p>
                            <p className = "py-1"><i className="fab fa-node-js"></i> Express.js</p>
                            <p>REST APIs</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 bg-gray-100 rounded-xl py-2">Other Skills</h3>
                        <div className="text-black text-md rounded-xl bg-gray-100 py-3">
                            <p className = "py-1"><i className="fas fa-mobile-alt"></i> Responsive Web Design</p>
                            <p className = "py-1"><i className="fab fa-git"></i> Git & Version Control</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
