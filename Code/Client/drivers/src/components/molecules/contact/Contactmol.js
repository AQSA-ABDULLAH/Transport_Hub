import React from "react";
import Contactatom from "../../atoms/contact-messages/Contactatom";
import style from "./contactmol.module.css";

const Contactmol = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.atom}>
          <Contactatom />
        </div>
        <div className={style.atom}>
          <Contactatom />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.atom}>
          <Contactatom />
        </div>
        <div className={style.atom}>
          <Contactatom />
        </div>
      </div>
    </div>
  );
};

export default Contactmol;
