import React from "react";
import styles, { layout } from "@/app/style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
const CardDeal = ({ border }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`${layout.section} ${
        border ? `border border-purple-500` : ""
      }`}
    >
      <motion.div
        className={layout.sectionInfo}
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
      >
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in few wasy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </motion.div>

      <motion.div
        className={`${layout.sectionImg} ${
          border ? `border border-green-500` : ""
        }`}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromRight(0.5)}
      >
        <img src="/card.png" alt="card" className="w-[100%] h-[100%]" />
      </motion.div>
    </section>
  );
};

export default CardDeal;
