import '../../css/formulario.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Input from './Input'
import Button from './Button'

function FormularioLogin() {
    const url = 'http://localhost:3000/auth/login'

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    function formSubmit(e) {
        e.preventDefault()
        axios.post(url, {
            email: formData.email,
            password: formData.password
        })
        .then (res => {
            console.log(res.status)
            console.log(res.data)
            setFormData({
                email: '',
                password: ''
            })
            navigate('/')
        })
    }

     function handleForm(e) {
        const newFormData = {...formData}
        newFormData[e.target.id] = e.target.value
        setFormData(newFormData)
    }

    return (
        <form className='formulario' onSubmit={(e) => formSubmit(e)}>
            <h2>Já possui uma conta?</h2>
            <h3>Faça login para continuar</h3>

            <Input text='Email' type='text' name='email' placeholder='exemplo@outlook.com' required value={formData.email} handleOnChange={(e)=>{handleForm(e)}}/>
            <Input text='Senha' type='password' name='password' placeholder='senha' required value={formData.password} handleOnChange={(e)=>{handleForm(e)}}/>
            
            <Button text='ENTRAR'/>
            <h4>Não tem uma conta? <Link to='/cadastro'>Cadastre-se</Link></h4>
        </form>
    )
}

export default FormularioLogin