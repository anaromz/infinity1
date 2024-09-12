"use client";
import { Link } from "react-router-dom";
import useScroll from "../../lib/hooks/useScroll";
import useSmoothScroll from "../../lib/hooks/useSmoothScroll";
import { scrollToSection } from "../../lib/hooks/scrollHelper";
import { useEffect, useState } from "react";
// import { useActiveSection } from "../../lib/hooks/useActiveSection";

const navmenu = [
  { name: "Memories", link: "/memories" },
  { name: "Gallery", link: "/gallery" },
  { name: "My Letter", link: "/letter" },
  { name: "Future Plan", link: "/future_plan" },
];

export default function NavBar({ sectionRefs }) {
  const [activeSection, setActiveSection] = useState("");
  const scrolled = useScroll(50);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.forEach((section) => {
        const offsetTop = section.ref.current.offsetTop;
        const offsetBottom = offsetTop + section.ref.current.offsetHeight;

        if (window.scrollY >= offsetTop - 50 && window.scrollY < offsetBottom) {
          setActiveSection(section.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);
  return (
    <div
      className={`fixed top-0 flex items-center w-full ${
        scrolled
          ? "border-b text-black border-[#c09b33] bg-white/50 backdrop-blur-xl"
          : "border-b text-[#c09b33] border-[#c09b33] bg-white"
      } z-30 transition-all`}
    >
      <div className="flex-1 mx-[5rem] mt-3 text-[30px] flex ">
        <Link className="normal-case text-lg md:text-xl" to="/">
          <div className="items-center flex font-sans leading-tight space-x-2">
            <img
              src="/infinity.png"
              className="w-[10rem] h-[5rem]"
              alt="logo"
            />

            {/* <p className="mx-[0.3rem]">
              {" "}
              <span className="text-2xl font-mono md:text-[50px] font-bold">
                I
              </span>
              nfinity
            </p> */}
          </div>
        </Link>
      </div>

      <div className="sm:flex hidden mr-[3rem]">
        <ul className="flex justify-between  rounded-2xl py-1 px-2 space-x-4">
          {navmenu.map((curr, index) => {
            const scrollToSection = useSmoothScroll(curr.link);
            return (
              <div
                className="flex items-center font-semibold border h-[2.5rem] px-2 border-[#c09b33] rounded-full"
                key={index}
              >
                <Link
                  onClick={() => scrollToSection(sectionRefs[curr.link])}
                  to={curr.link}
                  className={`cursor-pointer py-2 px-4 ${
                    activeSection === curr.name ? "bg-gray-300" : ""
                  }`}
                >
                  {curr.name}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
