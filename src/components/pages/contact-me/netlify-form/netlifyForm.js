import React, { useState } from "react";
import style from "./netlifyForm.module.scss";


const CANCEL = require("../../../../images/static_files/contact_us_photos/cancel.svg");


export default function NetlifyForm({success = false, setSuccess}) {
  const [active, setActive] = useState({
    name: false,
    contact: false,
    email: false,
    msg: false,
  });

  return (
    <>
      <div className={`${style.submitBg} ${success ? style.active : ""}`}>
      </div>
        <div className={`${style.submitContainer} ${success ? style.active : ""}`}>
        <div className={style.cancelContainer}>
          <img onClick={() => setSuccess(0)} src={CANCEL}></img>
        </div>
        <div style={{flex: 1}}>
          <p>
            Thank you for Connecting. I'll get back to you.
            <span role="img" aria-label="i">
              🤝
            </span>
          </p>
          </div>
          <div style={{flex: 1}}>
          <button  onClick={() => setSuccess(0)} >Welcome</button>
          </div>
        </div>
      <form
        action="/contact-me?success=1"
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
