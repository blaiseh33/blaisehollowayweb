import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoBH from '../../assets/images/logo-bh.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}> 
                <img src={LogoBH} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='Blaise Holloway' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/blaise-holloway-34412a205/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel='noreferrer' 
                        href='https://github.com/blaiseh33'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className="anchor-icon"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel='noreferrer'
                        href='https://www.instagram.com/blaiseholloway/'
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon"/>
                    </a>

                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar