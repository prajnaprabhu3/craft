"use client";

import CraftContainer from "../ui/craft-container";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      <div className=" h-screen first:flex flex-col justify-center gap-10 mx-auto w-1/2 -mt-8">
        <div>
          <h3 className="text-md font-medium">Animated Tabs</h3>
          <p className="text-sm text-gray-500 mt-1">30 March 2023</p>
        </div>

        <p className="text-md">
          From Stripe’s wonderful blog. Uses Web Animations API. The trick is to
          duplicate the tab list, one in default styling, one with active
          styling, and use clip path to show the active indicator. This way, you
          can use any colors you want without relying on solutions that use
          mix-blend-mode. Make sure to mark the duplicate items with
          aria-hidden.
        </p>

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
