"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets/assets";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">RM Abid</h2>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image alt="" src={assets.mail_icon} className="w-6" />
          mdabidaliimran@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 William Mark. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className="flex items-center gap-1 "
              target="_blank"
              href="https://github.com/RMABID"
            >
              <FaGithub /> Github
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 "
              target="_blank"
              href="https://github.com/RMABID"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 "
              target="_blank"
              href="https://github.com/RMABID"
            >
              <FaFacebook /> Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
