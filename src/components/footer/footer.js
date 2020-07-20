import React from "react"
import { Link } from "gatsby"

import style from "./footer.module.scss"

// TODO: give hrefs
export default function Footer() {
  return (
    <footer>
      <div className={style.iconDiv}>
        <Link>
          <span className={`${style.icon} ${style.iconInsta}`}></span>
        </Link>{" "}
        <br></br>
        <Link>
          <span className={`${style.icon} ${style.iconLinkedIn}`} />
        </Link>{" "}
        <br></br>
        <Link>
          <span className={`${style.icon} ${style.iconGithub}`} />
        </Link>{" "}
        <br></br>
      </div>

      <div style={{ flex: 1 }} className={style.phDiv}>
        <h3>
          <Link>dhruvaj.patil@gmail.com</Link>
        </h3>
      </div>

      <div className={`${style.gapFill}`}></div>
    </footer>
  )
}
