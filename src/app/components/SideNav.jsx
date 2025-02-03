"use client";
import Link from "next/link";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="fixed z-40 mt-64">
      <div className="flex flex-col gap-6 mt-62 text-white items-center">
        <div className="dropdown cursor-pointer dropdown-hover">
          <Link
            tabIndex={0}
            role="button"
            href={"https://www.linkedin.com/in/rm-abed"}
            className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaLinkedinIn />
          </Link>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Linkedin
          </ul>
        </div>
        <div className="dropdown cursor-pointer dropdown-hover">
          <Link
            tabIndex={0}
            role="button"
            href={"https://github.com/RMABID"}
            className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaGithub />
          </Link>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            GitHub
          </ul>
        </div>
        <div className="dropdown cursor-pointer dropdown-hover">
          <Link
            tabIndex={0}
            role="button"
            href="https://www.facebook.com/profile.php?id=61558253872692"
            className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaFacebookF />
          </Link>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Facebook
          </ul>
        </div>
        <div className="dropdown cursor-pointer dropdown-hover">
          <Link
            tabIndex={0}
            role="button"
            href={"https://www.youtube.com/@RMabid3045"}
            className="text-2xl w-10 h-10 bg-black duration-500  transition-all rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaYoutube />
          </Link>

          <ul
            tabIndex={0}
            className="dropdown-content menu hover:translate-x-8 bg-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Youtube
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
