"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Styles from './header.module.css'
import {AiFillCaretDown, AiFillCaretRight} from 'react-icons/ai'
import { RiShoppingBasketLine } from 'react-icons/ri'

function Header() {
    const isActive = true
    const [openLang, setLang] = useState(false)
    const [language, setLanguage] = useState(0)

  return (
    
    <header className={Styles.header}>
        <div className={Styles.container}>
        <div className={Styles.logo}>
        <Image src="/logo.png" width={178} height={57} alt="logo
        "/>
        </div>
        <nav className={Styles.list}>
            <ul>
                <li>
                    <Link href="/">ANASAYFA</Link>
                </li>
                <li className={Styles.new}>
                    <Link href="/">HESAPLAR</Link>
                </li>
                <li>
                    <Link href="/">HAKKIMIZDA</Link>
                </li>
                <li>
                    <Link href="/">BLOG</Link>
                </li>
                <li>
                    <Link href="/">İLETİŞİM</Link>
                </li>
            </ul>
        </nav>
        <div className={Styles.giris}> 
        {isActive 
        ? <div className={Styles.basket}>
            <span className={Styles.sayi}>3</span>
            <RiShoppingBasketLine/>
        </div>
        : <button>GİRİŞ YAP <AiFillCaretRight/> </button> 
        }
        
        <div className={Styles.language} onClick={()=> setLang(!openLang)}>
        <p className={Styles.languagesdefault}>{language} <AiFillCaretDown/></p>
        {
            openLang 
            ? <div className={Styles.languages}>
                <p onClick={() => setLanguage("EN")}>EN</p>
                <p onClick={() => setLanguage("TR")}>TR</p>
                <p onClick={() => setLanguage("FR")}>FR</p>
                <p onClick={() => setLanguage("CHN")}>CHN</p>
                <p onClick={() => setLanguage("GER")}>GER</p> 
            </div>
        : null
        }
        </div>
        </div>
        </div>

    </header>
        
  )
}

export default Header