import React from "react";
import Layout from "../components/layout/layout";
import style from "../components/pages/contact-me/contact.module.scss";

const HANDSHAKEIMG = require("../images/static_files/contact_us_photos/handshake.svg")

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Have an Idea ? Want to get in Touch ? Need Help with a project ? Feel free to drop a message.
            </p>
            </div>
            <div>
                <img src={HANDSHAKEIMG}></img>
            </div>
          </div>
          <div className={style.sectionTwo}></div>
        </div>
      </div>
    </Layout>
  );
}
