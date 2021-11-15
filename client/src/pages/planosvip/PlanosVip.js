import React, { useState, useEffect } from 'react'
import './planosvip.css'
import Vip from './Vip'
import Carrinho from '../../components/carrinho/Carrinho'


import bronze from '../../assets/cartoesVip/bronze.png'
import prata from '../../assets/cartoesVip/prata.png'
import ouro from '../../assets/cartoesVip/ouro.png'
import platina from '../../assets/cartoesVip/platina.png'
import rubi from '../../assets/cartoesVip/rubi.png'
import utopia from '../../assets/cartoesVip/utopia.png'

const axios = require('axios').default

const PlanosVip = ({setValorFunction, updateValor, cartItems, setCartItems, updateNomes }) => {
    const lista = [bronze, prata, ouro, platina, rubi, utopia]
    const [vip, setVip] = useState([])

    // How many items in the shopping cart
    const [checkout, setCheckout] = useState(0)

    // onHover, change what is shown between the word('checkout') and monetary value
    const [itemNoCarrinho, setItemNoCarrinho] = useState('Checkout')

    // Hook for price and name of that the user clicked
    const [valores, setValores] = useState(0)
    const [nomes, setNomes] = useState([])

    useEffect(()=>{ 
        const fetchVip = async ()=>{
            const res = await axios.get('/donate/')
            let infoVip = []

            for (let i = 0; i < res.data.length; i++) {
                infoVip.push(res.data[i].tipo)
            }
            setVip(infoVip)
        }
        fetchVip()
    },[])

    useEffect(()=>{
        updateValor(valores)
        setCartItems(checkout)
        updateNomes(nomes)
    },[valores, updateValor, checkout, setCartItems, nomes, updateNomes])

    return (

        <div className="planosVipWrapper">
            <div className="cvipFiltrosWrapper">
                <div className="contentTitle">
                    <h1>Planos VIP</h1>
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
                vip.map((info, i)=>(
                    <Vip 
                        key={i}
                        vip={lista[i]}
                        valorvip={info.valorvip}
                        salario={info.detalhes.salario}
                        dinheiro={info.detalhes.dinheiro}
                        vagas={info.detalhes.vagas}
                        tagdiscord={info.detalhes.tagdiscord}
                        prioridade={info.detalhes.prioridade}
                        casa={info.detalhes.casa}
                        placa={info.detalhes.placa}
                        mochila={info.detalhes.mochila}
                        instagram={info.detalhes.instagram}
                        click={()=>{
                            setCheckout(checkout + 1)
                            setValores(parseInt(valores)+ parseFloat(info.valorvip))
                            setNomes([...nomes, info.nome])
                        }}
                    />
                ))
                }

            </div>
        </div>
    )
}

export default PlanosVip
