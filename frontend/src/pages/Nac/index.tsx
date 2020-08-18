import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import { BsCheck, BsEnvelope } from 'react-icons/bs'

import './styles.css'

export default function Nac(){
    return (
        <>
            <Header title="NAC">
                <div id="infosNAC">
                    <p style={{ fontSize: '20px' }}><strong>Núcleo de Acessibilidade Cesmac- NAC</strong></p>

                    <p><strong>Você conhece a missão do NAC?</strong></p>

                    <p>Promover a acessibilidade e a inclusão como direito universal a todos os sujeitos, independente de suas características físicas, sensoriais e intelectuais, bem como demover barreiras físicas, arquitetônicas, atitudinais, didático-metodológicas e de comunicação no âmbito do Centro Universitário Cesmac.</p>

                    <p><strong>São ainda objetivos do NAC?</strong></p>
                    <ul>
                        <li><BsCheck/> Avaliar as necessidades especiais dos estudantes que solicitam acompanhamento e/ou promover encaminhamentos;</li> 
                        <li><BsCheck/> Realizar acompanhamento individualizado aos estudantes com necessidades educacionais especiais, esclarecendo sobre os apoios institucionais existentes e a efetivação dos procedimentos indicados;</li>
                        <li><BsCheck/> Articular e mediar a concretização das ações que envolvam a eliminação de barreiras físicas, arquitetônicas, omunicacionais, informacionais, atitudinais e pedagógicas e didático- metodológicas;</li>
                        <li><BsCheck/> Atuar de forma colaborativa com os professores dos diferentes cursos da instituição, visando a assessoria ou consultoria na definição de estratégias pedagógicas que favoreçam o acesso do estudante ao currículo; de sua interação com o grupo; enriquecimento curricular, compactação curricular e/ou a aceleração de conteúdos ou de estudos, quando aplicável;</li>
                        <li><BsCheck/> Garantir o pleno acesso, participação e aprendizagem das pessoas com deficiência.</li>
                    </ul>

                    <p>Agende seu horário através do e-mail: <BsEnvelope/> napc@cesmac.edu.br</p>
                </div>

            </Header>

            <Footer/>
        </>
    )
}