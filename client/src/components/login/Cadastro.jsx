import '../css/formLayout.css'
import Banner from './form/Banner'
import FormularioCadastro from "./form/FormularioCadastro"

function Cadastro() {
    return (
        <div className='formLayout'>
            <div className='content'>
                <section><Banner/></section>
                <section><FormularioCadastro/></section>
            </div>
        </div>       
    )
}

export default Cadastro