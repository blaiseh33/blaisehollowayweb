import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faGithubSquare, faPython, faLinux, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className='about-text'>
                    <p>
                        I am a software developer who graduated from the University of Alberta 
                        with a BSc general with major in computer science and minor in bioinformatics.
                    </p>
                    <p>
                        I have a passion for developing innovative and exciting applications 
                        whether its in the field of machine learning, AI, or full stack web and app
                        development.
                    </p>
                    <p>
                        I strongly believe that the more knowledge I gain in the many disciplines 
                        of computer science the better equipped I will be to tackle any task in a 
                        specific project.
                    </p>
                    <p>
                        If you would like to find out more about the projects I have worked on through
                        university as well as my internship experience, check out my projects page!
                    </p>
                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#EFD81D' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faFileCode} color='#000000' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faDatabase} color='#4D4D4D' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faLinux} color='#000000' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithubSquare} color='#4D4D4D' />
                    </div>
                </div>

            </div>
            </div>
            <Loader type="triangle-skew-spin" />
        </>
    )
}

export default About
