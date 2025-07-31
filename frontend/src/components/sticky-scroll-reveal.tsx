"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  isDarkMode = true,
  isJapanese = false,
}: {
  content: {
    title: string;
    titleJapanese?: string;
    description: string;
    descriptionJapanese?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  isDarkMode?: boolean;
  isJapanese?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
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
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColorsDark = [
    "rgba(15, 23, 42, 0.7)", // slate-900 with transparency
    "rgba(0, 0, 0, 0.6)",   // black with transparency
    "rgba(23, 23, 23, 0.7)", // neutral-900 with transparency
  ];
  const backgroundColorsLight = [
    "rgba(241, 245, 249, 0.7)", // slate-100 with transparency
    "rgba(255, 255, 255, 0.6)", // white with transparency
    "rgba(229, 231, 235, 0.7)", // neutral-200 with transparency
  ];
  const linearGradientsDark = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];
  const linearGradientsLight = [
    "linear-gradient(to bottom right, #bae6fd, #bbf7d0)", // cyan-200 to emerald-200
    "linear-gradient(to bottom right, #f9a8d4, #c7d2fe)", // pink-200 to indigo-200
    "linear-gradient(to bottom right, #fdba74, #fde68a)", // orange-200 to yellow-200
  ];

  const backgroundColors = isDarkMode ? backgroundColorsDark : backgroundColorsLight;
  const linearGradients = isDarkMode ? linearGradientsDark : linearGradientsLight;

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, isDarkMode]);
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-8 overflow-y-auto rounded-2xl p-2"
      ref={ref}
    >
      <div className="div relative flex items-start px-2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={(isJapanese ? item.titleJapanese ?? item.title : item.title) + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={
                  isDarkMode
                    ? "text-2xl font-bold text-slate-100"
                    : "text-2xl font-bold text-slate-900"
                }
              >
                {isJapanese ? item.titleJapanese ?? item.title : item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={
                  isDarkMode
                    ? "text-kg mt-10 max-w-sm text-slate-300"
                    : "text-kg mt-10 max-w-sm text-slate-700"
                }
              >
                {isJapanese ? item.descriptionJapanese ?? item.description : item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          isDarkMode
            ? "sticky top-10 bot-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-white lg:block"
            : "sticky top-10 bot-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-slate-50 lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
