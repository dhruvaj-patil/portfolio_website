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
        relativePath: { eq: "static_files/Hero_img_clean.png" }
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

        <div className={` ${style.titleDiv} ${style.outlineContainer}`}>
          <h1 className={style.titleOutline}>Software</h1>
          <h1 className={style.titleOutline}>Developer</h1>

          {/*  ^^^^^^^ Change till here ^^^^^^^ */}
        </div>
        <div className={` ${style.titleDiv} ${style.solidContainer}`}>
          <h1 className={style.titleSolid}>Software</h1>
          <h1 className={style.titleSolid}>Developer</h1>
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
