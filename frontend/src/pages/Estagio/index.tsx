/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import { FaArrowCircleRight, FaHome, FaPhoneAlt, FaEnvelope, FaFile } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'


import './styles.css'

export default function Estagios(){

    const [open, setOpen] = useState(false)

    return(
        <>
            <Header title="Central de Estágios">

                <Row>
                    <Col>

                        <div className="buttons">
                            <Button style={{ marginRight: '12px' }}><FaFile/>  Termo de Convênio</Button>
                            <Button><FaFile/>  Termo de Compromisso</Button>{' '}
                        </div>

                        <div className="box-sizing">

                        <h4>Descrição da vaga</h4>

                        <div className="vagas">
                            
                            <div className="panel-heading">
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapsed0"
                                    aria-expanded={open}
                                    style={{
                                        fontFamily: 'Archivo',
                                        fontSize: '15px',                                               
                                    }}
                                ><FaArrowCircleRight/> VAGA DE ESTÁGIO - ADMINISTRAÇÃO ( 17/08/2020 até 24/08/2020 )</Button>

                                <Collapse in={open}>
                                    <div id="collapsed0">
                                        <div className="pane-body">
                                            <h3><strong>Pré-requisito: </strong></h3>

                                            <p>Mandato</p>

                                            <h3><strong>Informações: </strong></h3>

                                            <p>Cura</p>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    </Col>

                    <Col xs={12} sm={2} style={{ marginTop: '6rem' }}>

                        <div className="infos">
                            <address>
                                <strong><FaHome/> Endereço:</strong>
                                <p> Rua cônego Machado,918, Farol</p>

                                <strong><FaPhoneAlt/> Telefone:</strong>
                                <p> 3215-5181/3215-5129</p>

                                <strong><FaPhoneAlt/> FAX:</strong>
                                <p> 3215-5145</p>
                                <strong><FaEnvelope/> E-mail:</strong>
                                <p> estagios@cesmac.edu.br</p>
                            </address>

                        </div>
                        
                    </Col>
                </Row>

                            
            </Header>

            <Footer/>
        </>
    )
}