import React from 'react'
import './home.css'
import cardImg1 from '../../assets/card1.jpg'
import cardImg2 from '../../assets/card2.jpg'
import cardImg3 from '../../assets/card3.jpg'
import Card from './Card'
import pag1 from '../../assets/mercadopago.png'
import pag2 from '../../assets/pagseguro.png'
import pag3 from '../../assets/picpay.png'
import pag4 from '../../assets/pix.png'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="homeWrapper">
            <div className="contentWrapper">
                <div className="contentTitle">
                        <h1>Utopia Roleplay</h1>
                </div>
                <Card img={cardImg1} imgText='VEÍCULOS MOD' description='Biblioteca de veículos mod diversificada e permanente na sua conta. Carros esportivos, motos, caminhões e helicópteros!' />
                <Card img={cardImg2} imgText='FACÇÕES DISPONÍVEIS' description='Favelas e organizações livres para quem gosta de fazer RP ilegal. Sistema de produção balanceado, farm equilibrado!' />
                <Card img={cardImg3} imgText='TEMA PRÓPRIO' description='Cidade com tema próprio; viaturas e uniformes personalizados! Matrizes de empregos e favelas otimizados!' />
            </div>
            <div className="vipContainer">
                <div className="vipBannerContainer">
                    <div className="vipBanner">
                        <h1>Veja as vantagens de nossos planos VIPs!</h1>
                        <Link to="/planosvip">
                            <button className="buttonVip">Acesse e veja nossos planos!</button>
                        </Link>
                        
                    </div>
                    <div className="anuncioBanner">
                        <img src={pag1} alt="MercadoPago" />
                        <img src={pag2} alt="PagSeguro" />
                        <img src={pag3} alt="PicPay" />
                        <img src={pag4} alt="Pix" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Home
