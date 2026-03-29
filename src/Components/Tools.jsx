import React from 'react'
import LogoLoop from "../ui/LogoLoop";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiGit
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techLogos = [
  {
    node: <SiReact className="text-[40px] text-[#61DAFB]" />,
    label: "React"
  },
  {
    node: <SiHtml5 className="text-[40px] text-[#E34F26]" />,
    label: "HTML" 
  },
  {
    node: <SiCss3 className="text-[40px] text-[#1572B6]" />, 
    label: "CSS"
  },
  {
    node: <SiJavascript className="text-[40px] text-[#F7DF1E]" />, 
    label: "JavaScript"
  },
  {
    node: <SiTailwindcss className="text-[40px] text-[#38BDF8]" />, 
    label: "Tailwind CSS"
  },
  {
    node: <SiVite className="text-[40px] text-[#646CFF]" />, 
    label: "Vite"
  },
  {
    node: <SiNodedotjs className="text-[40px] text-[#339933]" />,
    label: "Node.js"
  },
  {
    node: <SiExpress className="text-[40px] text-[#FFFFFF]" />, 
    label: "Express"
  },
  {
    node: <SiGithub className="text-[40px] text-[#FFFFFF]" />, 
    label: "GitHub"
  },
  {
    node: <SiGit className="text-[40px] text-[#F05032]" />, 
    label: "Git"
  },
  {
    node: <FaAws className="text-[40px] text-[#FF9900]" />, 
    label: "AWS"
  }
];

export default function Skills() {
  return (
    <div className="h-full relative z-[50] top-0">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology logos"
        renderItem={(item) => (
          <div className="flex flex-col items-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform duration-500">
            <span>{item.node}</span>
            <span className="text-xs text-gray-300">
              {item.label}
            </span>
          </div>
        )}
      />
    </div>
  )
}