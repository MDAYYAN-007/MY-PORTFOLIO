"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState('About');

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <>
      <div className="bg-white shadow-xl rounded-3xl border border-gray-300 w-[70vw] max-w-[930px] text-gray-800 pb-1 min-h-[630px]">
        <Navbar setActiveSection={setActiveSection} current={activeSection}/>
        <div className="px-10 my-10">
          {renderSection()}
        </div>
      </div>
    </>
  );
}
