"use client";
import { useState } from "react";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/conffeti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "imartin.desarrollo@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 mx-[2rem] lg:mx-0 relative overflow-hidden bg-gradient-to-tl from-black-600 from-85% to-black-500 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor:
          "linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%);",
      }}
    >
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div
          className={`font-sans text-black-400 text-lg lg:text-3xl font-bold z-10`}
        >
          {title}
        </div>
        <div className="font-sans text-black-500 font-extralight md:max-w-full pt-5 md:text-xs lg:text-base text-sm z-10">
          {description}
        </div>
        {id === 6 && (
          <div className="mt-5 relative">
            <div
              className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                }`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <button onClick={handleCopy} className="mt-8 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300 ">
              {copied ? "Email is Copied!" : "Copy my email address"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};