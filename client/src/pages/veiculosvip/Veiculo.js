import React from 'react'


const Veiculo = (props) => {

    return (
        <div className="cardCarro">
            <div className="cardImagem">
                <img className="imgCar" src={props.foto} alt="Veiculo" />
            </div>
            <div className="cardInfo">
                <div className="cardProps">
                    <span className="nome">{props.nome}</span>
                    <span className="tipo">Tipo: {props.tipo}</span>
                    <span className="valor">Valor: R$ {props.valor}</span>
                </div>
                <div className="cardButton">
                    <button onClick={()=> window.open(props.foto, "_blank")} className="cardButtonUnit vis">VISUALIZAR IMAGEM</button>
                    <button onClick={props.click} className="cardButtonUnit add">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        </div>
    )
}

export default Veiculo
