"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";
import TagGame from "@/public/taggame.gif";
import AppleImg from "@/public/AppleImg.png";
import BrainTumorImage from "@/public/braintumorcnn.png";

const content = [
  {
    title: "AI vs AI tag Game",
    description: `
    <p className="pb-5 text-black-800">Live Demo: <a className="text-black-400" href="https://ai-escapegame.streamlit.app/">Demo</a></p>
    <p className="pb-12 text-black-800">Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/AI-vs-AI---Tag-Game"> Tag-Game</a></p>
    <p className="text-black-800"><span className='text-black-400'>2 neural networks</span>, a <span className='text-black-400'>hunter</span> that moves diagonally, and a <span className='text-black-400'>prey</span> that doesn't move diagonally but advances two cells every two turns. Both agents are trained using <span className='text-black-400'>reinforcement learning</span>.</p>    
    `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={TagGame}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Tag Game"
        />
      </div>
    ),
  },
  {
    title: "BrainTumorCNN",
    description: `
    <p className="pb-5 text-black-800">Live Demo: <a className="text-black-400" href="https://braintumorcnn.streamlit.app/">Demo</a></p>
    <p className="pb-12 text-black-800">Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/BrainTumorCNN"> BrainTumorCNN</a></p>
    <p className="text-black-800">A <span className='text-black-400'>convolutional neural network</span> (CNN) has been developed to detect and classify different types of <span className='text-black-400'>brain tumors</span>, such as glioma, meningioma, and pituitary. Using <span className='text-black-400'>magnetic resonance imaging</span> (MRI) images.</p>    
    `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={BrainTumorImage}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Brain Tumor CNN"
        />
      </div>
    ),
  },
  {
    title: "Apple's Clone",
    description: `
    <p className="pb-5 text-black-800">Live Demo: <a className="text-black-400" href="https://appleclone-five.vercel.app/">Live Demo</a></p>
    <p className="pb-12 text-black-800">Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/Courses/tree/main/Course3%20-%20JS/AppleWebsite"> Apple's Clone</a></p>
    <p className="text-black-800">A <span className='text-black-400'>clone</span> of the <span className='text-black-400'>iPhone 15 Pro</span> website from <span className='text-black-400'>Apple</span> using <span className='text-black-400'>Three.js</span> and <span className='text-black-400'>GSAP</span>.</p>
    `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={AppleImg}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Apple Clone"
        />
      </div>
    ),
  }
];


const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-0 w-full">
      <h1 className="heading lg:pt-[20rem]">
        Other Projects{" "}
        <span className="text-lg text-black-700 opacity-50">~ Equally important.</span>
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default Projects
