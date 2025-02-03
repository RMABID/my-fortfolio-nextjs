"use client";
import Link from "next/link";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="fixed z-40 mt-64">
      <div className="flex flex-col gap-6 mt-62 text-white items-center">
        <Link
          href={"https://www.linkedin.com/in/rm-abed"}
          className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={"https://github.com/RMABID"}
          className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61558253872692"
          className=" text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40"
        >
          <FaFacebookF />
        </Link>

        <Link
          href={"https://www.youtube.com/@RMabid3045"}
          className="text-2xl w-10 h-10 bg-black rounded-xl flex items-center justify-center  z-40"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
