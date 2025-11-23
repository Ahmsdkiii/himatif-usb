import React from "react";
import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],  // ← Kunci utama: animasi exit bolak-balik
  },
};

//calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-primary relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;