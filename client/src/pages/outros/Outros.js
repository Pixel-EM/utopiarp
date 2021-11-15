import React, { useEffect, useState } from 'react'
import OutroItem from './OutroItem'
import './outros.css'

import mansao from '../../assets/outros/mansao.webp'
import apluxo from '../../assets/outros/apluxo.png'
import dj from '../../assets/outros/DJ.jpg'
import instagram from '../../assets/outros/instagram.png'
import placa from '../../assets/outros/placa.png'
import sinuca from '../../assets/outros/sinuca.png'
import vaga from '../../assets/outros/vagas.jpg'
import arma from '../../assets/outros/arma.png'
import armabranca from '../../assets/outros/armabranca.png'
import Carrinho from '../../components/carrinho/Carrinho'

const axios = require('axios')

function Outros({ updateValor, setValorFunction, cartItems, setCartItems, updateNomes }) {
    const [outros, setOutros] = useState([])
    const imagens = [mansao, sinuca, placa, vaga, instagram, armabranca, arma, apluxo, dj]

    // How many items in the shopping cart
    const [checkout, setCheckout] = useState(0)
    // onHover, change what is shown between the word('checkout') and monetary value
    const [itemNoCarrinho, setItemNoCarrinho] = useState('Checkout')

    // Hook for price and name of that the user clicked
    const [valores, setValores] = useState(0)
    const [nomes, setNomes] = useState([])

    useEffect(()=>{
        const fetchOutros = async ()=>{
            const res = await axios.get('/outros/')
            let infoOutros = []
            for (let i = 0; i < res.data.length; i++) {
                infoOutros.push(res.data[i])
            }
            setOutros(infoOutros)
        }
        fetchOutros()
    }, [])

    useEffect(()=>{
        updateValor(valores)
        setCartItems(checkout)
        updateNomes(nomes)
    },[valores, updateValor, checkout, setCartItems, nomes, updateNomes])
    
    return (
        <div className="outrosContainer">
            <div className="cvipFiltrosWrapper">
                <div className="contentTitle">
                    <h1>Outros</h1>
                </div>
            </div>
            <Carrinho 
                onMouseOut={()=>{setItemNoCarrinho('Checkout')}} 
                onMouseOver={()=>{setItemNoCarrinho('R$ ' + setValorFunction)}} 
                checkout={ itemNoCarrinho } 
                // # of items on shopping cart
                carrinho={ cartItems } 
            />
            <div className="planosVipContainer">
                { 
                outros.map((info, i)=>(
                    <OutroItem 
                        key={i}
                        img={imagens[i]}
                        nome={info.nome}
                        valor={info.valor}
                        click={()=>{
                            setCheckout(checkout + 1)
                            setValores(parseInt(valores)+ parseFloat(info.valor))
                            setNomes([...nomes, info.nome])
                        }}
                    />
                ))
                }

            </div>
        </div>
    )
}

export default Outros
