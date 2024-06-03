"use client"
import {useState} from "react"
import styles from "../styles/header.module.scss"

export default function Header (){

    const [search,setSearch] = useState("")

    return(
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.title}>AdVoice</div>
                <div className={styles.navContainer}>
                    <div className={styles.nav}>Home</div>
                    <div className={styles.nav}>About</div>
                    <div className={`${styles.signupBut} ${styles.nav} `}>Signup</div>
                    <div className={` ${styles.loginBut} ${styles.nav}`}>Login</div>
                </div>
            </div>

            <div className={styles.searchContainer}>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="Search Advice"/>
                <div className={styles.searchBut}></div>
            </div>
            
        </div>
        )
}