import React, { useState } from "react";
import style from "./textArea.module.scss";


export default function TextareaBox({labelValue,}) {

    const [active, setActive] = useState(false);

    return (
        <div  style={{height: 160, marginTop: 25}}>
            <label className={`${active ? style.animated : style.animationCancel}`}>{labelValue}</label>
            <textarea   onFocus={() => setActive(true)} onBlur={() => setActive(false)}></textarea>
        </div>
    )
}
