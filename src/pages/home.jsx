import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export function Home() {

    const navigate = useNavigate();

    return (
        <>
        <Header />
        <div className={styles.homeImage}>
            <h1>Café</h1>
            <h3>Seu momento de calma começa aqui</h3>
        </div>
        <section className={styles.section}>
            <h1>Conheça nossos grãos</h1>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <h2>Bourbon</h2>
                    <p className={styles.description}>Uma das variedades mais tradicionais do café arábica, conhecida por seu equilíbrio entre doçura e acidez, com corpo aveludado e notas que lembram frutas e caramelo.</p>
                </div>

                <div className={styles.card2}>
                    <h2>Catuaí</h2>
                    <p className={styles.description}>Híbrido brasileiro resistente e produtivo, com sabor suave e equilibrado, acidez moderada e um perfil versátil que agrada tanto em bebidas puras quanto em misturas.</p>
                </div>

                <div className={styles.card3}>
                    <h2>Acaiá</h2>
                    <p className={styles.description}>Variedade de porte alto e grãos maiores, com xícara encorpada, doçura marcante e notas que remetem a chocolate e frutas maduras.</p>
                </div>

                <div className={styles.card4}>
                    <h2>Geisha</h2>
                    <p className={styles.description}>Considerada uma das variedades mais nobres e valorizadas do mundo, com perfil floral e frutado excepcional, acidez cítrica vibrante e uma xícara complexa e aromática.</p>
                </div>
            </div>
        </section>

        <div className={styles.choice}>
            <h1>Por que escolher o WebCafe?</h1>
    
            <p>Porque café de verdade começa na escolha do grão. Trabalhamos com variedades selecionadas, do equilíbrio clássico do Bourbon à raridade aromática do Geish, torradas em pequenos lotes para preservar cada nota de sabor.</p>
    
            <p>                
            Cada xícara carrega cuidado: da origem do grão ao momento em que chega até você. Sem pressa, sem atalhos, só café de qualidade, feito por quem entende e ama o que faz.</p>
    
            <p>        
            Mais do que uma bebida, oferecemos uma experiência: sabor, aroma e a certeza de estar bebendo algo genuíno.</p>
        </div>

        <div className={styles.joinUs}>
            <h1>Junte-se a nós! <User size={30} /></h1>
            <div className={styles.buttons}>
                <button onClick={() => navigate("/logsign", { state: { mode: "login" } })} className={styles.button}>Login</button>
                <button onClick={() => navigate("/logsign", { state: { mode: "signup" } })} className={styles.button}>Cadastre-se</button>
            </div>
        
            <button onClick={() => useNavigate("/")} className={styles.button}>Pedir um café</button>
        </div>
        <Footer />
        </>
    )
}