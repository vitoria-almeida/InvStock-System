import '../css/banner.css'
import Logo from '../assets/logo.png'
import ImagemLogin from '../assets/loginImage.png'

function Banner() {
    return ( 
        <div className='banner'>
            <img src={Logo} alt='Logo'/>
            <h1>SEJA BEM VINDO</h1>
            <img src={ImagemLogin} alt='Imagem Login' className='imagemLogin'/>
        </div>
    )
}

export default Banner