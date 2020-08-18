import React from 'react'

import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './styles.css'

export default function Monitoria(){
    return (
        <>
            <Header title="Monitoria">
                <div className="box">
                    <h4>Monitoria Remota 2020.1</h4>
                    <p>CPF:	XXXXXXXXX</p>
                    <p>Nome:	CLEITON PINHEIRO AGUIAR</p>
                    <p>Matrícula:	1913961794</p>
                    <p>Situação:	Matriculado</p>
                    <p>Curso:	SISTEMAS DE INFORMAÇÃO - NOTURNO</p>

                    <h4>Dados de interesse</h4>
                    <div className="select">
                            <Form.Label htmlFor="disciplina" style={{ marginRight: '10px' }}>Disciplina:</Form.Label>
                            <Form.Control as="select" custom>
                                <option value="" hidden>Selecione</option>
                                <option value="Lab3">Lab3</option>
                                <option value="Probabilidade">Probabilidade</option>
                                <option value="Engenharia">Engenharia</option>
                        </Form.Control>
                    </div>
                    <Button variant="success" style={{ fontSize: '14px' }}>Confirmar inscrição</Button>
                </div>

            </Header>

            <Footer/>
        </>
    )
}