import React from 'react'



const Vip = (props) => {

    return (
        <div className="vipCard">
            <div className="imagemVip">
                <img className="cardImgVip" src={props.vip} alt="VIP" />
            </div>

            <div className="infoVip">
                <table>
                <tbody>
                    <tr>
                        <td className="propsName">Valor de compra</td>
                        <td className="propsValue">R$ {props.valorvip}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Salário</td>
                        <td className="propsValue">{props.salario}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Dinheiro</td>
                        <td className="propsValue">{props.dinheiro}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Vagas</td>
                        <td className="propsValue">{props.vagas}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Tag Discord</td>
                        <td className="propsValue">{props.tagdiscord}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Casa</td>
                        <td className="propsValue">{props.casa}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Placa</td>
                        <td className="propsValue">{props.placa}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Mochila</td>
                        <td className="propsValue">{props.mochila}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Prioridade na fila</td>
                        <td className="propsValue">{props.prioridade}</td>
                    </tr>
                    <tr>
                        <td className="propsName">Instagram</td>
                        <td className="propsValue">{props.instagram}</td>
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

export default Vip
