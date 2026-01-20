import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-full  flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-gray-800">Ranjit.dev</div>
        <nav className="space-x-6">
          <a
            href="#home"
            className=" text-lg font-medium  text-gray-600 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#bout"
            className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-gray-600 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
