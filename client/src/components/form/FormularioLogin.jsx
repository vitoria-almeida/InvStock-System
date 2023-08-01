import '../../css/formulario.css'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'

function FormularioLogin() {
    return (
        <form className='formulario'>
            <h2>Já possui uma conta?</h2>
            <h3>Faça login para continuar</h3>
            <Input text='Email' type='text' name='email' placeholder='exemplo@outlook.com'/>
            <Input text='Senha' type='text' name='senha' placeholder='senha'/>
            <Link to='/'><Button text='ENTRAR'/></Link>
            <h4>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></h4>
        </form>
    )
}

export default FormularioLogin