import React from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Aboutme = () => {
  return (



    <section id='aboutme'>

      <Container fluid id="about-container">
        <Row>
          <div className="about-wrapper">
            <h2 className="display-5">ABOUT ME</h2>
          </div>
          <div className='pback'>
            <p className='lead'>I have been in love with tech since I was a child. I used DOS on my first PC, and the first book I read about computer science was HTML for dummies during my summer holidays.
              Later on, I studied Sound Technology, and fell in love with music programming languages like Max/Msp and Csound.
              For me, it was extremely fascinating to create sound waves with code and make them sound through the computer.
              I also tried to build my own synthesiser. Following my passion about tech I worked for Apple as a Trainer for 8 yrs and dreamt about building software from scratch.
              I decided to look into it further and I self-taught myself coding and then I recently enrolled in a full-time immersive bootcamp to learn the basics and foundation in a structured manner.
              I recently graduated from Software Engineering Immersive Course at General Assembly and I am looking forward to improving the skills I learnt during this path. I think coding is like a magic art that lets you create whatever you want.</p>
          </div>
        </Row>
      </Container >
    </section >

  )
}

export default Aboutme




//     <Container fluid id="about-container">
//       <Row>

//         <div className="bio-wrapper">
//           <img src={bioimg} className="bio" alt="welcome"></img>
///* <video src="/START.mov" type="video/mov" controls autoPlay width="640" height="360" /> */ }

// {/* </div>
//   </Row>
// </Container>
