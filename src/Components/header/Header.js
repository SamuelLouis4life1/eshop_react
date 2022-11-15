import React, { useState } from 'react'
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/order-history">My Orders </Link>
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