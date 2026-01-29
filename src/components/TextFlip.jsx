import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/utils";

export const LayoutTextFlip = ({
  text = "Stack Tecnológico ",
  words = [
    { text: "React", logo: "/React.png" },
    { text: "NodeJS", logo: "/NodeJs.png" },
    { text: "JavaScript", logo: "/JavaScript.png" },
    { text: "TypeScript", logo: "/TypeScript.png" },
    { text: "Java", logo: "/Java.png" },
  ],
  duration = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 justify-center content-center place-content-center gap-5">
        <motion.span
          layoutId="subtext"
          className="text-1xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
        >
          {text}
        </motion.span>

        <motion.span
          layout
          className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: -40, filter: "blur(10px)" }}
              animate={{
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={cn("inline-block whitespace-nowrap")}
            >
              {words[currentIndex]?.text}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={words[currentIndex]?.logo}
            whileHover={{ boxShadow: "" }}
            className="fle self-center-safe content-center "
            height={100}
            width={100}
          />
        </AnimatePresence>
      </div>
    </>
  );
};
