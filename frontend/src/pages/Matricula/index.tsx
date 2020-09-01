import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import Footer from '../../components/Footer';

import { FaEdit, FaPrint, FaArrowCircleRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';

import './styles.css';

export default function Matricula() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header title="Matrícula">
                <Button variant="success" style={{ fontSize: '15px' }}>
                    <FaEdit /> Clique aqui para fazer a Matrícula de Encaixe e Dependência
                </Button>

                <div className="legend">
                    <h2>Legendas</h2>
                    <div className="names-legends">
                        <span>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/legendas/disponivel.gif" />{' '}
                            Disponível
                        </span>
                        <span>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/legendas/preReqPend.gif" />{' '}
                            Pré-requisito
                        </span>
                        <span>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/legendas/naoHaVagas.gif" />{' '}
                            Não há vagas
                        </span>
                        <span>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/legendas/cursando.gif" />{' '}
                            Cursando
                        </span>
                        <span>
                            <img src="https://sistemas.cesmac.edu.br/academico/online/aluno/images/legendas/cursada.gif" />{' '}
                            Cursada
                        </span>
                    </div>
                    <div className="dados-aluno">
                        <h4>Dados do aluno</h4>
                        <div className="dados">
                            <p>Matrícula: 1913961355</p>
                            <p>Nome: CLEITON PINHEIRO AGUIAR</p>
                            <p>Curso: SISTEMAS DE INFORMAÇÃO - NOTURNO</p>
                            <p>Matriz Curricular: MATRIZ DE SISTEMAS DE INFORMAÇÃO</p>
                            <p>Turma: 39.4AN 2020/2 - 4</p>
                        </div>
                    </div>

                    <div className="comprovante-matricula">
                        <h4>Comprovante de Matrícula</h4>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Matrícula</th>
                                    <th>Nome</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1913961355</td>
                                    <td>CLEITON PINHEIRO AGUIAR</td>
                                    <td>
                                        <Link to="#">
                                            <FaPrint />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="discip-matriculadas">
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{
                                fontFamily: 'Archivo',
                                fontSize: '20px',
                            }}
                        >
                            <FaArrowCircleRight /> Disciplinas Matriculada
                        </Button>

                        <Collapse in={open}>
                            <div style={{ marginTop: '20px' }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Disciplina</th>
                                            <th>Carga horária</th>
                                            <th>Turma</th>
                                            <th>Turno</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>MATEMÁTICA COMPUTACIONAL</th>
                                            <th>2</th>
                                            <th>39.4AN</th>
                                            <th>Noite</th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </Header>
            <Footer />
        </>
    );
}
