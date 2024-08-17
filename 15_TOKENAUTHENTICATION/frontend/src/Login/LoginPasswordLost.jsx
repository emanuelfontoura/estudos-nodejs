import React from 'react'
import Input from '../Form/Input.jsx'
import useForm from '../../Hooks/useForm.jsx'
import Button from '../Form/Button.jsx'

const LoginPasswordLost = () => {
    const email = useForm('email')

    return <section>
        <form>
            <Input type='email' label='Email' id='email' placeholder='Enter your email' {...email} />
            <Button contentText='Recover' />
        </form>
    </section>
}

export default LoginPasswordLost