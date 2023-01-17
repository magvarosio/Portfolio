

import moviejournal from '../images/movie4.gif'
import energydemo from '../images/energy1.gif'
import aiArt from '../images/proj3.gif'
import bored from '../images/bored2.gif'

import LinkImg from '../images/Link.png'
import GithubImg from '../images/github.png'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


const Projects = () => {


  const handleClick = () => {
    // window.location.href = 'https://mag-varosio.com/'
    window.open('https://mag-varosio.com/', '_blank')
  }

  return (
    <>
      <div className='site-wrapper'>

        {/* space odyssey */}

        <section id='projects'>
          <div className="projects-wrapper" id="odyssey-wrapper">
            <div className="space">
              <h2 className="display-5" id="odyssey">Ready to go on a 2001 Space Odyssey Portfolio?</h2>
              <div className="demologo-wrapper">
                <button
                  className="btnspace"
                  id="space-button"
                  onClick={handleClick}>
                  click here
                </button>
              </div>
            </div>
          </div>



          <Container fluid id="projects-container">
            <Row>

              <div className="projects-wrapper">
                <h2 className="display-3">Projects</h2>
              </div>



              {/* ------------------- MOVIE JOURNAL - PROJ 4------------- */}

              <div className="projects-wrapper">
                <h2 className="display-5">Movie Journal</h2>
              </div>


              <div className='pback'>
                <p className='lead'><strong>Solo Project - Timeframe: 1 week.</strong></p>
                <p className='lead'>I worked on a movie app as a solo project creating my own movie database using data from The Movie Database (TMDB) with approximately 5000 movies. The app is a social media platform for people to share their thoughts about movies they love. I used Django, Python, SQL, Insomnia for the Back End and React, Cloudify, SCSS and React-Bootstrap for the Front End.

                </p>
              </div>
              <div className="demo-wrapper">
                <img src={moviejournal} className="demo" alt="moviejournal"></img>
              </div>

              <div className="demologo-wrapper">
                {/* github */}
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio/Movie-journal">
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


              {/* -------------------- AI ART - PROJ 3--------------------------- */}


              <div className="projects-wrapper">
                <h2 className="display-5">Ai Art</h2>
              </div>


              <div className='pback'>
                <p className='lead'><strong> Group Project (3 People) - Timeframe: 1 week.</strong></p>
                <p className='lead'>As a group, we made a social media platform for people to share art created with AI. We used <strong>Express</strong>  <strong>Insomnia</strong>, and <strong>MongoDB</strong> for the backend and <strong>React</strong>, <strong>SCSS</strong>, and <strong>Bootstrap</strong> for the frontend. We applied the skills and knowledge we gained during the Software Engineering Immersive course at General Assembly to create this project.
                </p>
              </div>
              <div className="demo-wrapper">
                <img src={aiArt} className="demo" alt="aiart"></img>
              </div>

              <div className="demologo-wrapper">
                {/* github */}
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio/AI-Art">
                  <Card style={{ width: '7rem' }}>
                    <Card.Img variant="top" src={GithubImg} />
                  </Card>
                </a>
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio/project-3_SEI67">
                  <Card style={{ width: '7rem' }}>
                    <Card.Img variant="top" src={LinkImg} />
                  </Card>
                </a>
              </div>


              {/* ---------------------- BORED? - PROJ 2--------------------------- */}

              <div className="projects-wrapper">
                <h2 className="display-5">Bored?</h2>
              </div>


              <div className='pback'>
                <p className='lead'><strong>Group Project (3 People) - Timeframe: 1 week.</strong></p>
                <p className='lead'>“Bored?” is a React application that consumes a public API using React.js, SCSS, and JSX. As a group, we created an app that tries to inspire you with ideas for things to do that are meaningful and productive. I used the skills and knowledge I gained during the first five weeks of the Software Engineering Immersive course at General Assembly to create this project.
                  This project helped me solidify my understanding of React and gave me the opportunity to work on a team and learn from others. Collaborating on this project helped us achieve our shared goal and was a valuable learning experience.
                </p>
              </div>
              <div className="demo-wrapper">
                <img src={bored} className="demo" alt="boreddemo"></img>
              </div>

              <div className="demologo-wrapper">
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio/Bored">
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


              {/* ---------------------ENERGY - PROJ 1--------------------------- */}

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
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/magvarosio/Energy-bills-survivor">
                  <Card style={{ width: '7rem' }}>
                    <Card.Img variant="top" src={GithubImg} />
                  </Card>
                </a>
                <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://magvarosio.github.io/Energy-bills-survivor/">
                  <Card style={{ width: '7rem' }}>
                    <Card.Img variant="top" src={LinkImg} />
                  </Card>
                </a>
              </div>








            </Row>
          </Container>
        </section>
      </div>
    </>


  )
}

export default Projects