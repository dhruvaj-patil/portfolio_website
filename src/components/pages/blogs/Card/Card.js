import React, { useState } from "react";
import Img from "gatsby-image";
import style from "./card.module.scss";

export default function Card({ title, bgImg, tag, content }) {
  console.log("Image ===>", bgImg.childImageSharp.fixed);
  console.log("title ===>", title);
  console.log("tag ===>", tag);

  const [overlaystate, setoverlaystate] = useState(false);

  return (
    <div
      className={`${style.card}`}
      onMouseOver={() => setoverlaystate(true)}
      onMouseOut={() => setoverlaystate(false)}
    >
      <div className={style.imgContainer}>
        <Img
          style={{
            height: 350,
            width: "100%",
            borderRadius: "20px 20px 20px 20px",
          }}
          width={250}
          height={350}
          fixed={bgImg.childImageSharp.fixed}
        />

        <div className={style.titleContainer}>
          <p>{title}</p>
        </div>
        <div
          className={`${
            overlaystate ? style.cardOverlay : style.cardOverlayHidden
          } `}
        >
          <div className={style.sectionOne}>
            <p>{content.substring(0, 350)} ...</p>
          </div>
          <div className={style.sectionTwo}>
          <button className={`${style.customBtn} ${style.btn14}`}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
