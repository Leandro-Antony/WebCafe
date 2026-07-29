import { useState } from "react"

import styles from "./Header.module.css";
import { Coffee, Search } from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react'
import { Instagram, SeatSelectorFreeIcons, WhatsappIcon } from '@hugeicons/core-free-icons'

export default function Header() {

    const [search, setSearch] = useState("");

    return (
    <> 
    <div className={styles.header}>
        <h1 className={styles.title}><Coffee /> Café</h1>
        <div className={styles.section}>
        <div className={styles.searchBar}><Search size={24} /> <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchInput} placeholder="Pesquisa"/></div>
        
        <a href="https://www.instagram.com/" className={styles.a} target="_blank"><HugeiconsIcon icon={Instagram} size={34} color="currentColor" strokeWidth={1.5}></HugeiconsIcon></a>
        
        <a href="" className={styles.a} target="_blank"><HugeiconsIcon icon={WhatsappIcon} size={30} color="currentColor" strokeWidth={1.5}></HugeiconsIcon></a>
        </div> 
    </div>
    </>
    
    );

}