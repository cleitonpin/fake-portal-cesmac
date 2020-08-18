import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'

export default function Footer(){

    return (
    
        <Container style={{ 
                    padding: '25px',                         
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center' }} >

            <Card.Footer style={{ 
                    textAlign: 'center', 
                    fontSize: '14px', 
                }} className="text-muted">Desenvolvido por Lok.</Card.Footer>
        </Container>


    )

}