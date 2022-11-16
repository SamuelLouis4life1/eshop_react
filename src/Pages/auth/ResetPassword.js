import React, { useState } from 'react'
import Card from '../../Components/card/Card'
import styles from "./auth.module.scss"
import resetPasswordImg from "../../assets/reset-password1.png"
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../Components/loader/Loader"


const ResetPassword = () => {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const resetUserPassword = (e) => {
        e.preventDefault()
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setIsLoading(false)
                toast.success("Ckeck your email to reset your password...");
                navigate("/login")
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false)
            });
    }

    return (
        <>
        {isLoading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={resetPasswordImg} alt="Reset Password" width="500" />
                </div>

                <Card>
                    <div className={styles.form}>
                        <h2>Reset Password</h2>
                        <form onSubmit={resetUserPassword}>
                            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit" className="--btn --btn-primary --btn-block" onClick={resetUserPassword}>Reset Password</button>
                            <div className={styles.links}>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        </form>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default ResetPassword