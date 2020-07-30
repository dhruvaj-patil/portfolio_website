import React, { useState } from "react";
import style from "./netlifyForm.module.scss";

export default function NetlifyForm() {
  const [active, setActive] = useState({
    name: false,
    contact: false,
    email: false,
    msg: false,
  });

  return (
    <>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <input type="hidden" name="bot-field" />
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            NAME
          </label>
          <input
            type="hidden"
            name="NAME"
            placeholder="name"
            type="text"
            onFocus={() => setActive({ name: true })}
            onBlur={() => setActive({ name: false })}
          />
        </div>
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            CONTACT NO.
          </label>
          <input
            name="CONTACT NO."
            type="text"
            onFocus={() => setActive({ contact: true })}
            onBlur={() => setActive({ contact: false })}
          />
        </div>
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            name="EMAIL ADDRESS"
            onFocus={() => setActive({ email: true })}
            onBlur={() => setActive({ email: false })}
          />
        </div>

        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            MESSAGE
          </label>
          <textarea
            name="Msg"
            onFocus={() => setActive({ msg: true })}
            onBlur={() => setActive({ msg: false })}
          ></textarea>
        </div>

        <div className={style.inputDiv}>
          <button className={style.learnMore}>Submit</button>
        </div>
      </form>
    </>
  );
}
