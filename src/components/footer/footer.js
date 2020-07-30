import React from "react"
import { Link } from "gatsby"

import style from "./footer.module.scss"

// TODO: give hrefs
export default function Footer() {
  return (
    <footer>
      <div className={style.iconDiv}>
        <a href="https://www.instagram.com/dhruvaj/" target="_blank">
          <span className={`${style.icon} ${style.iconInsta}`}></span>
        </a>{" "}
        <br></br>
        <a href="https://www.linkedin.com/in/dhruvaj/" target="_blank">
          <span className={`${style.icon} ${style.iconLinkedIn}`} />
        </a>{" "}
        <br></br>
        <a href="https://github.com/dhruvaj-patil" target="_blank">
          <span className={`${style.icon} ${style.iconGithub}`} />
        </a>{" "}
        <br></br>
      </div>

      <div style={{ flex: 1 }} className={style.phDiv}>
        <h3>
          <a href="mailto:dev@dhruvaj.com" >dev@dhruvaj.com</a>
        </h3>
      </div>

      <div className={`${style.gapFill}`}></div>
    </footer>
  )
}
