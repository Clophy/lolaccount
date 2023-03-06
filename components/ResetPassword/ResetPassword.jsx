import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from './resetpassword.module.css'
function ResetPassword() {
  return (
    <>
        <div className={Styles.background}>
        <div className={Styles.circle}>
            <Image src="/circle.png" width={832} height={832} alt="circle"/>
        </div>
        <div className={Styles.yamuk}>
            <Image src="/yamuk.png" width={654} height={627} alt="yamuk"/>
            </div>
        </div>
        <div className={Styles.login}> 
        <div className={Styles.leftSide}>
            <Image src="/biglogo.png" width={322} height={104} alt="logo"/>
        </div>
        <div className={Styles.rightSide}>
            <div className={Styles.rightBlock}>
            <form className={Styles.loginform}>
                <h1>Şifreni Sıfırla</h1>
                <label for="email">E-Posta Adresi</label>
                <input id="email" type="email" placeholder='info@lolaccount.net'/>
                <button type='submit'>Sıfırlama Bağlantısı Gönder</button>
            </form>
            <Link href="/">
                <p className={Styles.kayit}>Zaten Üye misiniz? Giriş Yapın <span>&gt;</span></p>
            </Link>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default ResetPassword