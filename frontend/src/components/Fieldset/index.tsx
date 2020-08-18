import React from 'react'


import './styles.css'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

interface FieldsetProps {
    turn: string,
}

export const Fiedlset: React.FC<FieldsetProps> = ({ turn }) => {
    return (

        <Container style={{ padding: 0 }}>

            <fieldset>
            <p>{turn}</p>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Aula</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                        <th>Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6ª</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            </fieldset>
        </Container>

    )
}