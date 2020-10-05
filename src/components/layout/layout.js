/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "../navbar/navbar";
import "../layout.css";
import style from "./layout.module.scss";

import Footer from "../footer/footer";
import Navbuttons from "../navbuttons/navbuttons";
import { Link } from "gatsby";

const MENU_ITEMS = [
  {
    name: "about me",
    link: "about-me",
  },
  {
    name: "Profile",
    link: "resume",
  },
  {
    name: "blogs / portfolio",
    link: "blogs",
  },
  {
    name: "contact me",
    link: "contact-me",
  },
];

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={style.container}>
      <div className={`${style.smContainerMenuBtn} `}>
        <div>
          <h3
            className={`'animate__animated animate__bounceOutLeft`}
            style={{ color: "white" }}
          >
            <Link to="/">
              D J<span style={{ color: `#F5BA57` }}>.</span>
            </Link>
          </h3>
        </div>

        {/* Menu Items */}

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className={`${style.hamburger} ${style.hamburgerAnimation} ${
            openMenu ? style.isActive : ""
          }`}
        >
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </div>

      <div
        className={`${style.smMenuContainer} ${openMenu ? style.isActive : ""}`}
      >
        <div>
          {MENU_ITEMS.map((item, index) => {
            return (
              <h3
                style={{ color: `white`, textTransform: "uppercase" }}
                key={index}
              >
                <Link to={`/${item.link}`} key={index}>
                  {item.name}
                </Link>
              </h3>
            );
          })}
        </div>
        <div className={style.titleContainer}>
          <h1>
            <Link to="/">Dhruvaj Patil</Link>
          </h1>
          <p className={style.tooltip}>
            Meráki
            <span className={style.tooltiptext}>
              Putting your Heart & Soul into your work.
            </span>
          </p>
        </div>
      </div>

      <div className={style.menu}>
        <Navbar
          siteTitle={data.site.siteMetadata.title}
          navItems={MENU_ITEMS}
        />
      </div>

      <div className={style.mainDiv}>
        <main style={{ display: "flex", flex: 1 }}>{children}</main>
      </div>

      <div style={{ flex: 1 }}>
        <Footer></Footer>
      </div>

      <div
        style={{
          display: `flex`,
          /* width: 100px; */
          position: `absolute`,
          bottom: `5rem`,
          right: `10rem`,
          margin: `0`,
        }}
      >
        {/* <Navbuttons></Navbuttons> */}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
