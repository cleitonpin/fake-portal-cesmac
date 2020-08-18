import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './styles.css'

export default function Secretaria(){
    return (
        <>
            <Header title="Secretaria ONLINE">
                <h4>Selecione o documento que você deseja solicitar.</h4>
                <div className="box-on">
                    <Form.Label htmlFor="disciplina" style={{ marginRight: '10px' }}>Documento:</Form.Label>
                            <Form.Control as="select" custom>
                                <option value="" hidden>Selecione</option>
                                <option value="5">01 - Declaração Matriculado com Horario no Curso</option>
                                <option value="6">02 - Declaracao Inicio e Termino do Curso</option>
                                <option value="9">05 - Declaração Provavel Concluinte</option>
                                <option value="10">06 - Declaração Regularmente Matriculado</option>
                                <option value="12">08 - Declaração Fies com Prazo para Termino do Curso</option>
                                <option value="14">10 - Declaração Plano de Saude</option>
                                <option value="15">11 - Declaração que Esteve Matriculado Periodo Anterior</option>
                                <option value="16">12 - Declaração Sub Judice</option>
                                <option value="17">13 - Declaração Trancamento</option>
                                <option value="18">14 - Declaração Conclusão de Disciplinas exceto TCC</option>
                                <option value="19">15 - Declaração com Data do Término do Semestre</option>
                                <option value="20">16 - Declaração Conduta Escolar</option>
                                <option value="22">18 - Declaração de Classificação e Pontuação do Vestibular</option>
                                <option value="23">19 - Declaração de Conclusão de Curso</option>
                                <option value="25">21 - Declaração Cursada mais de 50 por Cento Carga Horária Total Curso</option>
                                <option value="26">22 - Solicitação de Histórico Escolar</option>
                        </Form.Control>
                        <Button style={{ marginLeft: '10px' }}>Solicitar</Button>
                </div>
            </Header>
            <Footer/>
        </>
    )
}