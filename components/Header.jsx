"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/chownow.png";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full">
      <div className=" m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className=" flex justify-center items-center gap-2">
          <Image src={logo} alt="" width={50} height={50} />
          <h1 className="font-bold text-red-500 text-2xl ">ChowNow</h1>
        </Link>
        <ul className=" hidden sm:flex ">
          <li className="p-4 hover:scale-110 ease-in duration-200">
            {" "}
            <Link href="/" className="text-gray-800 hover:text-red-500 ">
              Home
            </Link>{" "}
          </li>
          <li className="p-4  hover:scale-110 ease-in duration-200">
            {" "}
            <Link href="/" className="text-gray-800 hover:text-red-500">
              Menu
            </Link>{" "}
          </li>
          <li className="p-4  hover:scale-110 ease-in duration-200">
            {" "}
            <Link href="/" className="text-gray-800 hover:text-red-500">
              Contact
            </Link>{" "}
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="flex self-end relative cursor-pointer">
          <AiOutlineShoppingCart size={40} className="text-gray-800" />
          <span className="absolute top-[-.4rem] right-[-.2rem] px-[.25rem] py-[.1rem] bg-red-500 rounded-full">
            0
          </span>
        </div>

        {/* mobile menu button */}
        <div onClick={handleNav} className=" flex items-center justify-center sm:hidden z-50">
          {nav ? (
            <AiOutlineClose size={20} className="text-red-500 cursor-pointer" />
          ) : (
            <AiOutlineMenu size={20} className="text-red-500 cursor-pointer" />
          )}
        
          
        </div>
        </div>
        
        {/* mobile menu */}
        <div
          className={
            nav
              ? " sm:hidden absolute top-0 left-auto right-0 bottom-0 flex justify-center  w-[60%] h-full bg-gradient-to-b from-pink-200 to-pink-100 z-30 text-center ease-in duration-300 py-[4rem]"
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center  w-full h-screen bg-gradient-to-b from-pink-100 to-pink-200 z-30 text-center ease-in duration-300 py-[4rem]"
          }
        >
          <ul>
            <li className=" p-4 text-3xl text-gray-800 hover:text-red-500">
              {" "}
              <Link href="/">Home</Link>{" "}
            </li>
            <li className=" p-4 text-3xl text-gray-800 hover:text-red-500">
              {" "}
              <Link href="/">Menu</Link>{" "}
            </li>
            <li className=" p-4 text-3xl text-gray-800 hover:text-red-500">
              {" "}
              <Link href="/">Contact</Link>{" "}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
