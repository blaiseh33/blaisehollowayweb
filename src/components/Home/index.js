import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoB from '../../assets/images/logo-b.png';
import LogoH from '../../assets/images/logo-h.png';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = ['l', 'a', 'i', 's', 'e']
    const lastNameArray = ['o', 'l', 'l', 'o', 'w', 'a', 'y']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span> 
                <span className={'${letterClass} _12'}>i,</span>
                <br />
                <span className={'${letterClass} _13'}>I</span>
                <span className={'${letterClass} _14'}>'m</span>
                <img src={LogoB}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={firstNameArray}
                idx={15} /> 
                <img src={LogoH}/>
                <AnimatedLetters letterClass={letterClass}
                strArray={lastNameArray}
                idx={20} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={27} />
                </h1>
                <h2>Full Stack Developer / Machine Learning / AI</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home