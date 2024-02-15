import { useState } from "react";
import EcomPic from "../Images/E-commerce App Image.png";
import BlogPic from "../Images/BlogR App Image.png";
import ToDoPic from "../Images/To Do App Image.png";
import WeaPic from "../Images/Weather App Image.png"

const array = [
    {
        "Name": "Mac's Store",
        "Link": "https://ecommerce-ola.netlify.app/",
        "Description": "A simple e-commerce website with product listings, shopping cart, and a checkout page.",
        "Description2": "Built using React, Node.js, and Express.",
        "Image": EcomPic
    },
    {
        "Name": "BlogR Clone Application",
        "Link": "https://blogr-ola.netlify.app/",
        "Description": "Recreation of the landing page of a Blog Application.",
        "Description2": "Utilizing the React Framework and CSS Modules for Responsive design.",
        "Image": BlogPic
    },
    {
        "Name": "Jake's To-Do",
        "Link": "https://todoapp-ola.netlify.app/",
        "Description": "Designing a sleek and user-friendly mobile app UI for a social networking platform.",
        "Description2": "Built usiing React Framework and Bootstrap",
        "Image": ToDoPic
    },
    {
        "Name": "NoirWeather",
        "Link": "https://weatherola.netlify.app/",
        "Description": "Creating a responsive weather application .",
        "Description2": "",
        "Image": WeaPic
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
        <div> <p className="text-3xl mt-4 mb-4 text-black text-center font-bold"> Projects</p>
            <div className="flex justify-center items-center bg-gray-100">
                <div className="p-8 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row bg-gray-100">
                    <button onClick={prevbutt} className="text-black self-center mb-4 md:mb-0 md:mr-4">
                        <i className="fa-solid fa-chevron-left fa-2x"></i>
                    </button>
                    <div className="w-full md:w-1/2 flex justify-center border border-black-5 ">
                        <img src={array[num].Image} alt="Project" className="max-h-64 00" />
                    </div>
                    <div className="w-full px-4 md:py-4 md:w-1/2">
                        <div className="text-center mb-6">
                            <p className="text-2xl font-bold mt-8 mb-4">
                                <a href = {array[num].Link} target = "_blank" rel="noreferrer">
                                {array[num].Name}</a></p>
                            <p className="text-gray-700 mb-2">{array[num].Description}</p>
                            <p className="text-gray-700 mb-4">{array[num].Description2}</p>
                        </div>

                    </div>
                    <button onClick={nextbutt} className="text-black self-center mt-4 md:mt-0 md:ml-4">
                        <i className="fa-solid fa-chevron-right fa-2x"></i>
                    </button>
                </div>
            </div>
            <div id="Contact"></div>
        </div>
    )
}
