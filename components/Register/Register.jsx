"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShieldCheckLine } from 'react-icons/ri'
import Styles from './register.module.css'
function Register() {
    const [complete, setComplete] = useState(true)
  return (
    <>
        <div className={Styles.background}>
        <div className={Styles.circle}>
            <Image src="/circle.png" width={832} height={832} alt="circle"/>
        </div>
        </div>
        <div className={Styles.login}> 
        <div className={Styles.leftSide}>
        <div className={Styles.rightBlock}>
            <form className={Styles.loginform}>
                <h1>Kayıt Olun</h1>
                <input  type="text" placeholder='Adınız, Soyadınız'/>
                <input  type="text" placeholder='Telefon Numaranız'/>
                <input  type="email" placeholder='E-Posta Adresi'/>
                <input type="password" placeholder='Parola'/>
                <input type="password" placeholder='Parola Tekrar'/>
                <button type='submit'>Kayıt Ol</button>
            </form>
            <Link href="/">
                <p className={Styles.kayit}>Zaten Üye misiniz? Giriş Yapın. <span>&gt;</span></p>
            </Link>
            </div>
        </div>
        <div className={Styles.rightSide}>
        <Image src="/biglogo.png" width={400} height={158} alt="logo"/>
            <div className={Styles.yamuk}>
            <Image src="/yamuk.png" width={654} height={627} alt="yamuk"/>
            </div>
        </div>
        {complete
        ? <div className={Styles.completeModal}>
        <div className={Styles.modal}>
            <div className={Styles.image}>
            <Image src="/registercomplete.png" width={56} height={77} alt="modal"/>
            </div>
            <p>Üyelik Başarıyla Oluşturuldu</p>
            <span>Hemen giriş yaparak alışveriş yapabilirsiniz!</span>
            <div className={Styles.icon}>
                <RiShieldCheckLine/>
            </div>
            <Link href="/" >
                <p className={Styles.girisYap}><span>Giriş Yap</span> <span>&gt;</span></p>
            </Link>
        </div>
        <div className={Styles.shadow} onClick={() => setComplete(false)}></div>
        </div>
        : null
        }
        </div>
    </>
  )
}

export default Register



