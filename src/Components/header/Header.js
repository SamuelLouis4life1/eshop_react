import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa"
import { AiOutlineAlignRight } from "react-icons/ai"
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice'
import ShowOnLogin from "../../Components/hiddenLink/HiddenLink"
import ShowOnLogOut from "../../Components/hiddenLink/HiddenLink"


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


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")

const Header = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [displayUserName, setDisplayUserName] = useState("")

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoutUser = (e) => {
    signOut(auth).then(() => {
      setIsLoading(false)
      toast.success("Log out succesfully.");
      navigate("/reset-password")
    }).catch((error) => {
      toast.error(error.message);
    });
  }

  // Monitor currently sign in user
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (user.displayName == null) {
          // const u1 = user.email.slice(0, -10); // to remove only the @gmail.com
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase + u1.slice(1);
          setDisplayUserName(uName)
        } else {
          setDisplayUserName(user.displayName);
        }
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayUserName,
          userID: user.uid,
        }))

      } else {
        setDisplayUserName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayUserName])

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
          </div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>{logo} <FaTimes size={22} color="#fff" onClick={hideMenu} /></li>
            <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
            <li><NavLink to="/contact" className={activeLink}>Contact Us</NavLink></li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>

              <ShowOnLogOut>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
                <a href="#home"><FaUserCircle size={18} /> Hi, {displayUserName}</a>
              </ShowOnLogOut>

              <NavLink to="/register" className={activeLink}>Register</NavLink>
              <NavLink to="/order-history" className={activeLink}>My Orders </NavLink>

              <ShowOnLogin>
                <NavLink to="/" className={activeLink} onClick={logoutUser}>Log Out </NavLink>
              </ShowOnLogin>

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