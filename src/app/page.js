"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import SideNav from "./components/SideNav";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDark]);

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <SideNav />
      <Header isDark={isDark} />
      <About isDark={isDark} />
      <Services isDark={isDark} />
      <Work isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </>
  );
}
