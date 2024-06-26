"use client";
import React, { useState } from "react";
import { navLinks } from "@/contants";

const Navbar = ({border, toggleBorder}:any) => {
  const [toggle, setToggle] = useState(false);




  return (
    <div className={ `full flex py-6 justify-between items-center ${border ? `border border-red-500`: ``}`}>
      <img src={"/logo.svg"} alt="hookank" className="w-[124px] h-[32px]" onClick={toggleBorder}  />
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
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt={"Menu"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === 2 ? "text-green-500" : "mb-4 "
                } text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
