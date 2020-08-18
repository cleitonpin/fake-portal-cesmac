import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'


import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'

import { FaPrint } from 'react-icons/fa'

import './styles.css'

export default function DeclaracaoIR(){
    return (
        <>
            <Header title="Comprovante de imposto de renda">

                <div className="caixa">

                    <div className="anoBASE">
                        <Form.Label htmlFor="ano">Ano base:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control as="select" custom>
                                        <option value="">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2016</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button style={{ display: 'flex' }}>Pesquisar</Button>
                                </Col>

                            </Row>


                    </div>


                    <h5>Títulos</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nossonumero</th>
                                <th>Documento</th>
                                <th>Data de vencimento</th>
                                <th>Valor pago</th>
                                <th>Data de pagamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Não existem titulos</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

                <Button variant="success" style={{ width: '100%', marginTop: '25px' }}><FaPrint/> Imprimir</Button>
            </Header>

            <Footer/>
        </>

    )
}