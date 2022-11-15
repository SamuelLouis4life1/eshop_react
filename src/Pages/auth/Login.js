import React, { useState } from 'react'
import styles from "./auth.module.scss"
import logImg from "../../assets/eshop-login.png"
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../Components/card/Card'
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../Firebase/config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../../Components/loader/Loader"
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setIsLoading(false)
                toast.success("Login succesful...");
                navigate("/")
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false)
            });
    }

    //login with Google 
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = (e) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setIsLoading(false)
                toast.success("Login succesful...");
                navigate("/")
            }).catch((error) => {
                toast.error(error.message);
                setIsLoading(false)
            });
    }

    return (
        <>
            <ToastContainer />
            {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={logImg} alt="Login" width="400" />
                </div>

                <Card>
                    <div className={styles.form}>
                        <h2>Login</h2>
                        <form onSubmit={loginUser}>
                            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className="--btn --btn-danger --btn-block">Login</button>
                            <div className={styles.links}>
                                <Link to="/reset-password">Forget Password</Link>
                            </div>
                            <p>-- or --</p>
                        </form>
                        <button type="submit" className="--btn --btn-primary --btn-block" onClick={signInWithGoogle}><FaGoogle color='#fff' />&nbsp; Login With Google</button>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default Login