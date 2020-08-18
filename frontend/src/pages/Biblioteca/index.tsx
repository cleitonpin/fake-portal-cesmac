/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

export default function Biblioteca(){
    return(
        <>
            <Header title="Biblioteca">

                <div className="box">
                    <h3>Seu login é o número de sua matrícula e a senha o seu CPF</h3>

                    <div className="biblioteca">
                        <ul className="links">
                            <li>
                                <a href="#">
                                    <h2>FAÇA SUA PESQUISA NO ACERVO</h2>
                                    <p>Títulos digitais disponíveis para todos. Acesse e confira.</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h2>RENOVAÇÃO</h2>
                                    <p>Publicações do CESMAC</p>
                                </a>
                            </li>
                            <li>
				                <a href="#">
				                    <h2>RESERVA ON-LINE E CONSULTA AO MEU HISTÓRICO</h2>
				                    <p>Revistas periódicas</p>
				                </a>
				            </li>
                        </ul>
                    </div>

                    <div className="links-fontes">
                        <h2>FONTES DE INFORMAÇÃO ASSINADA PELO CESMAC</h2>

                        <div className="images">
                            <img src="https://sistemas.cesmac.edu.br/academico/online/images/biblioteca/vlex-cesmac.png" alt="vlex"/>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/images/biblioteca/minha-biblioteca-cesmac.jpg" alt="mybiblio"/>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/images/biblioteca/CAPES.png" alt="capes"/>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/images/biblioteca/gedweb.png" alt="gedweb"/>
                        </div>
                    </div>
                </div>
            </Header>
            <Footer/>
        </>
    )
}