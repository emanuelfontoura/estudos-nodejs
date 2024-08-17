import React from 'react'
import Input from '../Form/Input.jsx'
import useForm from '../../Hooks/useForm.jsx'
import Button from '../Form/Button.jsx'
import usePassword from '../../Hooks/usePassword.jsx'

const LoginPasswordReset = () => {
    const password = useForm('password')
    const passwordEquals = usePassword(password.value)

    return <section>
        <form action="">
            <Input type='password' label='New password' id='password' placeholder='Enter your new password' {...password} />
            <Input type='password' label='Repeat the new password' id='password2' placeholder='Repeat your new password' {...passwordEquals} />
            <Button contentText='Reset' />
        </form>
    </section>
}

export default LoginPasswordReset