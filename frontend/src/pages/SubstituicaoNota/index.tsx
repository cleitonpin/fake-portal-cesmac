import React from 'react'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'

import { AiFillWarning } from 'react-icons/ai'

import './styles.css'

export default function SubstituicaoNota(){
    return (
        <>
            <Header title="Substituição de Nota">
                <div className="alert-warning">
                    <AiFillWarning style={{ margin: '4px' }}/> <p>{' '}Não será possível fazer a solicitação de substituição de nota, por estar fora do período determinado no calendário.</p>
                </div>
            </Header>
            <Footer/>
        </>
    )
}