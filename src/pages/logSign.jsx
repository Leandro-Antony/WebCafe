import styles from "./logSign.module.css"
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Login } from "../components/Login.jsx";
import { SignUp } from "../components/SignUp.jsx";

import { useState } from "react";

export function LogSign() {

    const [mode, setMode] = useState("login");

    return (
        <>
        <Header />
        <div className={styles.body}>
            <h1>Junte-se à nós</h1>
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <button className={mode === "login" ? styles.activeTab : ""} onClick={() => setMode("login")}>Login</button>
                    <button className={mode === "signup" ? styles.activeTab : ""} onClick={() => setMode("signup")}>Cadastre-se</button>
                </div>
                {mode === "login" && <Login />}
                {mode === "signup" && <SignUp />}
            </div>
        </div>
        <Footer />
        </>
    )
}

