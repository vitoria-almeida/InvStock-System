import '../css/header.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import LogOff from '../assets/logoff.png'
import { useAuth } from '../hooks/useTokenContext'

function Header() {
    const { setAuth } = useAuth()
    
    return (
        <div className='header'>
            <ul>
                <li className='logo'><Link to='/home'><img src={Logo} alt='Logo'/></Link></li>           
                <li className='logoff'><Link to='/login'><img src={LogOff} alt='Log off Icon' onClick={() => setAuth('')}/></Link></li>
            </ul>
        </div>
    )
}

export default Header 