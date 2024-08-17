import React from 'react'

const usePassword = (password) => {
    const [error, setError] = React.useState(null)
    const [value, setValue] = React.useState('')

    const validateEqual = (_value) => {
        if(_value.length === 0){
            setError('Campo obrigatório!')
            return false
        }else if(_value !== password){
            setError('Senhas diferentes. Por favor, digite novamente!')
            return false
        }else{
            console.log(_value)
            setError(null)
            return true
        }
    }
    const onChange = (e) => {
        if(error) validateEqual(e.target.value)
        setValue(e.target.value)
    }

    return {value, setValue, onChange, onBlur: () => validateEqual(value), validateEqual: () => validateEqual(value), error}
}

export default usePassword