import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoB from '../../assets/images/logo-b.png';
import LogoH from '../../assets/images/logo-h.png';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = ['l', 'a', 'i', 's', 'e']
    const lastNameArray = ['o', 'l', 'l', 'o', 'w', 'a', 'y', ',']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,&nbsp;</span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <br />
                <img src={LogoB} alt='B'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={firstNameArray}
                idx={15} /> 
                <br />
                <img src={LogoH} alt='H'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={lastNameArray}
                idx={20} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={28} />
                </h1>
                <h2>Full Stack Developer / Machine Learning / AI / (Clearly not a graphic designer)</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
            </div>
            <Loader type='triangle-skew-spin' />
        </>
    );
}

export default Home