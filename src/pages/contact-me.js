import React from "react";
import Layout from "../components/layout/layout";
import style from "../components/pages/contact-me/contact.module.scss";
import NetlifyForm from "../components/pages/contact-me/netlify-form/netlifyForm";
import { BooleanParam, useQueryParam } from 'use-query-params';

const HANDSHAKEIMG = require("../images/static_files/contact_us_photos/handshake.svg");

export default function ContactMePage() {




  const [successMsg, setSuccessMsg] = useQueryParam("success", BooleanParam);
  



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
            <NetlifyForm success={successMsg} setSuccess={setSuccessMsg}></NetlifyForm>
          </div>
        </div>
      </div>
    </Layout>
  );
}
