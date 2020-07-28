import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import style from "../components/pages/404/404.module.scss";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div style={{display:"flex", justifyContent: "center"}}>
      <p style={{textAlign: "center"}}> This Page is Currently under COnstruction Please Visit Again Later</p>
    </div>
    <div style={{display: "flex"}}>
      <div className={style.container}>
        <div className={style.bg}></div>
        <div className={style.armLeft}></div>
        <div className={style.blacksmith}>
          <div className={style.shape}>
            <div className={style.dress}></div>
            <div className={style.dress}></div>
          </div>
          <div className={style.head}>
            <div className={style.moustache}></div>
            <div className={style.moustache}></div>
            <div className={style.eye}></div>
          </div>
          <div className={style.armRight}>
            <div className={style.hammer}></div>
          </div>
        </div>
        <div className={style.sword}>
          <div className={style.handle}></div>
        </div>
        <div className={style.anvil}></div>
        <div className={style.fireBox}>
          <div className={style.fire}></div>
          <div className={style.fire}></div>
          <div className={style.fire}></div>
          <div className={style.fire}></div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
