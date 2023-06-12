import Input from "./Input"
import Button from "./Button"
import { Link } from "react-router-dom"
import '../../css/formulario.css'

function FormularioCadastro() {
    return (
        <form className='formulario'>
            <h2>CADASTRE-SE</h2>       
            <Input text='Nome' type='text' name='nome' placeholder='nome'/>
            <Input text='Email' type='text' name='email' placeholder='exemplo@outlook.com'/>
            <Input text='Senha' type='text' name='senha' placeholder='senha'/>
            <Input text='Confirme a senha' type='text' name='senha' placeholder='confirme a senha'/>
            <Link to='/login'><Button text='CADASTRAR'/></Link>
        </form>
    )
}

export default FormularioCadastro