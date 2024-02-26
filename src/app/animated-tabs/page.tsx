"use client";

import CraftContainer from "./components/craft-container";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "work", label: "Work", path: "/work" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "library", label: "Library", path: "/books" },
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-ful">
      <div className="h-screen flex flex-col justify-center gap-10 mx-auto w-1/2 -mt-8">
        <Link href='/' className="flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer">
          <CornerUpLeft size={14}/>
          <p>back</p>
        </Link>

        <div>
          <h3 className="text-md font-medium">Animated Tabs</h3>
          <p className="text-xs text-gray-500 mt-1">30 March 2023</p>
        </div>

        {/* <p className="text-sm">
        some text of what this is and inspired by
        </p> */}

        <CraftContainer>
          <div className="hidden  md:flex lg:flex sticky bottom-0 space-x-1.5 w-96 rounded-full py-1.5 px-2    backdrop-filter backdrop-blur-xl ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "text-gray-300" : "hover:text-gray-500"
                } relative rounded-full px-4 py-1 text-sm font-lighter text-zinc-350  transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-20 bg-black py-2"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <p> {tab.label}</p>
              </button>
            ))}
          </div>
        </CraftContainer>
      </div>
    </div>
  );
};

export default AnimatedTabs;

{
  /* <CraftContainer>
  <div className="hidden  md:flex lg:flex sticky bottom-0 space-x-1.5 w-96 rounded-full py-1.5 px-2  bg-[#ece8e8]   backdrop-filter backdrop-blur-xl ">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`${
          activeTab === tab.id ? "text-myColor" : "hover:text-myColor"
        } relative rounded-full px-4 py-1 text-sm font-lighter text-zinc-350  transition focus-visible:outline-2`}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {activeTab === tab.id && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 -z-20 bg-white  py-2 "
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <p> {tab.label}</p>
      </button>
    ))}
  </div>
</CraftContainer>; */
}

