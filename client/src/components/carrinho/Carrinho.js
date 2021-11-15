import React from 'react'
import './carrinho.css'

const Carrinho = (props) => {
    return (
        <div onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} className="carrinho">
            <div className="carrinhoStatus">
                <i className="fas fa-shopping-cart fa-lg">
                    <span className="items">{props.carrinho}</span>
                </i>
                <h1 className="carrinhoText">{props.checkout}</h1>
            </div>
        </div>
    )
}

export default Carrinho
