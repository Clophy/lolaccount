import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from './header.module.css'
import {AiFillCaretDown, AiFillCaretRight} from 'react-icons/ai'

function Header() {
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
        <button>GİRİŞ YAP <AiFillCaretRight/> </button>
        <div className={Styles.language}>EN <AiFillCaretDown/></div>
        </div>
        </div>

    </header>
        
  )
}

export default Header