"use client";
import Link from "next/link";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="fixed z-40 mt-64">
      <div className="flex flex-col gap-6 mt-62 text-white items-center">
        <Link
          href={"https://www.linkedin.com/in/rm-abed"}
          className="dropdown  dropdown-hover"
        >
          <div
            tabIndex={0}
            role="button"
            className="text-2xl w-10 h-10 bg-black dark:bg-white dark:text-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaLinkedinIn />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black dark:bg-white dark:text-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Linkedin
          </ul>
        </Link>

        <Link
          href={"https://github.com/RMABID"}
          className="dropdown  dropdown-hover"
        >
          <div
            tabIndex={0}
            role="button"
            className="text-2xl w-10 h-10 bg-black dark:bg-white dark:text-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaGithub />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black dark:bg-white dark:text-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            GitHub
          </ul>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61558253872692"
          className="dropdown  dropdown-hover"
        >
          <div
            tabIndex={0}
            role="button"
            className="text-2xl w-10 h-10 bg-black dark:bg-white dark:text-black rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaFacebookF />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black dark:bg-white dark:text-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Facebook
          </ul>
        </Link>
        <Link
          href={"https://www.youtube.com/@RMabid3045"}
          className="dropdown  dropdown-hover"
        >
          <div
            tabIndex={0}
            role="button"
            className="text-2xl w-10 h-10 bg-black duration-500 dark:bg-white dark:text-black transition-all rounded-xl flex items-center justify-center cursor-pointer z-40"
          >
            <FaYoutube />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black dark:bg-white dark:text-black rounded-box z-1 w-40 ml-11 -mt-11 cursor-pointer p-2 shadow-sm"
          >
            Youtube
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
