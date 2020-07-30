import React, { useState } from "react";
import style from "./inputBox.module.scss";
export default function InputBox({labelValue, }) {



    const [active, setActive] = useState(false);

  return (
    <div>
      <label className={`${active ? style.animated : style.animationCancel}`}>{labelValue}</label>

      <input type="text"  onFocus={() => setActive(true)} onBlur={() => setActive(false)}/>
    </div>
  );
}
