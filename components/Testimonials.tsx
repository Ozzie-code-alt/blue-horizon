import React from "react";
import styles from "@/app/style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "@/contants";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Testimonials = ({border} : any) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  return (
    <section id="clients" className={`${styles.paddingY} flex-col relative ${border ? `border border-yellow-500` : ""}`}>
      <motion.div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      {/*To Do */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16  mb-6 relative z-[1]">
        <motion.h1 className={`${styles.heading2}`}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromBottom(0.5)}
        >
          What People are <br className="sm:block hidden" /> saying about us
        </motion.h1>
        <div className="w-full md:mt-0 mt-6">
          <motion.p className={`${styles.paragraph} text-left max-w-[450px]`}
                 ref={ref}
                 initial="hidden"
                 animate={inView ? "visible" : "hidden"}
                 variants={slideInFromBottom(0.7)}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </motion.p>
        </div>
      </div>
      <motion.div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.9)}>
        {feedback.map((card) =>(
          <FeedbackCard
          key={card.id}
          {...card}
          border={border} 
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
