import React from "react";
import { clients } from "@/contants";
import styles from "@/app/style";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { slideInFromBottom} from "@/utils/motion";


const Clients = ({border} : any) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  return (
    <motion.section className={`${styles.flexCenter} my-4  ${ border ? `border border-red-500` : ""}`}
    ref={ref}
    initial="hidden"
    animate= {inView ? "visible" : "hidden"}
    variants={slideInFromBottom(0.5)}
    >
      <div className={`${styles.flexCenter} sm:min-w-[192px] flex-wrap w-full`}>
        {clients.map((client) => (
          <div className={`flex-1 ${styles.flexCenter}`} key={client.id}>
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Clients;
