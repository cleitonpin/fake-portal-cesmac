import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Login() {
    const [erros, setErros] = useState(false);
    const history = useHistory();
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    function handleSignIn(e: FormEvent) {
        e.preventDefault();

        api.post('/login', {
            name: matricula,
            psw: senha,
        })
            .then((res) => {
                const token = res.data.token;

                history.push('/');
            })
            .catch((err) => {
                alert('Login inválido');
                setErros(true);
            });
    }

    return (
        <div id="container">
            <div className="box">
                <h2>Matrículsa</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="login">Email</label>
                    <input name="name" type="text" onChange={(e) => setMatricula(e.target.value)} />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input name="psw" type="password" onChange={(e) => setSenha(e.target.value)} />

                    <button type="submit">Acessar</button>
                    {erros && <span>Matrícula ou senha inválidos!</span>}
                </form>
            </div>
        </div>
    );
}
