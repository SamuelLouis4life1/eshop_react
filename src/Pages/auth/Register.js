import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/eshop-register.png"
import { Link } from 'react-router-dom'
import Card from '../../Components/card/Card'
import { FaGoogle } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const registerUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password and confirm password not match");
        }
        console.log(email, password, confirmPassword);
    };

    return (
        <>
            <ToastContainer />
            <section className={`container ${styles.auth}`}>
                <Card>
                    <div className={styles.form}>
                        <h2>Register</h2>
                        <form onSubmit={registerUser}>
                            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button type='submit' className="--btn --btn-danger --btn-block">Register</button>
                        </form>
                        <button className="--btn --btn-primary --btn-block"><FaGoogle color='#fff' />Register With Google</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </Card>

                <div className={styles.img}>
                    <img src={registerImg} alt="Register" width="500" />
                </div>
            </section>
        </>
    )
}
export default Register