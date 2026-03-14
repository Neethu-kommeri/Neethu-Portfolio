import React from 'react'
import './Hero.css'
import NeethuPhoto from '../../assets/NeethuPhoto.png'

const Hero = () => {
  return (
    <div id="home"className='hero'>
        <img src={NeethuPhoto} alt="" />
        <h1><span>I'm Neethu Kommeri,</span> frontend developer based in UAE.</h1>
        <p>I am a frontend developer from kerala,India with nearly two years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><a href="#contact"className='anchor-link'>Connect with me</a></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero