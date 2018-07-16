import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import Multi, {BoaTarde, BoaNoite} from './components/Multiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render(
    <div>
        <div>
            <Saudacao tipo="Bom dia" nome="João" />
        </div>
        <div>
            <Pai nome="Paulo" sobrenome="Silva" />
                <div>
                    <Filho nome="Pedro"/>
                    <Filho nome="João"/>
                    <Filho nome="Carla"/>
                </div>
        </div>
    </div>
,document.getElementById('root'))