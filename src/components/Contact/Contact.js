import React from 'react';
import styles from "./Contact.module.css"
import { useState } from 'react';
// import { useRef } from 'react';

export default function Contact () {

    const [contactDetails, setcontactDetails] = useState(
        {
            "name" : "",
            "email" : "",
            "subject": "",
            "message": "",
        }
    )
    
    function handleChange(e) {

    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 border border-gray-300 shadow-full rounded-lg mt-20 mb-10">
  <h2 className="text-2xl font-bold mb-4 text-center bg-white">Contact Me</h2>
  <form className="flex flex-col bg-white">
    <div className="flex mb-4 bg-white">
      <div className="w-1/2 mr-2 bg-white">
        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label> */}
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-700 bg-white"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="w-1/2 ml-2 bg-white">
        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label> */}
        <input
          className="shadow border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-700"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
    </div>
    <div className="mb-4 bg-white">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label> */}
      <input
        className="shadow border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-700 "
        id="subject"
        type="text"
        placeholder="Subject"
      />
    </div>
    <div className="mb-6 bg-white">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label> */}
      <textarea
        className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-700 h-32 resize-none"
        id="message"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full border border-black w-full"
      type="button"
    >
      Contact Me
    </button>
  </form>
</div>

      
    )
}

//useRef fot the values of the form
//chek for text area
// prevent default action for submit button