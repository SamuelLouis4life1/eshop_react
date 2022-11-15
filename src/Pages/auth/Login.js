import React from 'react'
import styles from "./auth.module.scss"
import logImg from "../../assets/eshop-login.png"
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../Components/card/Card'

const Login = () => {
    return (
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={logImg} alt="Login" width="400" />
            </div>

            <Card>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button className="--btn --btn-danger --btn-block">Login</button>
                        <div className={styles.links}>
                            <Link to="/reset-password">Forget Password</Link>
                        </div>
                        <p>-- or --</p>
                    </form>
                    <button className="--btn --btn-primary --btn-block"><FaGoogle color='#fff' />Login With Google</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>                    
                </div>
            </Card>
        </section>
    )
}

export default Login