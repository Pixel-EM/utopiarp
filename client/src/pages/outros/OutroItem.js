import React from 'react'

const OutroItem = (props) => {
    return (
        <div className="outrosCard">
            <div className="imagemOutros">
                <img className="cardImgOutros" src={props.img} alt="VIP" />
            </div>
            <div className="infoOutros">
            <table>
                <tbody>
                    <tr>
                        <td className="propsName">Nome</td>
                        <td className="propsValue">{props.nome}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Valor</td>
                        <td className="propsValue">R$ {props.valor}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="buttonVipContainer">
                <button onClick={props.click} className="buttonVip vippage">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default OutroItem
