import '../css/formLayout.css'
import Banner from '../components/Banner'
import FormularioLogin from "../components/form/FormularioLogin"

function Login() {
    return (
        <div className='formLayout'>
            <div className='content'>
                <section><Banner/></section>
                <section><FormularioLogin/></section>
            </div>
        </div>       
    ) 
}

export default Login