import React from "react"
import style from "./navbuttons.module.scss"
import { Link } from "gatsby"

export default function Navbuttons() {
  return (
    <>
      <Link>
        <span className={`${style.icon} ${style.iconArrowLeft}`}></span>
      </Link>
      <Link>
        <span className={`${style.icon} ${style.iconArrowRight}`}></span>
      </Link>
    </>
  )
}
