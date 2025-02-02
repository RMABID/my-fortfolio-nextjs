"use client";
import Image from "next/image";
import { assets } from "../../../assets/assets/assets";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ee07eef-58be-4337-8222-e236290a8a59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="flex bg-contact_bg dark:bg-none flex-col  bg-center bg-[length:90%_auto]  bg-no-repeat justify-center items-center px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="w-full md:max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="flex-1 dark:bg-darkHover/30 dark:border-white/90 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="flex-1 p-3 dark:bg-darkHover/30 dark:border-white/90 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
        </div>
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 dark:bg-darkHover/30 dark:border-white/90 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          className="dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          type="submit"
        >
          Submit Now{" "}
          <Image alt="" src={assets.right_arrow_white} className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
