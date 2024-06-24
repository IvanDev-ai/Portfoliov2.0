"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import parse from "html-react-parser";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            className="h-full flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <motion.div
                            key={item.title + index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeCard === index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="my-80 sticky top-1/2 transform -translate-y-1/2"
                        >
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl lg:text-5xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 }}
                                className="text-kg max-w-sm mt-10 text-slate-300"
                            >
                                {parse(item.description)}
                            </motion.div>
                        </motion.div>
                    ))}
                    <div className="lg:h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:inline h-60 w-80 rounded-md mt-80 mb-80 bg-white sticky top-1/2 transform -translate-y-1/2 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
