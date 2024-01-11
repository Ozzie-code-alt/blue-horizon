"use client"
import { useState } from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [border, setBorder] = useState(false);

  const toggleBorder = () => {
    setBorder(!border);
    console.log("Works" + border)
  };



  return (
<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar border={border} toggleBorder={toggleBorder} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero border={border} />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats border={border} />
        <Business border={border} />
        <Billing border={border} />
        <CardDeal  border={border}/>
        <Testimonials border={border} />
        <Clients  border={border}/>
        <CTA  border={border}/>
        <Footer  border={border}/>
      </div>
    </div>
  </div>
  );
}
