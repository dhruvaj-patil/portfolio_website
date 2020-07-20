import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./navbar.module.scss"

const Navbar = ({ siteTitle, navItems }) => (
  <header style={{ flex: 1 }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1rem 1rem 1rem`,
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
      }}
    >
      <div style={{ flex: 8 }}>
        {/* <NavLinks navItems={navItems}></NavLinks>
         */}

        {navItems.map((item, index) => {
          return (
            <h2 key={index} style={{ letterSpacing: `1.5px` }}>
              <Link className={style.menuItems} to="/" key={index}>
                {item}
              </Link>
            </h2>
          )
        })}
      </div>

      <div style={{ flex: 2 }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              textShadow: `none`,

              letterSpacing: `1.5px`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <h2
          style={{
            color: `#8d8d8d`,
            letterSpacing: `5px`,
          }}
        >
          GET SH<span role="img" aria-label="i">🤙</span>T DONE
        </h2>
      </div>
    </div>
  </header>
)

// const NavLinks = ({ navItems }) => {
//   return
//   })
// }

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.array,
}

Navbar.defaultProps = {
  siteTitle: ``,
  navItems: PropTypes.array,
}

export default Navbar
