import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from './login.module.css'
function Login() {
  return (
    <>
        <div className={Styles.background}>
        <div className={Styles.circle}>
            <Image src="/circle.png" width={832} height={832} alt="circle"/>
        </div>
        </div>
        <div className={Styles.login}> 
        <div className={Styles.leftSide}>
            <Image src="/biglogo.png" width={400} height={158} alt="logo"/>
        </div>
        <div className={Styles.rightSide}>
            <div className={Styles.rightBlock}>
            <form className={Styles.loginform}>
                <h1>Giriş Yapın</h1>
                <label for="email">E-Posta Adresi</label>
                <input id="email" type="email" placeholder='info@lolaccount.net'/>
                <label for="password">Parola</label>
                <input id="password" type="password" placeholder='Parolanızı giriniz...'/>
                <span>Şifremi Unuttum</span>
                <button type='submit'>Giriş Yap</button>
            </form>
            <Link href="/">
                <p className={Styles.kayit}>Hesabınız yok mu? Kayıt olun. <span>&gt;</span></p>
            </Link>
            </div>
            <div className={Styles.yamuk}>
            <Image src="/yamuk.png" width={654} height={627} alt="yamuk"/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login