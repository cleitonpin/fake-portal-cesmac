import React from 'react'

import { Header } from '../../components/Header'
import { Fiedlset } from '../../components/Fieldset'
import { FaPrint } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'

import './styles.css'
import Footer from '../../components/Footer'

export default function Horario(){
    return (

        <>
            <Header title="Horário">
                    
                    <Fiedlset turn="Tarde"/>

                    <Button variant="success"><FaPrint/> Imprimir</Button>{' '}
                    
            </Header>
            <Footer/>
        </>
    )
}
