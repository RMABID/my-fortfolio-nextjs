"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDark }) => {
  return (
    <div className="w-11/12  mx-auto max-w-3xl flex flex-col gap-4 justify-center items-center h-screen">
      <div className="flex flex-col justify-center space-y-4 text-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt="image"
            className="bg-gray-400/20 dark:bg-white/50 border rounded-full aspect-square object-cover p-2 w-36"
          />
        </motion.div>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl flex items-center gap-2 md:text-2xl mb-3 font-Ovo "
        >
          Hi ! I'm Abid{" "}
          <Image alt="" src={assets.hand_icon} className="w-6 -mt-4" />
        </motion.h3>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl text-center sm:text-6xl lg:text-[66px] font-Ovo"
        >
          frontend web developer based in Bangladesh.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo"
        >
          I am a passionate Frontend Developer from Mymensingh, Bangladesh, with
          1 year of experience building dynamic and responsive web applications.
          Proficient in React.js, Next.js, Tailwind CSS, and Firebase, I
          specialize in crafting seamless user experiences with modern UI
          frameworks. Additionally, I have hands-on experience with backend
          technologies like Node.js and MongoDB, enabling me to develop
          full-stack applications. I am always eager to learn and apply new
          technologies, striving to create impactful digital solutions.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 border rounded-full bg-black dark:bg-white dark:text-black dark:border-gray-500 text-white flex items-center gap-2"
          >
            Contact me
            <Image
              src={isDark ? assets.right_arrow_bold : assets.right_arrow_white}
              alt="image"
              className=" w-4"
            />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Resume_of_Abid_Ali_Imran.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            My resume
            <Image
              src={isDark ? assets.project_icon_dark : assets.download_icon}
              alt="image"
              className=" w-4"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
