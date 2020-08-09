import React, { useState } from "react";
import style from "./netlifyForm.module.scss";

import { navigate } from "gatsby-link";

const CANCEL = require("../../../../images/static_files/contact_us_photos/cancel.svg");

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function NetlifyForm({ success = false, setSuccess }) {
  const [active, setActive] = useState({
    name: false,
    contact: false,
    email: false,
    msg: false,
  });

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className={`${style.submitBg} ${success ? style.active : ""}`}></div>
      <div
        className={`${style.submitContainer} ${success ? style.active : ""}`}
      >
        <div className={style.cancelContainer}>
          <img onClick={() => setSuccess(0)} src={CANCEL}></img>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            Thank you for Connecting. I'll get back to you.
            <span role="img" aria-label="i">
              🤝
            </span>
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <button onClick={() => setSuccess(0)}>Welcome</button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
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
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            NAME
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            onFocus={() => setActive({ name: true })}
            onBlur={() => setActive({ name: false })}
            required
          />
        </div>
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            CONTACT NO.
          </label>
          <input
            onChange={handleChange}
            name="contact"
            type="text"
            onFocus={() => setActive({ contact: true })}
            onBlur={() => setActive({ contact: false })}
            pattern="^\d{10}$"
            required
          />
        </div>
        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            EMAIL ADDRESS
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onFocus={() => setActive({ email: true })}
            onBlur={() => setActive({ email: false })}
            required
          />
        </div>

        <div className={style.inputDiv}>
          <label
            className={`${active ? style.animated : style.animationCancel}`}
          >
            MESSAGE
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            onFocus={() => setActive({ msg: true })}
            onBlur={() => setActive({ msg: false })}
            required
          ></textarea>
        </div>

        <div className={style.inputDiv}>
          <button className={style.learnMore}>Submit</button>
        </div>
      </form>
    </>
  );
}
