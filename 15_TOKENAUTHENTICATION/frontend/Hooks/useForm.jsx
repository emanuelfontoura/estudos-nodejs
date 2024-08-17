import React from "react";

const Types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'CEP inválido!'
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido!'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números!'
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value_){
        if(type === false) return true
        if(value_.length === 0){
            setError('Campo obrigatório!')
            return false
        }else if(Types[type] && !Types[type].regex.test(value_)){
            setError(Types[type].message)   
            return false
        }else{
            setError(null)
            return true
        }
    }

    function onChange({target}){
        if(error) validate(target.value)
        setValue(target.value)
    }

    return {value, setValue, onChange, onBlur: () => validate(value), error, validate: () => validate(value)}
}

export default useForm