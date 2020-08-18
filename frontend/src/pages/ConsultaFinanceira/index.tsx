import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

import Table from 'react-bootstrap/Table'
import { BsCheck, BsEnvelopeOpen, BsWindow, BsCloudDownload } from 'react-icons/bs'

export default function ConsultaFinanceira(){
    return (

        <>
            <Header title="Consulta Financeira">

                <div className="avisos">
                    1. Caso conste alguma parcela em aberto que já foi paga por favor procure a Tesouraria do CESMAC com o comprovante de pagamento para que as informações no sistema sejam atualizadas.  As baixas dos pagamentos efetuados são realizadas no primeiro dia útil posterior a data do pagamento<br/>
                    2. Os títulos negociados em cartão ou em cheque aparecem em aberto apenas para controle contábil, os títulos serão baixados automaticamente no dia de seu pagamento, obedecendo as datas estabelecidas na negociação.
                </div>

                <h3>Legendas</h3>

                <div className="categorys">
                    <span><BsCheck/> Títulos Pagos</span>
                    <span><BsEnvelopeOpen/> Títulos em aberto</span>
                    <span><BsWindow/> Títulos a vencer</span>
                    <span><BsCloudDownload/> Títulos baixados por acordo</span>
                </div>

                <div className="caixa">
                    <legend>2020/2</legend>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Legenda</th>
                                <th>Parcela</th>
                                <th>Vencimento</th>
                                <th>Serviço</th>
                                <th>Valor</th>
                                <th>Desconto</th>
                                <th>Dias em atraso</th>
                                <th>Multas Juros</th>
                                <th>A pagar</th>
                                <th>Pago em</th>
                                <th>Valor pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><BsCheck/></td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>0,#00</td>
                                <td>#</td>
                                <td>0,00</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                            </tr>
                        </tbody>

                    </Table>
                </div>

            </Header>
            <Footer/>
        </>
        
    )
}