'use client';
import { useState } from 'react';
export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
  setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-green-400 p-2 md:flex md:p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-black text-lg sm:ml-3 sm:text-2xl xl:text-4xl">
            Panlasang <span className=" text-white "> Pinoy </span>     
        </h1>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Burger Icon */}
            <div className= "text-4xl" onClick={toggleMenu} >
                &#8801;
            </div>
          </button>
        </div>
      </div>

      {/* Menu Links - Adjusted to appear below the logo and burger */}
      <div className={`${isOpen ? 'block' : 'hidden'} mr-20 md:flex md:items-center w-full md:w-auto`}>
        <ul className=" md:flex md:space-x-6  md:mt-0 text-white">
          <li>
            <a href="blog" className="block px-4 py-2 hover:bg-gray-400 md:hover:bg-transparent md:text-xl">
              Blog
            </a>
          </li>
          <li>
            <a href="ingredients" className="block px-4 py-2 hover:bg-gray-400 md:hover:bg-transparent md:text-xl">
              Ingredients
            </a>
          </li>
          <li>
            <a href="historys" className="block px-4 py-2  hover:bg-gray-400 md:hover:bg-transparent md:text-xl">
              History
            </a>
          </li>
          <li>
            <a href="aboutUs" className=" md:w-28 block px-4 py-2  hover:bg-gray-400 md:hover:bg-transparent md:text-xl">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>    
  );
}