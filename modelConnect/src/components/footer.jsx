import React from 'react';
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

function Footer() {
  return (
    <footer className="bg-gray-100 py-14">
      <div className="container mx-auto flex md:flex-row justify-between items-center px-6">

        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/modelconnect_logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">ModelConnect</span>
        </div>

        <div className="flex space-x-8 text-gray-700 text-2xl">
          <a href="#" className="hover:text-teal-500">
            <InstagramLogoIcon className="w-8 h-8"/>
          </a>
          <a href="#" className="hover:text-teal-500">
            <TwitterLogoIcon className="w-8 h-8"/>
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
