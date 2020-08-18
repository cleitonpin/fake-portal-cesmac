import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';
import Horario from './pages/Horario'
import Consultas from './pages/Consultas';
import Certificados from './pages/Certificados';
import Matricula from './pages/Matricula';
import Monitoria from './pages/Monitoria';
import SubstituicaoNota from './pages/SubstituicaoNota';
import Secretaria from './pages/Secretaria';
import EmissaoBoleto from './pages/EmissaoBoleto'; 
import ConsultaFinanceira from './pages/ConsultaFinanceira';
import Negociacao from './pages/Negociacao';
import Navbars from './components/Navbar';
import DeclaracaoIR from './pages/DeclaracaoIR';
import Documentos from './pages/Documentos';
import Biblioteca from './pages/Biblioteca';
import Estagios from './pages/Estagio';
import Nac from './pages/Nac';

export default function Routes(){
    return (

        <BrowserRouter>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/horario" component={Horario}/>
            <Route exact path="/consultaNotas" component={Consultas}/>
            <Route exact path="/certificados" component={Certificados}/>
            <Route exact path="/matricula" component={Matricula}/>
            <Route exact path="/monitoria" component={Monitoria}/>
            <Route exact path="/substituicoesNotas" component={SubstituicaoNota}/>
            <Route exact path="/secretaria" component={Secretaria}/>
            <Route exact path="/emissaoBoleto" component={EmissaoBoleto}/>
            <Route exact path="/financeiro" component={ConsultaFinanceira}/>
            <Route exact path="/negociacao" component={Negociacao}/>
            <Route exact path="/comprovanteIR" component={DeclaracaoIR}/>
            <Route exact path="/documentos" component={Documentos}/>
            <Route exact path="/biblioteca" component={Biblioteca}/>
            <Route exact path="/estagios" component={Estagios}/>
            <Route exact path="/NAC" component={Nac}/>

            <Route exact path="/test" component={Navbars}/>


    
        </BrowserRouter>
    )

}