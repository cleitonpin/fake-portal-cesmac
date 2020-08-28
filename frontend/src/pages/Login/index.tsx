import React, { useState, FormEvent } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './styles.css'

export default function Login(){


    const [validated, setValidated] = useState(false)
    const [erros, setErros] = useState({})
    const [matricula, setMatricula] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e: FormEvent){
        e.preventDefault()        
    }

    return (
        <div id="container">
            <div className="box">
                    <h2>Login</h2>
                <form>
                    
                    <label htmlFor="login">Email</label>
                    <input name="name" type="text"/>
                    <br/>

                    <label htmlFor="password">Password</label>
                    <input name="psw" type="password"/>
                
                </form>
                    
            </div>
        </div>
    )
}