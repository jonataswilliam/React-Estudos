import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
import Multi, {BoaTarde, BoaNoite} from './components/Multiplos'


ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Jonatas" />
        <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
,document.getElementById('root'))