/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/logo.png'


interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <header>

                <Navbar expand="lg" className="nav" style={{ padding: 0 }}>
                <Nav.Link href="/" className="logo"><img className="d-inline-block align-top" src={Logo}/> </Nav.Link>
                    <Navbar.Collapse id="basic-navbar-nav" className="nav-right">
                        
                        <Nav.Link href="#" disabled><img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/ico-ajuda.png"  width="28px"/> Ajuda</Nav.Link> 
                        <Nav.Link href="#" disabled><img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/ico-wifi.png"/> Faça seu Cadastro</Nav.Link> 
                        <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/ico-edit.png"/>
                        <NavDropdown title="Alterar Dados" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#">Alterar Senha</NavDropdown.Item>
                            <NavDropdown.Item href="#">Meus Dados</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#"><img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/ico-sair.png"/>Sair</Nav.Link> 

                    </Navbar.Collapse>
                </Navbar>

                <section>
                
                    <div className="azul">

                        <Navbar expand="lg" variant="light">
                            <Navbar.Collapse id="basic-navbar-nav" className="menu-principal">
                                <NavDropdown title="Acadêmico" id="basic-nav-dropdown" menuRole="role">
                                    
                                    <Link className="dropdown-item" role="button" to="/horario" >Horário</Link>
                                    <Link className="dropdown-item" role="button" to="/consultaNotas">Consulta de Notas e Faltas</Link>
                                    <Link className="dropdown-item" role="button" to="/certificados">Certificados</Link>
                                    <Link className="dropdown-item" role="button" to="/matricula">Matrícula</Link>
                                    <Link className="dropdown-item" role="button" to="/monitoria">Monitoria</Link>
                                    <Link className="dropdown-item" role="button" to="/substituicoesNotas">Substituição de nota</Link>
                                    <Link className="dropdown-item" role="button" to="/secretaria">Secretaria ONLINE</Link>
                                    <Link className="dropdown-item" role="button" to="#">Conteúdo de Aula</Link>                                    
                                
                                </NavDropdown>
                                <Nav.Link href="#">Conteúdo de Aula</Nav.Link>
                                <Nav.Link href="#" disabled>AVA</Nav.Link>
                                <NavDropdown title="Financeiro" id="basic-nav-dropdown">

                                    <Link className="dropdown-item" role="button" to="/emissaoBoleto">Impressão de boletos</Link>
                                    <Link className="dropdown-item" role="button" to="/financeiro">Consulta Financeira</Link>
                                    <Link className="dropdown-item" role="button" to="/negociacao">Negociação</Link>
                                    <Link className="dropdown-item" role="button" to="/comprovanteIR">Declaração IR</Link>

                                </NavDropdown>
                                <NavDropdown title="Institucional" id="basic-nav-dropdown">

                                    <Link className="dropdown-item" role="button" to="/documentos" >Documentos</Link>

                                </NavDropdown>
                                <NavDropdown title="Serviços" id="basic-nav-dropdown">

                                        <Link className="dropdown-item" role="button" to="/biblioteca" >Biblioteca</Link>
                                        <Link className="dropdown-item" role="button" to="/estagios" >Central de Estágios</Link>
                                        <Link className="dropdown-item" role="button" to="/NAC" >NAC</Link>
                                        {/* <Link className="dropdown-item" role="button" to="#" aria-disabled="true">NAPC</Link> */}
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </section>

                <Container 
                style={{ 
                    padding: 0, 
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <div className="bar-titt" >
                    <Row>
                        <Col sm={8} >
                            <p className="text">{title}</p>
                        </Col>
                        <Col sm={4}>
                            <p>Boa tarde, CLEITON PINHEIRO AGUIAR</p>
                        </Col>
                    </Row>
                </div>

                {children}
            </Container>
            

        </header>

    )
}