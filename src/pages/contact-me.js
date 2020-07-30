import React from "react";
import Layout from "../components/layout/layout";
import style from "../components/pages/contact-me/contact.module.scss";
import InputBox from "../components/pages/contact-me/inputbox/inputBox";
import TextareaBox from "../components/pages/contact-me/textarea/textareaBox";

const HANDSHAKEIMG = require("../images/static_files/contact_us_photos/handshake.svg");

export default function ContactMePage() {
  return (
    <Layout>
      <div className={style.aboutMeContainer}>
        <div>
          <h1>GET IN TOUCH</h1>
        </div>

        <div className={style.divContainer}>
          <div className={style.sectionOne}>
            <div>
              <p>
                Have an Idea ? Want to get in Touch ? Need Help with a project ?
                Feel free to drop a message.
              </p>
            </div>
            <div>
              <img src={HANDSHAKEIMG}></img>
            </div>
          </div>
          <div className={style.sectionTwo}>
            {/* <input type="text" placeholder="Name"></input>


            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Name"></input> */}
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              {/* <InputBox labelValue="Name"></InputBox>
              <InputBox labelValue="Contact No"></InputBox>
              <InputBox labelValue="Email Address"></InputBox>
              <TextareaBox labelValue="Message"></TextareaBox> */}
              <input type="hidden" name="bot-field" ></input>

              <input type="text" name="name" placeholder="Name"></input>

              <input type="text" name="email" placeholder="emaiil"></input>

              <button className={style.learnMore}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
