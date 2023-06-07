// use rafce for react arrow function
import { styles } from "../styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { github, linkedin } from "../assets";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const footer = () => {
  return (
    <footer
      className={`${styles.paddingx} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Deandre &nbsp;<span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li>
            <a href="https://github.com/dgardene">
              <img src={github} className="w-9 h-9 object-contain" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/deandre-gardener/">
              <img src={linkedin} className="w-9 h-9 object-contain" />
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default footer;
