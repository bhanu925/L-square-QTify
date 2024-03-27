import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
  <>
    <div className={styles.hero}>
        <div>
        <h1>100 Thousand Songs, ad-free <br />
        Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={require('../../assets/vibrating-headphone.png')} 
            alt="headphone" width={212}/>
        </div>
    </div>
  </>)
}
