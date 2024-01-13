import React from "react";
import styles from "@/app/style";
import { stats } from "@/contants";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";


const Stats = ({border}:any) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  
  const getVariants = (index:number) => {
    return {
      hidden: { y: 100, opacity: 0 },
      visible: { 
        y: 0,
        opacity: 1,
        scale: 1, 
        transition: { duration: 0.5 + index + 0.1} // Custom duration based on index
      },
    };
  };

  return <section className={`${styles.flexCenter} ${ border ? `border border-yellow-500` : ""} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) =>(
      <motion.div key={stat.id} className={`flex-1
      flex justify-start items-center flex-row m-3`}
      ref={ref}
      animate="visible"
      initial="hidden"
      variants={getVariants(index)}
      >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
      </motion.div>
    ))}
  </section>
};

export default Stats;
