"use client";
import React from "react";
import Typewriter from "./ui/Typewriter"; 
import InfiniteLooper from "./ui/InfiniteLooper"; 

export function FrontPage() {
    return (
        <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="absolute inset-0 flex items-center justify-center">
                <InfiniteLooper speed={20} direction="left">
                    <span className="lg:text-9xl text-5xl font-bold text-gray-700 opacity-30">
                        Iván L. Martín &nbsp; Iván L. Martín &nbsp; Iván L. Martín &nbsp; Iván L. Martín
                    </span>
                </InfiniteLooper>
            </div>
            
            
            <h1 className="text-4xl pb-20 sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center text-white relative z-20">
                <Typewriter texts={["AI Engineer", "Robotics Student", "Web Developer"]} />
            </h1>
            
            <div className="bottom-4 text-center w-full pt-60 z-20">
                <p className="mb-2 text-white">Desliza hacia abajo</p>
                <svg className="w-6 h-6 mx-auto animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    );
}
