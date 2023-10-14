import 'index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faGithubSquare, faPython, faLinux, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
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
                <p>
                    I am a software developer graduating with a major in computer 
                    science and a minor in bioinformatics from the University of Alberta
                    in December 2023. 
                </p>
                <p>
                    I have a passion for developing innovative and exciting applications 
                    whether its in the field of machine learning and AI, or full stack web
                    development.
                </p>
                <p>
                    I strongly believe that the more knowledge I gain in the many disciplines 
                    of computer science the better equipped I will be to tackle any task in a 
                    specific project.
                </p>
                <p>
                    
                </p>
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
