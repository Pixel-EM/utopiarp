import React, { useEffect, useState, useRef } from 'react'
import Veiculo from './Veiculo'
import './veiculosvip.css'
import Carrinho from '../../components/carrinho/Carrinho'

const axios = require('axios').default

const VeiculosVip = ({ updateValor, setValorFunction, cartItems, setCartItems, updateNomes }) => {

    // REF for rendering more cars onClick
    const maisCarros = useRef(null)

    // Saving the array from fetch() functions
    const [carros, setCarros] = useState([])
    // State for rendering more cars on page
    const [ncarro, setNcarro] = useState(9)

    // How many items in the shopping cart
    const [checkout, setCheckout] = useState(0)
    // onHover, change what is shown between the word('checkout') and monetary value
    const [itemNoCarrinho, setItemNoCarrinho] = useState('Checkout')

    // Hook for price and name of that the user clicked
    const [valores, setValores] = useState(0)
    const [nomes, setNomes] = useState([])
    
    useEffect(()=>{ 
        // Fetch function for getting cars from DB
        const fetchCarros = async ()=>{
            // GET from api/cvip/
            const res = await axios.get('/cvip/')
            // Array to save response
            let infoCarros = []
            
            // Limit the render to the maximum number of items in DB
            if(ncarro < res.data.length){
                for(let i=0; i<ncarro; i++){
                    infoCarros.push(res.data[i])
                }
            }else{
                let db = res.data.length
                for(let i=0; i<db; i++){
                    infoCarros.push(res.data[i])
                }
                // If no more cars in DB, hide the "more cars" button
                maisCarros.current.style.display = "none"
            }
            // Seeting the hook with response array from DB
            setCarros(infoCarros)
        }
        // Calling the function described above
        fetchCarros()
    // Every time the hook with cars renders, fetch more
    },[ncarro])
    
    useEffect(()=>{
        updateValor(valores)
        setCartItems(checkout)
        updateNomes(nomes)
    },[valores, updateValor, checkout,setCartItems, nomes, updateNomes])

    return (
        <div className="cvipWrapper">
            <div className="cvipFiltrosWrapper">
                <div className="contentTitle">
                    <h1>Veículos VIP</h1>
                </div>
            </div>
            <Carrinho 
                onMouseOut={()=>{setItemNoCarrinho('Checkout')}} 
                onMouseOver={()=>{setItemNoCarrinho('R$ ' + setValorFunction)}} 
                checkout={ itemNoCarrinho } 
                // # of items on shopping cart
                carrinho={ cartItems } 
            />
            <div className="cvipContent">
                {
                    carros.map((carro, i)=>(
                        <Veiculo 
                            key={i} 
                            click={()=>{
                                setCheckout(checkout + 1)
                                setValores(parseInt(valores) + carro.valor)
                                setNomes([...nomes, carro.nome])
                            }} 
                            nome={carro.nomecarro} 
                            tipo={carro.tipo} 
                            valor={carro.valor} 
                            foto={carro.foto}
                        />               
                    ))
                }
            </div>
            <div ref={maisCarros} className="maisCarros">
                <button onClick={()=>{setNcarro(ncarro + 9)}} className="buttonMaisCarros">Carregar mais veículos</button>
            </div>
        </div>
    )
}

export default VeiculosVip
