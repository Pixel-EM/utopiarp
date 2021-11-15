import {React, useRef} from 'react'
import { Link } from 'react-router-dom'

const MenuH = () => {
    const buttonRef = useRef(null)

    function menuHam(){
        if(buttonRef.current.style.top === "80px" ){
            buttonRef.current.style.top = "-500px"
        }else{
            buttonRef.current.style.top = "80px" 
        }
    }

    return (
        <div className="wrapperHam">
            <i onClick={ menuHam } className="fas fa-bars menuHamburguer"></i>
            <div ref={ buttonRef } className="menuH">
                <ul className="menuListHam">
                    <li className="menuListItemHam">
                        <Link to="/" className="menuListItem">HOME</Link>
                    </li>
                    <li className="menuListItemHam">
                        <Link to="/cvip" className="menuListItem">VEÍCULOS VIP</Link>
                    </li>
                    <li className="menuListItemHam">
                        <Link to="/planosvip" className="menuListItem">PLANOS VIP</Link>
                    </li>
                    <li className="menuListItemHam">
                        <Link to="/outros" className="menuListItem">OUTROS</Link>
                    </li>
                    <li className="menuListItemHam">DISCORD</li>
                    <li className="menuListItemHam">INSTAGRAM</li>
                </ul>
            </div>
        </div>
    )
}

export default MenuH
