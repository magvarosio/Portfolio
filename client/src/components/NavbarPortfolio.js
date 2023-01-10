import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarPortfolio = () => {

  return (
    <Navbar className='fixed-top-nav' bg="dark" variant="dark" fixed="top">
      <Container>
        {/* <Navbar.Brand href="/">Logo</Navbar.Brand> */}
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/maglogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>



  )
}

export default NavbarPortfolio