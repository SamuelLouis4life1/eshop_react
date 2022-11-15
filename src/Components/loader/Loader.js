import React, { ReactDOM } from 'react'
import styles from "Loader.module.scss"
import loaderImg from "../../assets/gifloader1.gif"

const Loader = () => {
    return ReactDOM.createPortal (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img scr={loaderImg} alt="Loading... loader" />
            </div>
        </div>,
        document.getElementById("loader")
    )
}

export default Loader