import React from "react";
import styles, { layout } from "@/app/style";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Billing = ({border} : any) => {
const [ref, inView] = useInView({
  triggerOnce: true
})
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} ${border ? `border border-green-500`: ""}`}
    >
      <motion.div className={layout.sectionImgReverse}
      ref={ref}
      initial="hidden"
      animate= {inView ? "visible" : "hidden"}
      variants={slideInFromLeft(0.5)}
      >
        <img
          src="/bill.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </motion.div>

      <motion.div className={layout.sectionInfo}
            ref={ref}
            animate= {inView ? "visible" : "hidden"}
            initial="hidden"
            variants={slideInFromRight(0.5)}>
        <h2 className={styles.heading2}>
          Easily Control your <br className="block sm:hidden" /> Billing and
          Invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src="/apple.svg"
            alt="Apple/Play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src="/apple.svg"
            alt="Apple/Play"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
