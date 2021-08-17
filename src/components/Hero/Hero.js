import React from 'react'
import styles from './Hero.module.css'
import bg from '../../assets/bg.png'
import SignUpForm from '../SignUpForm/SignUpForm'

const Hero = () => {
    return (
        <div className={styles.hero}>

            

            <h2 className={styles.h2}>Get your <span>BMI</span></h2>
            <p>Enter your details below.</p>
            <SignUpForm id="form" />


        </div>
    )
}



export default Hero
