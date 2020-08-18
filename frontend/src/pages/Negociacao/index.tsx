import  React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'


import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'


export default function Negociacao(){
    return (
        <>
            <Header title="Negociação">
                <div className="caixa">

                    <Form.Label 
                        htmlFor="ano" 
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'blue',
                            padding: '8px',
                            border: '1px solid blue',
                            borderRadius: '8px',
                            color: '#000'
                        }}
                    >CONDIÇÕES DE PAGAMENTO</Form.Label>
                    <Form.Control as="select" custom>
                        <option value="" hidden>SELECIONE</option>
                    </Form.Control>
                    <Form.Label 
                        htmlFor="ano" 
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'blue',
                            padding: '8px',
                            border: '1px solid blue',
                            borderRadius: '8px',
                            color: '#000',
                            marginTop: '20px'
                        }}
                    >LANÇAMENTO(S) DA NEGOCIAÇÃO</Form.Label>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Parcela</th>
                                <th>Tipo Documento Pagamento</th>
                                <th>Data de Vencimento</th>
                                <th>Valor Principal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Não existem parcelas de negociação</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </Header>
            <Footer/>
        </>
    )
}