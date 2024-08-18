import React from 'react'
import Input from '../Form/Input.jsx'
import Button from '../Form/Button.jsx'
import useForm from '../../Hooks/useForm.jsx'
import styles from './LoginForm.module.css'
import useFetch from '../../Hooks/useFetch.jsx'
import '../App.css'

const LoginForm = () => {
    const email = useForm()
    const password = useForm()
    const loginFetch = useFetch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        await loginFetch.request('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type='email' id='email' label='Email' placeholder='Enter your email' {...email} />
            <Input type='password' id='password' label='Password' placeholder='Enter your password' {...password} />
            <Button contentText='Sign in' />
            {loginFetch.error && <p>{loginFetch.error}</p>}
            <p className='underMessage'>Click <a href="/login/create">here</a> if you dont't have an account</p>
            <p className='underMessage'>Do you forget your password? Click <a href="/login/lost">here</a></p>
        </form>
    </section>
}

export default LoginForm