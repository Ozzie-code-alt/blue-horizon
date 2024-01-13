import React from "react";
import styles from "@/app/style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const CTA = ({ border }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  return (
    <motion.section
      className={`${styles.flexCenter} ${styles.marginY} ${
        styles.padding
      } sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow  ${
        border ? `border border-green-500` : ""
      }`}

      ref={ref}
      initial="hidden"
      animate= {inView ? "visible" : "hidden"}
      variants={slideInFromBottom(0.5)}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </motion.section>
  );
};

export default CTA;
