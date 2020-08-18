import React from 'react'

import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import './styles.css'

export default function Consultas(){
    return (

        <>

            <Header title="Consulta de Notas e Faltas">
                <fieldset className="field">
                    <p>Selecione o ano e o período que deseja consultar as notas e faltas</p>

                    <Row md={4}>
                        <Col xs={6} md={4}>
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor="ano">Ano:</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option value="">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2016</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                        </Col>
                        <Col xs={6} md={4}>
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor="ano">Semestre:</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option value="1">1</option>
                                        <option value="2">2</option>

                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ paddingTop: '6px' }}>{'\u200b'}</div>
                            <Button variant="info">Consultar</Button>
                        </Col>
                    </Row>

                </fieldset>
                <div className="notas">
                    <h2>2020/2</h2>

                    <Table  striped bordered hover>
                        <thead>
                            <tr>
                                <th>Disciplina</th>
                                <th>Faltas</th>
                                <th>% Faltas</th>
                                <th>1º AF</th>
                                <th>2º AF</th>
                                <th>3º AF</th>
                                <th>Rep.</th>
                                <th>MP</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GESTÃO DO CONHECIMENTO</td>
                                <td>0</td>
                                <td>0,00</td>
                                <td>0,00</td>
                                <td>0,00</td>
                                <td>0,00</td>
                                <td>0,00</td>
                                <td>0,00</td>
                                <td>Cursando</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </Header>

            <Footer/>
        </>
    )
}
