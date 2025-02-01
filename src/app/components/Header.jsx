"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets/assets";
import bg from "../../../assets/assets/public/header-bg-color.png";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto max-w-3xl flex flex-col gap-4 justify-center items-center h-screen">
      <div className="md:flex justify-between ">
        <div>
          <h3 className="text-lg">Hi ! I'm Abid</h3>
          <h1 className="text-5xl font-bold uppercase md:w-3/5">
            frontend web developer based in London.
          </h1>
          <p>
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div
          className="bg-top bg-no-repeat b"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <Image
            src={assets.profile_img}
            alt="image"
            className=" border w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
