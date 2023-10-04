import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="bg-transparent flex  items-center">
        <i className="bg-transparent fas fa-copyright mr-2"></i>
        <span className="bg-transparent mr-2">2023 - Odedunmoye Olaoluwa</span>
      </div>
      <div className="bg-transparent flex items-center">
        <a href="#" className=" bg-transparent text-gray-100 mr-8 ">
          <i className="bg-transparent fab fa-twitter"></i>
        </a>
        <a href="#" className="bg-transparent text-gray-100 mr-8">
          <i className="bg-transparent fab fa-instagram"></i>
        </a>
        <a href="#" className="bg-transparent text-gray-100 mr-8">
          <i className="bg-transparent fab fa-linkedin"></i>
        </a>
        <a href="#" className="bg-transparent text-gray-100 mr-8">
          <i className="bg-transparent fab fa-pinterest"></i>
        </a>
        <a href="#" className="bg-transparent text-gray-100 mr-8">
          <i className="bg-transparent fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
