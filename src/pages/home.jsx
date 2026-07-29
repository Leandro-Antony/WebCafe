import Header from "../components/Header.jsx";
import styles from "./Home.module.css"

export function Home() {
    return (
        <>
        <Header />
        <div className={styles.homeImage}>
            <h1>Café</h1>
            <h3>Seu momento de calma começa aqui</h3>
        </div>

        <div className={styles.cards}>
            <div className={styles.card1}><h2>Bourbon</h2></div>
            <div className={styles.card2}><h2>Catuaí</h2></div>
            <div className={styles.card3}><h2>Acaiá</h2></div>
            <div className={styles.card4}><h2>Geisha</h2></div>
        </div>
        </>
    )
}