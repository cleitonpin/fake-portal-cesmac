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
            <div className="boxe">
                    <Form onSubmit={handleSubmit} noValidate validated={validated}>
                        <h2>Login</h2>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Matrícula</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={matricula} 
                                onChange={(e) => setMatricula(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <p><a href="">Esqueceu a senha, clique aqui!</a></p>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            <span>Acessar</span>
                        </Button>
                    </Form>
                    
            </div>
        </div>
    )
}