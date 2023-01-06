import React from 'react'
import NavbarPortfolio from './NavbarPortfolio'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Magif from '../images/MagPortfolio.gif'

const Home = () => {

  return (
    <div className='site-wrapper'>


      <section id='welcome'>
        <Container fluid id="home-container">
          <Row>
            <div className="logo-wrapper">
              <img src={Magif} className="logo" alt="welcome"></img>
            </div>
          </Row>
        </Container>
      </section>



    </div>
  )

}

export default Home