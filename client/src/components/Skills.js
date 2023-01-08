import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


import MongooseGif from '../images/Mongoose.gif'
import DjangoGif from '../images/Django.gif'
import PostgreSQLGif from '../images/PostgreSQL.gif'
import InsomniaGif from '../images/Insomnia.gif'
import YarnGif from '../images/Yarn.gif'
import NPMGif from '../images/npm.gif'
import GithubGif from '../images/Github.gif'
import GitGif from '../images/Git.gif'
import NetlifyGif from '../images/Netlify.gif'
import HerokuGif from '../images/Heroku.gif'
import ReactGif from '../images/React.gif'
import JavaScriptGif from '../images/JavaScript.gif'
import HTMLGif from '../images/HTML.gif'
import CSSGif from '../images/CSS.gif'
import SassGif from '../images/Sass.gif'
import BootStrapGif from '../images/Bootstrap.gif'
import PythonGif from '../images/Python.gif'
import NodeGif from '../images/Node.gif'
import MongoDBGif from '../images/MongoDB.gif'
import ExpressGif from '../images/Express.gif'



const Skills = () => {
  return (
    <section id='skills'>
      <Container fluid id="skills-container">
        <Row>
          <div className="skills-wrapper">
            <h2 className="display-3">TECHNICAL SKILLS</h2>
          </div>

          <div className="skills-wrapper">
            <h2 className="display-5">Front End</h2>
          </div>

          <div className="skillslogo-wrapper">
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant='top' src={ReactGif} />
              <Card.Body>
                <h1 className='cardtext'>React</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant='top' src={JavaScriptGif} />
              <Card.Body>
                <h1 className='cardtext'>JavaScript</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={HTMLGif} />
              <Card.Body>
                <h1 className='cardtext'>HTML</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={CSSGif} />
              <Card.Body>
                <h1 className='cardtext'>CSS</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={SassGif} />
              <Card.Body>
                <h1 className='cardtext'>SASS</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={BootStrapGif} />
              <Card.Body>
                <h1 className='cardtext'>Bootstrap</h1>
              </Card.Body>
            </Card>
          </div>

          <div className="skills-wrapper">
            <h2 className="display-5">Back End</h2>
          </div>

          <div className="skillslogo-wrapper">
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={PythonGif} />
              <Card.Body>
                <h1 className='cardtext'>Python</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={NodeGif} />
              <Card.Body>
                <h1 className='cardtext'>Node.js</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={MongoDBGif} />
              <Card.Body>
                <h1 className='cardtext'>MongoDB</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={ExpressGif} />
              <Card.Body>
                <h1 className='cardtext'>Express</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={MongooseGif} />
              <Card.Body>
                <h1 className='cardtext'>Mongoose</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={DjangoGif} />
              <Card.Body>
                <h1 className='cardtext'>Django</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={PostgreSQLGif} />
              <Card.Body>
                <h1 className='cardtext'>PostgreSQL</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={InsomniaGif} />
              <Card.Body>
                <h1 className='cardtext'>Insomnia</h1>
              </Card.Body>
            </Card>
          </div>

          <div className="skills-wrapper">
            <h2 className="display-5">Storage, Package and Version Control</h2>
          </div>

          <div className="skillslogo-wrapper">
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={YarnGif} />
              <Card.Body>
                <h1 className='cardtext'>Yarn</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={NPMGif} />
              <Card.Body>
                <h1 className='cardtext'>NPM</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={GithubGif} />
              <Card.Body>
                <h1 className='cardtext'>Github</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={GitGif} />
              <Card.Body>
                <h1 className='cardtext'>Git</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={NetlifyGif} />
              <Card.Body>
                <h1 className='cardtext'>Netlify</h1>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }}>
              <Card.Img style={{
                filter: 'grayscale(100%)',
              }} variant="top" src={HerokuGif} />
              <Card.Body>
                <h1 className='cardtext'>Heroku</h1>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Skills


