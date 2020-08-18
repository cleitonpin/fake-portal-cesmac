import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/esm/Button'
import { FaDownload } from 'react-icons/fa'

export default function Documentos(){
    return (
        <>
            <Header title="Documentos institucionais">
                <div className="caixa">
                    <h3>Centro Universitário Cesmac</h3>

                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Download PDF</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td>PDI CESMAC</td>
                                <td><Button variant="danger"><FaDownload/></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Header>

            <Footer/>
        </>
    )
}