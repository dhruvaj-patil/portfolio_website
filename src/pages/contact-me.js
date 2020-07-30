import React from "react";
import Layout from "../components/layout/layout";
import style from "../components/pages/contact-me/contact.module.scss";
import InputBox from "../components/pages/contact-me/inputbox/inputBox";
import TextareaBox from "../components/pages/contact-me/textarea/textareaBox";
import NetlifyForm from "../components/pages/contact-me/netlify-form/netlifyForm";

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
            <NetlifyForm></NetlifyForm>
          </div>
        </div>
      </div>
    </Layout>
  );
}
