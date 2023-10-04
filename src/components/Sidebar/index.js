import './index.scss'
import { Link } from 'react-router-dom'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='blaise holloway' />
        </Link>
        <nav>
            <NavLink exact="true" activeslasname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeslasname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeslasname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar