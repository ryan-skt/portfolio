
import React from 'react'
import { HoverBorderGradient } from '../ui/HoverBorderGradient.jsx';
import { SparklesCore } from '../ui/Sparkles.jsx';
import LightRays from '../ui/LightRays.jsx';
import ShinyText from '../ui/ShinyText.jsx';

export default function Hero() {
  return (
    <>
      {/* Background Effects */}
      <div className="absolute inset-0 top-6 bottom-0 z-0 pointer-events-none overflow-hidden">

        {/* Light Rays */}
        <div className="absolute inset-0 z-10">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={1}
            rayLength={1}
            followMouse={true}
            mouseInfluence={0.3}
            noiseAmount={0}
            distortion={0}
          />
        </div>

        {/* Sparkles */}
        <div className="absolute inset-0 z-20 flex justify-center mix-blend-screen">
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.8}
            particleDensity={20}
            className="w-[85%] h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-screen px-4 gap-4 ">

        {/* Availability Badge */}
        <div className="flex items-center justify-center m-2 hover:cursor-pointer">
          <div className="relative flex items-center gap-3 px-4 py-1 bg-black backdrop-blur-sm border border-gray-700 rounded-full ">
            
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>

            <ShinyText
              size="sm"
              weight="medium"
              baseColor="white"
              shineColor="white"
              intensity={0.9}
              speed={5}
              direction="left-to-right"
              className="relative text-sm"
            >
              Open to Frontend / Web Opportunities
            </ShinyText>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-light mb-8">
            <span className="text-white">Hey, </span>
            <span className="text-white italic">I'm Ryan Sivakoti</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">
              Frontend Developer | React | JavaScript
            </span>
            <br />
            I build modern, responsive web applications with clean UI and smooth user experience.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-32">

          {/* Resume */}
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient
              animated={true}
              as="button"
              containerClassName="rounded-full"
              className="bg-gray-800/50 backdrop-blur-sm text-white rounded-full hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Resume</span>
            </HoverBorderGradient>
          </a>

          {/* Contact */}
          <a href="mailto:sivakotiryan@gmail.com">
            <HoverBorderGradient
              as="button"
              containerClassName="rounded-full"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2"
            >
              <span>Get In Touch</span>
            </HoverBorderGradient>
          </a>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            viewBox="0 0 1920 270"
            preserveAspectRatio="xMidYMid slice"
          >
            <ellipse cx="960" cy="1000" rx="1800" ry="900" fill="black" />

            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="white"
              strokeWidth="3"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9))'
              }}
            />
          </svg>
        </div>
      </div>
    </>
  )
}

