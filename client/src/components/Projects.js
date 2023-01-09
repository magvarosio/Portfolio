


import moviejournal from '../images/moviedemosmall.gif'
import energydemo from '../images/energydemo.gif'
import aiArt from '../images/aiart.png'
import bored from '../images/boreddemo.gif'

import LinkImg from '../images/Link.png'
import GithubImg from '../images/github.png'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


const Projects = () => {
  return (
    <>
      <section id='projects'>
        <Container fluid id="projects-container">
          <Row>
            <div className="projects-wrapper">
              <h2 className="display-3">Projects</h2>
            </div>



            {/* ------------------- PROJ 4------------- */}

            <div className="projects-wrapper">
              <h2 className="display-5">Movie Journal</h2>
            </div>


            <div className='pback'>
              <p className='lead'><strong>Solo Project - Timeframe: 1 week.</strong></p>
              <p className='lead'>Built a <strong>Full Stack</strong> app using <strong>Django</strong>, <strong>Python</strong>, <strong>SQL</strong> and <strong>Insomnia</strong> for the Back End and <strong>React</strong>, <strong>Cloudify</strong>, <strong>SCSS</strong> and <strong>React-Bootstrap</strong> for the Front End. The app is a social media platform where people can share and upload video clips of gaming footage related to specific games, and allow other users to comment on them.</p>
            </div>
            <div className="demo-wrapper">
              <img src={moviejournal} className="demo" alt="moviejournal"></img>
            </div>

            <div className="demologo-wrapper">
              {/* github */}
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="...">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={GithubImg} />
                </Card>
              </a>
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://moviejournal-project.herokuapp.com/">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={LinkImg} />
                </Card>
              </a>
            </div>






            {/* ---------------------- PROJ 3--------------------------- */}


            <div className="projects-wrapper">
              <h2 className="display-5">Ai Art</h2>
            </div>


            <div className='pback'>
              <p className='lead'><strong> Group Project (3 People) - Timeframe: 1 week.</strong></p>
              <p className='lead'>As a group, we made a social media platform for people to share art created with AI. We used <strong>Express</strong>  <strong>Insomnia</strong>, and <strong>MongoDB</strong> for the backend and <strong>React</strong>, <strong>SCSS</strong>, and <strong>Bootstrap</strong> for the front end.We applied the skills and knowledge we gained during the Software Engineering Immersive course at General Assembly to create this project.
              </p>
            </div>
            <div className="demo-wrapper">
              <img src={aiArt} className="demo" alt="aiart"></img>
            </div>

            <div className="demologo-wrapper">
              {/* github */}
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="...">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={GithubImg} />
                </Card>
              </a>
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://moviejournal-project.herokuapp.com/">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={LinkImg} />
                </Card>
              </a>
            </div>



            {/* ---------------------- PROJ 1--------------------------- */}

            <div className="projects-wrapper">
              <h2 className="display-5">Energy bills Survivor</h2>
            </div>


            <div className='pback'>
              <p className='lead'><strong>Solo project - Timeframe: 1 week.</strong></p>
              <p className='lead'>I made a <strong>JavaScript</strong> grid-based game with <strong>HTML</strong> and <strong>CSS</strong>. I decided to build a space invaders clone and called it Energy Bills Survivor as the player has to destroy the light bulbs in order to survive the 2022 energy bills.  I did this project as part of the course, which taught me about different aspects of software development. It was a good chance to try out what I learned and build a web app from scratch.
              </p>
            </div>
            <div className="demo-wrapper">
              <img src={energydemo} className="demo" alt="energydemo"></img>
            </div>

            <div className="demologo-wrapper">
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="github.com/">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={GithubImg} />
                </Card>
              </a>
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://magvarosio.github.io/project-space-invaders/ ">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={LinkImg} />
                </Card>
              </a>
            </div>


            {/* ---------------------- PROJ 2--------------------------- */}

            <div className="projects-wrapper">
              <h2 className="display-5">Bored?</h2>
            </div>


            <div className='pback'>
              <p className='lead'><strong>Solo project - Timeframe: 1 week.</strong></p>
              <p className='lead'>I made a <strong>JavaScript</strong> grid-based game with <strong>HTML</strong> and <strong>CSS</strong>. I decided to build a space invaders clone and called it Energy Bills Survivor as the player has to destroy the light bulbs in order to survive the 2022 energy bills.  I did this project as part of the course, which taught me about different aspects of software development. It was a good chance to try out what I learned and build a web app from scratch.
              </p>
            </div>
            <div className="demo-wrapper">
              <img src={bored} className="demo" alt="boreddemo"></img>
            </div>

            <div className="demologo-wrapper">
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="github.com/">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={GithubImg} />
                </Card>
              </a>
              <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://general-assembly-project-two.netlify.app/ ">
                <Card style={{ width: '7rem' }}>
                  <Card.Img variant="top" src={LinkImg} />
                </Card>
              </a>
            </div>
          </Row>
        </Container>
      </section>
    </>


  )
}

export default Projects