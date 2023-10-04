import { useState } from "react";
import Pic from "../Images/Ola.png";
import Pic2 from "../Images/Ola2.jpg";
import Pic3 from "../Images/Ola3.jpg";

const array = [
    {
        "Name": "Ecommerce Application",
        "Description": "A full-featured ecommerce website with product listings, shopping cart, and secure checkout.",
        "Description2": "Built using React, Node.js, and Express.",
        "Image": Pic
    },
    {
        "Name": "Portfolio Redesign",
        "Description": "Redesigning a portfolio website with a fresh look and improved user experience.",
        "Description2": "Utilizing modern design trends and responsive layout.",
        "Image": Pic2
    },
    {
        "Name": "Mobile App UI",
        "Description": "Designing a sleek and user-friendly mobile app UI for a social networking platform.",
        "Description2": "Focused on intuitive navigation and engaging visuals.",
        "Image": Pic3
    },
    {
        "Name": "Blog Website",
        "Description": "Creating a responsive blog website with engaging content on various topics.",
        "Description2": "Implementing features like user authentication and comment sections.",
        "Image": Pic2
    }
]

export default function Project() {
    const [num, setNum] = useState(0);

    function prevbutt() {
        setNum(((prev) => (prev - 1 + array.length) % array.length))
    }

    function nextbutt() {
        setNum(((prev) => (prev + 1) % array.length))
    }

    return (
        <div> <p className = "text-3xl mt-4 mb-4 text-black text-center font-bold"> Projects</p>
        <div className="flex justify-center items-center bg-gray-100">
            <div className="p-8 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row bg-gray-100">
                <button onClick={prevbutt} className="text-black self-center mb-4 md:mb-0 md:mr-4">
                    <i className="fa-solid fa-chevron-left fa-2x"></i>
                </button>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={array[num].Image} alt="Project" className="max-h-64" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold mt-8 mb-4">{array[num].Name}</p>
                        <p className="text-gray-700 mb-2">{array[num].Description}</p>
                        <p className="text-gray-700 mb-4">{array[num].Description2}</p>
                    </div>
                    {/* <p className="text-center mt-4 text-gray-700">Current Index: {num + 1} of {array.length}</p> */}
                </div>
                <button onClick={nextbutt} className="text-black self-center mt-4 md:mt-0 md:ml-4">
                    <i className="fa-solid fa-chevron-right fa-2x"></i>
                </button>
            </div>
        </div>
        </div>
    )
}
