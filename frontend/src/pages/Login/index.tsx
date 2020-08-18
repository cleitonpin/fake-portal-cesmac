import React from 'react'

import './styles.css'

export default function Login(){
    return (
        <div id="container">
            <div className="box">
                    <h2>Login</h2>
                <form>
                    
                    <label htmlFor="login">Email</label>
                    <input type="text"/>
                    <br/>

                    <label htmlFor="password">Password</label>
                    <input type="password"/>
                    
                    
                    <p><a href="">Esqueceu a senha, clique aqui!</a></p>
                    <button type="submit"><span>Acessar</span></button>
                </form>
            </div>
        </div>
    )
}