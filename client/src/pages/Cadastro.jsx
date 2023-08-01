import '../css/formLayout.css'
import Banner from '../components/Banner'
import FormularioCadastro from '../components/form/FormularioCadastro'

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