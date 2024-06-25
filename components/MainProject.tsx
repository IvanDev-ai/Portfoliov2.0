"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScroll";
import Image from "next/image";
import Image2 from "@/public/lastproject.png";

const MainProject = () => {
  return (
    <div className="flex flex-col overflow-hidden" id="projects">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold dark:text-white">
              Personally, one of my<br />
              <span className="text-4xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-none">
                Best Projects.
              </span>
            </h1>
            <span className="text-lg text-black-700 opacity-50">
              ~ Made by me.
            </span>
          </>
        }
        FooterComponent={
          <>
            <h1 className="heading text-4xl lg:text-6xl font-bold lg:mr-[6rem] mb-4 lg:mb-0">
              PSYCHOGPT
            </h1>
            <div className="text-lg lg:text-xl">
              <p className="pb-5 text-black-800">
                Live Demo: <a className="text-black-400" href="https://psychogpt.streamlit.app/">Demo</a>
              </p>
              <p className="pb-12 text-black-800">
                Github: <a className="text-black-400" href="https://github.com/IvanDev-ai/PsychoGPT_ia"> PsychoGPT</a>
              </p>
              <p className="pb-2 text-black-800">
                For the development of this project, the <span className="text-black-400">fine-tuning</span> technique was implemented using the <span className="text-black-400">GPT-2</span> model from HuggingFace with <span className="text-black-400">1.5 million</span> parameters.
              </p>
              <p className="pb-2 text-black-800">
                The database used to train the model consisted of <span className="text-black-400">10,000 public conversations</span> between psychologists and patients.
              </p>
              <p className="pb-2 text-black-800">
                Additionally, it has the capability to <span className="text-black-400">translate messages</span> to any language. This was achieved thanks to the use of specific Python libraries.
              </p>
            </div>

          </>
        }
      >
        <Image
          src={Image2}
          alt="last project"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default MainProject;
