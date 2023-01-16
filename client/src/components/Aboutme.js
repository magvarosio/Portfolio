import React from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const Aboutme = () => {




  return (
    <>



      <section id='aboutme'>

        <Container fluid id="about-container">
          <Row>
            <div className="about-wrapper">
              <h2 className="display-3">ABOUT ME</h2>
            </div>
            <div className='pback'>
              <p className='lead'>I have been in love with tech since I was a child. I used DOS on my first PC, and the first book I read about computer science was HTML for dummies during my summer holidays.
                Later on, I studied Sound Technology, and fell in love with music programming languages like Max/Msp and Csound.
                For me, it was extremely fascinating to create sound waves with code and make them sound through the computer. <br></br> <br></br>Following my passion about tech I worked for Apple as a Trainer for 8 yrs and dreamt about building software from scratch.
                I decided to look into it further and I self-taught myself coding and then I recently enrolled in a full-time immersive bootcamp to learn the basics and foundation in a structured manner.
                I recently graduated from Software Engineering Immersive Course at General Assembly and I am looking forward to improving the skills I learnt during this path. <br></br> <br></br>I think coding is like a magic art that lets you create whatever you want.</p>
            </div>
          </Row>
        </Container >
      </section >

      <section id='interests'>
        <Container fluid id="interests-container">
          <Row>
            <div className="interests-wrapper">
              <h2 className="display-5">Interests</h2>
            </div>
            <div className='pback'>
              <p className='lead'>Music composition is a passion of mine, and I particularly enjoy classical and electronic styles.
                I am also interested in sound technology, which involves the manipulation and synthesis of sound. <a href="https://www.athenavarosio.com/">My Music Portfolio</a> </p>


              <p className='lead'> Filmmaking is another interest of mine, and I enjoy learning about various film editing techniques and exploring different ways to tell stories through film. I find the process of creating and shaping a film to be extremely fascinating.</p>
            </div>
            <div className="hobbies-wrapper">
            </div>
          </Row>
        </Container>
      </section>
    </>

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
