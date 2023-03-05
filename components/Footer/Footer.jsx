import Image from 'next/image'
import React from 'react'
import Styles from './footer.module.css'
import {IoLogoDiscord} from 'react-icons/io5'
import {HiMailOpen} from 'react-icons/hi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsLightningChargeFill, BsShop } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
      <div className={Styles.bar}>
        <div className={Styles.contain}>
        <div className={Styles.logo}>
        <Image src="/logowhite.png" width={178} height={57} alt="logo
        "/>
        </div>
        <div className={Styles.discord}>
          <div className={Styles.icon}>
            <IoLogoDiscord/>
          </div>
          <div className="text">
            <p>Discord</p>
            <p>#Cytage</p>
          </div>
        </div>
        <div className={Styles.contact}>
        <div className={Styles.icon}>
          <HiMailOpen/>
        </div>
          <div className="text">
          <p>Contact Us</p>
            <p>info@lolaccount.net</p>
          </div>
        </div>
        <div className={Styles.call}>
        <div className={Styles.icon}>
          <RiCustomerService2Line/>
        </div>
          <div className="text">
          <p>Call Us</p>
            <p>+90 800 80 800</p>
          </div>
        </div>
        </div>
      </div>
      <div className={Styles.links}>
        <div className={Styles.ourServices}>
          <div className={Styles.title}>
            <div className={Styles.icons}><BsShop /> </div><p>Our Services</p>
          </div>
          <div className={Styles.list}>
            <ul>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">LoL Account Buy</Link></li>
              <li><Link href="/">What do LoL</Link></li>
              <li><Link href="/">Buy Lol Account</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">LoL Account Buy</Link></li>
              <li><Link href="/">What do LoL</Link></li>
              <li><Link href="/">Buy Lol Account</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
            </ul>
          </div>
        </div>
        <div className={Styles.getToKnowUs}>
          
        <div className={Styles.title}>
        <div className={Styles.icons}><BsLightningChargeFill /></div><p>Get To Know US</p>
        </div>
          <div className={Styles.list}>
          <ul className={Styles.three}>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">LoL Account Buy</Link></li>
              <li><Link href="/">What do LoL</Link></li>
              <li><Link href="/">Buy Lol Account</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">LoL Account Buy</Link></li>
              <li><Link href="/">What do LoL</Link></li>
              <li><Link href="/">Buy Lol Account</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
              <li><Link href="/">LoL Account Buy</Link></li>
              <li><Link href="/">What do LoL</Link></li>
              <li><Link href="/">Buy Lol Account</Link></li>
              <li><Link href="/">League Of Legends</Link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className={Styles.banner}>
        <div className={Styles.bannerContain}>
        <p>Lolaccount.net &copy; Copyright 2012 - 2022 All rights reserved</p>
        <div className={Styles.cards}>
          <Image src="/visa.png" width={47} height={14}  alt="payment"/>
          <Image src="/master.png" width={47} height={28} alt="payment"/>
          <Image src="/american.png" width={47} height={15} alt="payment"/>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer