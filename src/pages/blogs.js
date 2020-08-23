import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Card from "../components/pages/blogs/Card/Card";
import style from "../components/pages/blogs/blog-page.module.scss";

export default function blogs({ data }) {
  console.log(data.allStrapiBlog.edges);
  return (
    <Layout>
      <div className={style.blogPageContainer}>
        <div className={style.headingDiv}>
          <h1>Blogs</h1>
        </div>
        <div className={style.blogPostContainer}>
          {data.allStrapiBlog.edges.map((document, index) => {
            return (
              <div key={document.node.id}>
                <Card
                  key={index}
                  title={document.node.blog_title}
                  bgImg={document.node.ImageBg}
                  tag={document.node.tag}
                  content={document.node.content}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allStrapiBlog(filter: {disabled: {eq: false}})  {
      edges {
        node {
          blog_title
          content
          id
          published_on(formatString: "DD-MMM-YYYY")
          tag
          ImageBg {
            childImageSharp {
              fixed(width: 450, height: 450, trim: 0) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
