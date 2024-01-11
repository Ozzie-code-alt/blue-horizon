import React from "react";
import { clients } from "@/contants";
import styles from "@/app/style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 border border-red-500`}>
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
    </section>
  );
};

export default Clients;
