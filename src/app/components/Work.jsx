// "use client";
import Image from "next/image";
import { assets, workData } from "../../../assets/assets/assets";
import Link from "next/link";
import { motion } from "motion/react";

const Work = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="flex flex-col  justify-center items-center px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-2  lg:grid-cols-4  gap-5 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <Link
            href={`/project/${project?.id}`}
            className="aspect-square bg-no-repeat h-80 bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project?.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md  bottom-5 absolute left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project?.title}</h2>
                <p className="text-sm text-gray-700">{project?.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square aspect flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition ">
                <Image alt="" src={assets?.send_icon} className="w-5" />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full  py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover duration-500 "
      >
        Show more{" "}
        <Image
          alt=""
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
