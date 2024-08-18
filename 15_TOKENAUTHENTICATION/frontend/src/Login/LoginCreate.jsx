import React from 'react'
import Input from '../Form/Input.jsx'
import Button from '../Form/Button.jsx'
import useForm from '../../Hooks/useForm.jsx'
import usePassword from '../../Hooks/usePassword.jsx'
import useFetch from '../../Hooks/useFetch.jsx'
import '../App.css'

const LoginCreate = () => {
    const username = useForm()
    const password = useForm()
    const email = useForm('email')
    const passwordEquals = usePassword(password.value)
    const loginCreateFetch = useFetch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        await loginCreateFetch.request('http://localhost:3000/login/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return <section>
        <form onSubmit={handleSubmit}>
            <Input type='text' id='username' label='Define your user' {...username} />
            <Input type='email' id='email' label='Define your email' {...email} />
            <Input type='password' id='password' label='Define your password' {...password}/>
            <Input type='password' id='password2' label='Repeat your password' {...passwordEquals} />
            <Button contentText='Sign up' />
        </form>
        <p className='underMessage'>Click <a href="/login">here</a> if you already have an account</p>
    </section>
}

export default LoginCreate