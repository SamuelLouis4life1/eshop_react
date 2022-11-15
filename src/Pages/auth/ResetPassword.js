import React from 'react'
import Card from '../../Components/card/Card'
import styles from "./auth.module.scss"
import resetPasswordImg from "../../assets/reset-password1.png"
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
        <img src={resetPasswordImg} alt="Reset Password" width="500" />
    </div>

    <Card>
        <div className={styles.form}>
            <h2>Reset Password</h2>
            <form>
                <input type="text" placeholder="Email" required />
                <button className="--btn --btn-primary --btn-block">Reset Password</button>
                <div className={styles.links}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    </Card>
</section>
  )
}

export default ResetPassword