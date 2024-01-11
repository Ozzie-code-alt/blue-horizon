import React from "react";
import styles, { layout } from "@/app/style";

const Billing = ({border} : any) => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} ${border ? `border border-green-500`: ""}`}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src="/bill.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
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
      </div>
    </section>
  );
};

export default Billing;
