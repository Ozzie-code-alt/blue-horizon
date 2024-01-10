"use client";
import React, { useState } from "react";
import { navLinks } from "@/contants";
import { close, logo, menu } from "../public";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border border-red-500 w-full flex py-6 justify-between items-center ">
      <img src={"/logo.svg"} alt="hookank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0 " : "mr-10 "
            } text-white`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}

      </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={ toggle ? "/close.svg" : "/menu.svg" } />
        </div>
    </div>
  );
};

export default Navbar;
