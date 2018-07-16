// 3 Formas de exportar componentes com mais de um elemento.
// 1 - Envolvendo os componentes dentro de uma <div></div>
// 2 - Usando React.Fragment se não quisermos que seja criado nenhum elemento a mais envonvendo eles. Como no caso da div acima. Podemos também colocar a propriedade Fragment no Import e utilizar apenas Fragment
// 3 - Envolvendo os elementos em um array. Para otimizar devemos colocar um attr key dentro de cada elemento do array.


import React, { Fragment } from 'react'

// 1
// export default props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// 2
export default props => 
    <React.Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>

    // <Fragment>
    //     <h1>Bom dia, {props.nome}!</h1>
    //     <h2>Até breve!</h2>
    // </Fragment>

// 3
// export default props => [
//     <h1 key="h1">Bom dia, {props.nome}!</h1>,
//     <h2 key="h2">Até breve!</h2>
// ]   
