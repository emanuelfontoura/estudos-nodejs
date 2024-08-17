import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate.jsx'
import LoginPasswordLost from './LoginPasswordLost.jsx'
import LoginPasswordReset from './LoginPasswordReset.jsx'

const Login = () => {
    return <>
        <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/create' element={<LoginCreate />} />
            <Route path='/lost' element={<LoginPasswordLost />} />
            <Route path='/reset' element={<LoginPasswordReset />} />
        </Routes>
    </>
}

export default Login