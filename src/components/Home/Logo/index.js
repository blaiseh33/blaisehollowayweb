import './index.scss';
import LogoBH from '../../../assets/images/logo-bh.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoBH} alt='BH' />
            
        </div>
    )
}

export default Logo