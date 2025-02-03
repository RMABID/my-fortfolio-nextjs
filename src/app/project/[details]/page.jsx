"use client";
import React, { use, useEffect, useState } from "react";
import { assets, workData } from "../../../../assets/assets/assets";
import Image from "next/image";

const page = ({ params }) => {
  const id = use(params);
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const data = workData[id.details];
    setProjectDetails(data);
  }, [id.details]);

  console.log(projectDetails);

  return (
    <div className="my-4 flex lg:flex-row flex-col ">
      <div className="ml-4 -mt-12">
        <a
          href="/"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full  py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover duration-500 "
        >
          <Image alt="" src={assets.right_arrow_bold} className="w-4" />
          Show more
        </a>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900">
          {projectDetails?.project_details?.project_name}
        </h1>
        <p className="mt-4 text-gray-700">
          {projectDetails?.project_details?.project_overview}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Technologies Used
          </h2>
          <p className="mt-2 text-gray-700">
            {projectDetails?.project_details?.technologies}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {projectDetails?.project_details?.features?.map(
              (feature, index) => (
                <li key={index}>{feature}</li>
              )
            )}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Challenges & Solutions
          </h2>
          <ul className="mt-2 space-y-4">
            {projectDetails?.project_details?.challenges?.map((item, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">
                  🔹 {item.challenge}
                </p>
                <p className="text-gray-700">✅ {item.solution}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a
            href={projectDetails?.project_details?.live_site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium"
          >
            Visit Live Site 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
