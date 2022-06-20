import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return <>(
        <div className ='container about-page'>
        <div className='text-zone'>
           <h1>
              <AnimatedLetters
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={15}
              />
            </h1>
            <p>I am an enthusiastic and upcoming developer. I started my journey doing a BSc. Physics and Mathematics at UCT, however I completed
                a Software Engineering Certificate with HyperionDev in Woodstock, achieving an average of 99%. This is something I'm extremely proud of.
                I am currently a freelance Junior Developer at DecodeYourWorld in a fullstack capacity. I have a very analytic mind, and feel my problem solving skills
                is one of my best features. I am always looking for a challenge and work great in a team, I also have real world experience on projects.

            </p>
            <p>
                I am applying to join the SovTech graduate developer BlockChain stream as BlockChain and the evolution of the internet, Web3.0 
                is a passion of mine, since the early days of Bitcoin! I feel that this would greatly change my life, and further my education and knowledge, benefiting both Sovtech and myself.
            </p>
            <p>
                A little bit about myself, I am one massive nerd, I love lord of the rings, and take up Karate.
            </p>
              </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div>
        </div>
    )
    <Loader type="pacman" />
    </> 
    }

export default About