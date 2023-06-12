import '../css/formLayout.css'
import Banner from './form/Banner'
import FormularioLogin from "./form/FormularioLogin"

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