import React, { useEffect, useState } from "react"
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Outros from "./pages/outros/Outros";
import PlanosVip from "./pages/planosvip/PlanosVip";
import VeiculosVip from "./pages/veiculosvip/VeiculosVip";

import {  BrowserRouter as Router,  Routes,  Route } from "react-router-dom"


function App() { 
  const [comprasValor, setComprasValor] = useState(['0'])
  const [comprasNomes, setComprasNomes] = useState([])
  const [cart, setCart] = useState(0)
  
  const [cvip, setCvip] = useState([])
  const [cvipnomes, setCvipNomes] = useState([])
  const [cartcvip, setCartCvip] = useState(0)

  const [pvip, setPvip] = useState([])
  const [pvipnomes, setPvipNomes] = useState([])
  const [cartpvip, setCartPvip] = useState(0)

  const [outros, setOutros] = useState([])
  const [outrosnomes, setOutrosNomes] = useState([])
  const [cartoutros, setCartOutros] = useState(0)


  useEffect(()=>{
    setComprasValor(cvip + pvip + outros)
    setCart(cartcvip + cartpvip + cartoutros)
    setComprasNomes(cvipnomes + ',' + pvipnomes + ',' + outrosnomes)
  }, [cvip, pvip, outros, cartcvip, cartpvip, cartoutros, comprasNomes, cvipnomes, pvipnomes, outrosnomes])
  return (
    <div className="app">
        <Router>
          <TopBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cvip" element={<VeiculosVip updateNomes={setCvipNomes} setValorFunction={comprasValor} updateValor={setCvip} cartItems={cart} setCartItems={setCartCvip}/>} />
            <Route exact path="/planosvip" element={<PlanosVip updateNomes={setPvipNomes} setValorFunction={comprasValor} updateValor={setPvip} cartItems={cart} setCartItems={setCartPvip}/>} />
            <Route exact path="/outros" element={<Outros updateNomes={setOutrosNomes} setValorFunction={comprasValor} updateValor={setOutros} cartItems={cart} setCartItems={setCartOutros}/>} />                          
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
