import React from 'react'
import Input from '../Form/Input.jsx'
import Button from '../Form/Button.jsx'
import useForm from '../../Hooks/useForm.jsx'
import styles from './LoginForm.module.css'
import '../App.css'

const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    return <section className={styles.section}>
        <form className={styles.form} action="" method='POST'>
            <Input type='text' id='username' label='Username' placeholder='Enter your username' {...username} />
            <Input type='password' id='password' label='Password' placeholder='Enter your password' {...password} />
            <Button contentText='Sign in' />
            <p className='underMessage'>Click <a href="/login/create">here</a> if you dont't have an account</p>
            <p className='underMessage'>Do you forget your password? Click <a href="/login/lost">here</a></p>
        </form>
    </section>
}

export default LoginForm