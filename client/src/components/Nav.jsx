import '../css/nav.css'
import {Link} from 'react-router-dom'
import IconPerfil from '../assets/icon_prof.png'
import IconProduto from '../assets/icon_prod.png'
import IconMovimentacao from '../assets/icon_mov.png'
import IconEstoque from '../assets/icon_inv.png'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/perfil' className='li'>
                        <img src={IconPerfil} alt='Ícone Perfil'></img>
                        <p>Perfil</p>
                    </Link>
                </li>

                <li>
                    <Link to='/produtos' className='li'>
                        <img src={IconProduto} alt='Ícone Produtos'></img>
                        <p>Produtos</p>
                    </Link>
                </li>

                <li>
                    <Link to='/movimentacao' className='li'>
                        <img src={IconMovimentacao} alt='Ícone Movimentação'></img>
                        <p>Movimentação</p>
                    </Link>
                </li>
                
                <li>
                    <Link to='/estoque' className='li'>
                        <img src={IconEstoque} alt='Ícone Estoque'></img>
                        <p>Estoque</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav 