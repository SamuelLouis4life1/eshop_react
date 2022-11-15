import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/eshop-register.png"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../Components/card/Card'
import { FaGoogle } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config'
import Loader from "../../Components/loader/Loader"

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password and confirm password not match");
        }
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setIsLoading(false)
                toast.success("Registration succesfully completed...");
                navigate("/login")
                // ...
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false)
            });
        console.log(email, password, confirmPassword);
    };

    return (
        <>
            <ToastContainer />
            {isLoading && <Loader/>}
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
                        <button className="--btn --btn-primary --btn-block"><FaGoogle color='#fff' /> &nbsp; Register With Google</button>
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