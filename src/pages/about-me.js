import React from "react"
import Layout from "../components/layout/layout"
import style from "../components/pages/about-me/about-me.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function AboutMePage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "static_files/about_me.jpg" }
      ) {
        childImageSharp {
          fixed(width: 250, height: 250, cropFocus: EAST, quality: 90) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <div className={style.aboutMeDiv}>
        <div className={style.imgDiv}>
          <div className={style.imgWrapper}>
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              width={250}
              height={250}
            ></Img>
          </div>
        </div>
        <div className={style.contentDiv}>
        <div className={style.headerDiv}>
          <h1>
            GET TO KNOW ME {" "} 
          </h1>
          <span className={`${style.icon} ${style.iconAbtMe}`}></span>
         
        </div>
        <div>
          <p>
            &#9; Welcome to my website, I am Dhruvaj Patil I am a professional
            Software/Web Developer who has the drive to learn new technologies.
            I develop effective solutions using strategic foresight, passion,
            and creativity. Because of my inquisitive nature, I keep venturing
            out trying to do new things, and gain new perspectives around
            things. Apart from being a passionate Software Developer, I love to
            spend my time traveling, cooking, learning about space and astrophysics, and playing sports.
          </p>
        </div>
        </div>
      </div>
    </Layout>
  )
}
