import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import NeethuPhoto from '../../assets/NeethuPhoto.png'

const About = () => {
  return (
    <div id="about" className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img src={NeethuPhoto} alt="" />
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>
             I am a passionate Front-End Developer with strong knowledge of HTML, CSS, and JavaScript. I enjoy building responsive, user-friendly, and visually appealing web applications using modern technologies like React, while continuously improving my skills as a developer.
            </p>

            <p>
              I have hands-on experience with modern technologies like React to create responsive, dynamic, and user-friendly web applications that provide a smooth user experience.
            </p>
          </div>

          <div className="about-skills">

            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>

          </div>

        </div>

      </div>

      <div className="about-achievements">

        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>

    </div>
  )
}

export default About