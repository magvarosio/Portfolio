import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import LinkedinImg from './../images/Linkedin.png'
import GmailImg from './../images/Gmail.png'
import GithubImg from './../images/github.png'



import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit'

const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <section id='contact'>
        <Container fluid id="contact-container">
          <Row>

            <div className="contatti">

              <div className="contact-wrapper">
                <h2 className="display-3">Contact Me</h2>
              </div>

              <div className="demologo-wrapper">
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="mailto:margherita.varosio@gmail.com">
                  <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={GmailImg} />
                    {/* <Card.Body>
                    <h1 className='cardtext'>My Gmail</h1>
                  </Card.Body> */}
                  </Card>
                </a>
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio">
                  <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={GithubImg} />
                    {/* <Card.Body>
                    <h1 className='cardtext'>My Github</h1>
                  </Card.Body> */}
                  </Card>
                </a>
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/margherita-varosio/">
                  <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={LinkedinImg} />
                    {/* <Card.Body>
                    <h1 className='cardtext'>My Linkedin</h1>
                  </Card.Body> */}
                  </Card>
                </a>
              </div>
            </div>

          </Row>
        </Container>
      </section>

      {/* //   <MDBContainer className='p-4 pb-0'>
    //     <section className='mb-4'>
    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='facebook-f' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='twitter' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='google' />
    //       </MDBBtn>
    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='instagram' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='linkedin-in' />
    //       </MDBBtn>

    //       <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
    //         <MDBIcon fab icon='github' />
    //       </MDBBtn>
    //     </section>
    //   </MDBContainer> */}

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Mag Varosio
        {/* <a className='text-white' href='...'>
          magvarosio.com
        </a> */}
      </div>
    </MDBFooter >
  )
}


export default Footer