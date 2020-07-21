import React from "react";

import Layout from "../components/layout/layout";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import style from "../components/pages/index/index.layout.module.scss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "static_files/Hero_img1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.mainDiv}>
        <div className={style.leftDiv}>
          <h1>Software</h1>
          <h2>Understanding Vision</h2>
        </div>
        <div className={style.rightDiv}>
          <h1>Developer</h1>
          <h2>Providing Value</h2>
        </div>

        {/* TODO: Change as it is conflicting with the background */}
        {/* <div className={style.smContentDiv}>
          <h1>
            <span style={{ color: "white" }}>S</span>
            <span style={{ color: "white" }}>O</span>
            <span style={{ color: "white" }}>F</span>
            <span style={{ color: "white" }}>T</span>
            <span style={{ color: "white" }}>W</span>
            <span>A</span>
            <span>R</span>
            <span>E</span>
          </h1>

          <h1>
            <span style={{ color: "white" }}>D</span>
            <span style={{ color: "white" }}>E</span>
            <span style={{ color: "white" }}>V</span>
            <span style={{ color: "white" }}>E</span>
            <span style={{ color: "white" }}>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </h1>

          <h3>Understanding</h3>
          <h3>Vision</h3>
          <h3>Providing</h3>
          <h3>Value</h3>
        </div> */}
        {/*  ^^^^^^^ Change till here ^^^^^^^ */}

        <div className={` ${style.titleDiv} ${style.outlineContainer}`}>
          <h1 className={style.titleOutline}>Software</h1>
          <h1 className={style.titleOutline}>Developer</h1>

{/* TODO: Add better Css to this block */}
         {/* <h3>Understanding</h3>
          <h3>Vision</h3>
          <h3>Providing </h3>
          <h3>Value</h3> */}
        </div>
        <div  className={` ${style.titleDiv} ${style.solidContainer}`}>
          <h1 className={style.titleSolid}>Software</h1>
          <h1 className={style.titleSolid}>Developer</h1>

          {/* <h3>Understanding</h3>
          <h3>Vision</h3>
          <h3>Providing </h3>
          <h3>Value</h3> */}

        </div>
        <div className={style.imgDiv}>
          <Img
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
