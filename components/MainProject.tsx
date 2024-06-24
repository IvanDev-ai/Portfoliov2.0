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
                Para el desarrollo de este proyecto, se implementó la técnica de <span className="text-black-400">fine-tuning</span> utilizando el modelo <span className="text-black-400">GPT-2</span> de HuggingFace con <span className="text-black-400">1.5 millones</span> de parámetros.
              </p>
              <p className="pb-2 text-black-800">
                La base de datos utilizada para entrenar el modelo constó de <span className="text-black-400">10,000 conversaciones</span> públicas entre psicólogos y pacientes.
              </p>
              <p className="pb-2 text-black-800">
                Además dispone de capacidad para <span className="text-black-400">traducir mensajes</span> a cualquier idioma. Esto se logró gracias al uso de bibliotecas de Python específicas.
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
