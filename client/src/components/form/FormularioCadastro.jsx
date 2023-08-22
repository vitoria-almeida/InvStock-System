import '../../css/formulario.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'

function FormularioCadastro() {
    const url = 'http://localhost:3000/auth/register/user'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate()
    
    function formSubmit(e) {
        e.preventDefault()
        axios.post(url, {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword
        })
        .then (res => {
            console.log(res.status)
            console.log(res.data)
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            navigate('/login')
        })
    }

     function handleForm(e) {
        const newFormData = {...formData}
        newFormData[e.target.id] = e.target.value
        setFormData(newFormData)
    }

    return (
        <form className='formulario' onSubmit={(e) => formSubmit(e)}>
            <h2>CADASTRE-SE</h2>       
            <Input text='Nome' type='text' id='nome' name='name' placeholder='nome' required value={formData.name} handleOnChange={(e)=>{handleForm(e)}}/>
            <Input text='Email' type='email' id='email' name='email' placeholder='exemplo@outlook.com' required value={formData.email} handleOnChange={(e)=>{handleForm(e)}}/>
            <Input text='Senha' type='password' id='password' name='password' placeholder='senha' required value={formData.password} handleOnChange={(e)=>{handleForm(e)}}/>
            <Input text='Confirme a senha' type='password' id='confirmPassword' name='confirmPassword' placeholder='confirme a senha' required value={formData.confirmPassword} handleOnChange={(e)=>{handleForm(e)}}/>
            <Button text='CADASTRAR'/>
            <h4><Link to='/login'>Já possui uma conta?</Link></h4>
        </form>
    )
}

export default FormularioCadastro