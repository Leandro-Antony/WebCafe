import { Coffee, Search } from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Instagram, SeatSelectorFreeIcons, WhatsappIcon, CoffeeBeansIcon, MailAtSign01Icon } from '@hugeicons/core-free-icons'

import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div>
            <h1><HugeiconsIcon icon={CoffeeBeansIcon} size={38} /> WebCafé</h1>
            <p>Seu momento de pausa começa aqui</p>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.icons}>
                    <a href="">
                    <HugeiconsIcon icon={Instagram} size={34} color="currentColor" strokeWidth={1.5} />
                    </a>
                    
                    <a href="">
                    <HugeiconsIcon icon={WhatsappIcon} size={30} color="currentColor" strokeWidth={1.5}></HugeiconsIcon>
                    </a>

                    <a href="">
                        <HugeiconsIcon icon={MailAtSign01Icon} size={30} />
                    </a>

                </div>
                <p>Seg|Ter|Qua|Qui|Sex|Sáb|Dom</p>
                <p>webcafee@gmail.com</p>
                <p>(84)99412-5432</p>
            </div>
        </footer>
        </>
    )
}