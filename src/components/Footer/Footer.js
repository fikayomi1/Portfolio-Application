import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="bg-transparent flex  items-center">
        <i className="bg-transparent fas fa-copyright mr-2"></i>
        <span className="bg-transparent mr-2 font-bold text-lg">Odedunmoye Olaoluwa 2023</span>
      </div>
      <div className="bg-transparent flex items-center">
        <a
          href="https://twitter.com/Femi032"
          className=" bg-transparent text-gray-100 mr-8 "
          target="_blank"
          rel="noopener noreferrer">
          <i className="bg-transparent fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/_fem.i_/"
          className="bg-transparent text-gray-100 mr-8"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bg-transparent fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/olaoluwa-odedunmoye-23ab891ab/"
          className="bg-transparent text-gray-100 mr-8"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bg-transparent fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.pinterest.com/olaoluwaodedunmoye/"
          className="bg-transparent text-gray-100 mr-8"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bg-transparent fab fa-pinterest"></i>
        </a>
        <a
          href="https://github.com/fikayomi1"
          className="bg-transparent text-gray-100 mr-8"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bg-transparent fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
