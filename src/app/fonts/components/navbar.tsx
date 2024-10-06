import React from 'react';
import Image from 'next/image'
import icon from '../../assets/icon.ico'
const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image 
        src={icon}
        alt="Logo"
        width={50}
        className='rounded-full'
        
        />
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
