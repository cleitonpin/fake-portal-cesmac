import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { FaPrint, FaIdCard } from 'react-icons/fa'

export default function EmissaoBoleto(){
    return (

        <>
            <Header title="Pagamento">
                <div className="caixa">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Ano/Semestre</th>
                                <th>Parcela</th>
                                <th>Vencimento</th>
                                <th>Serviço</th>
                                <th>Valor</th>
                                <th>Desconto</th>
                                <th>Dias em atraso</th>
                                <th>Multas Juros</th>
                                <th>A pagar</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>0</td>
                                <td></td>
                                <td>#</td>
                                <td style={{ display: 'flex'}}>                                    
                                    <Button style={{ marginRight: '15px' }}>
                                    <FaPrint/> Boleto</Button> 
                                    
                                    <Button>
                                    <FaIdCard/> Cartão</Button>                                    
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                </div>

            </Header>
            <Footer/>
        </>
        
    )
}