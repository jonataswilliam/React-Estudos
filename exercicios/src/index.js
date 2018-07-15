import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import Multi, {BoaTarde, BoaNoite} from './components/Multiplos'
import Saudacao from './components/Saudacao'


ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
    </div>
,document.getElementById('root'))