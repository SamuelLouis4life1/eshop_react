import React from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/eshop-register.png"
import { Link } from 'react-router-dom'
import Card from '../../Components/card/Card'
import { FaGoogle } from 'react-icons/fa'

export const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>

    <Card>
        <div className={styles.form}>
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button className="--btn --btn-danger --btn-block">Register</button>
            </form>
            <button className="--btn --btn-primary --btn-block"><FaGoogle color='#fff' />Register With Google</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>                    
        </div>
    </Card>

    <div className={styles.img}>
        <img src={registerImg} alt="Register" width="500" />
    </div>
</section>
  )
}
export default Register