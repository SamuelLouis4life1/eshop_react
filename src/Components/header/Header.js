import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart, FaTimes } from "react-icons/fa"
import { AiOutlineAlignRight } from "react-icons/ai"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>e<span>SHOP.</span></h2>
    </Link>
  </div>
)

const carts = (
  <span className={styles.cart}>
    <Link to="/cart"> </Link> Cart
    <FaShoppingCart size={20} />
    <p>0</p>
  </span>
)

const activeLink = ({ isActive }) => (isActive? `${styles.active}` : "")

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={showMenu? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>{logo} <FaTimes size={22} color="#fff" onClick={hideMenu}/></li>
              <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
              <li><NavLink to="/contact" className={activeLink}>Contact Us</NavLink></li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
                <NavLink to="/register" className={activeLink}>Register</NavLink>
                <NavLink to="/order-history" className={activeLink}>My Orders </NavLink>
              </span>
              {carts}
            </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {carts}
          <AiOutlineAlignRight size={28} onClick={toggleMenu} />


        </div>

      </div>
    </header>
  )
}

export default Header