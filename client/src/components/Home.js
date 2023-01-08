import React from 'react'

import Projects from './Projects'
import Skills from './Skills'



// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Magif from '../images/STARTmag.gif'
import Aboutme from './Aboutme'

const Home = () => {

  return (
    <div className='site-wrapper'>

      <section id='welcome'>
        <Container fluid id="home-container">
          <Row>
            <div className="logo-wrapper">
              <img src={Magif} className="logo" alt="welcome"></img>
              {/* <video src="/START.mov" type="video/mov" controls autoPlay width="640" height="360" /> */}
            </div>
          </Row>
        </Container>
      </section>
      <Aboutme />
      <Projects />
      <Skills />







    </div >
  )

}

export default Home