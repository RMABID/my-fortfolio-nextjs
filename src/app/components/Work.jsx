import Image from "next/image";
import { assets, workData } from "../../../assets/assets/assets";

const Work = () => {
  return (
    <div
      id="work"
      className="flex flex-col  justify-center items-center px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid md:grid-cols-3  lg:grid-cols-4  gap-5 my-10">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat h-60 lg:h-80 sm:h-60 bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md  bottom-5 absolute left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square aspect flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition ">
                <Image alt="" src={assets.send_icon} className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full  py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 "
      >
        Show more <Image alt="" src={assets.right_arrow_bold} className="w-4" />
      </a>
    </div>
  );
};

export default Work;
