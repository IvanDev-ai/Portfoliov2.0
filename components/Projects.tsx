"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";
import TagGame from "@/public/taggame.gif";
import BrainTumorImage from "@/public/braintumorcnn.png";

const content = [
  {
    title: "AI vs AI tag Game",
    description: `
    <p className="pb-5 text-black-800">Live Demo: <a className="text-black-400" href="https://ai-escapegame.streamlit.app/">Demo</a></p>
    <p className="pb-12 text-black-800">Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/AI-vs-AI---Tag-Game"> Tag-Game</a></p>
    <p className="text-black-800"><span className='text-black-400'>2 redes neuronales</span>, un <span className='text-black-400'>cazador</span> que se mueve en diagonal, y una <span className='text-black-400'>presa</span> que no se mueve en diagonal pero avanza dos celdas cada dos turnos. Ambos agentes son entrenados mediante <span className='text-black-400'>aprendizaje por refuerzo</span>.</p>    
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
    <p className="text-black-800">Se ha desarrollado una <span className='text-black-400'>red neuronal convolucional</span> (CNN) con el propósito de detectar y clasificar distintos tipos de <span className='text-black-400'>tumores cerebrales</span>, como glioma, meningioma y pituitaria. A partir de imágenes de <span className='text-black-400'>resonancia magnética</span> (MRI).</p>    
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
    title: "AI vs AI tag Game",
    description: `
    <p className="pb-5 text-black-800">Live Demo: <a className="text-black-400" href="https://psychogpt.streamlit.app/">Demo</a></p>
    <p className="pb-12 text-black-800">Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/PsychoGPT_ia"> PsychoGPT</a></p>
    <p className="text-black-800"><span className='text-black-400'>2 redes neuronales</span>, un <span className='text-black-400'>cazador</span> que se mueve en diagonal, y una <span className='text-black-400'>presa</span> que no se mueve en diagonal pero avanza dos celdas cada dos turnos. Ambos agentes son entrenados mediante <span className='text-black-400'>aprendizaje por refuerzo</span>.</p>    
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
