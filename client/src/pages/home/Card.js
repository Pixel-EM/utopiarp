import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            {/* Imagem do cartão */}
            <div className="cardImg">
                <img src={ props.img } alt="Foto Thumb" />
            </div>
            <div className="cardImgText">
                <span id="textoCarro">{props.imgText}</span>
            </div>
            
            {/* Descrição do cartão */}
            <div className="cardText">
                <p>
                {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card
