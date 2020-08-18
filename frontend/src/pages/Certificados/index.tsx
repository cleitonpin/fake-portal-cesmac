import React from 'react'

import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

// import { FaPrint } from 'react-icons/fa'
// import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import './styles.css'

export default function Certificados(){
    return (

        <>

            <Header title="Emissão de Certificados">

                <div className="em">
                    <Table  striped bordered hover>
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Imprimir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                {/* <td>Imersao</td>
                                <td><Button variant="success"><FaPrint/> Imprimir</Button>{' '}</td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Header>

            <Footer/>
        </>
    )
}
