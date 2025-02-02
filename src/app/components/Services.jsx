import Image from "next/image";
import { assets, serviceData } from "../../../assets/assets/assets";
import { motion } from "motion/react";

const Services = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full flex flex-col  justify-center items-center px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo"
      >
        I am a Frontend Developer skilled in React.js, Next.js, Tailwind CSS,
        Firebase, Node.js, and MongoDB, building modern, responsive, and
        scalable web applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, delay: 0.5 }}
        className="grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-8 py-12  hover:shadow-black cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            key={index}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white leading-5">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                alt=""
                src={isDark ? assets.right_arrow_white : assets.right_arrow}
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
