import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import discordIcon from '../../assets/discordIcon.svg'
import instagramIcon from '../../assets/instagramIcon.svg'

export class Menu extends Component {

    render() {

        return (
            <div className="menu">
                <ul className="menuList">
                    <li>
                        <Link to="/" className="menuListItem">HOME</Link>
                    </li>
                    <li>
                        <Link to="/cvip" className="menuListItem">VEÍCULOS VIP</Link>
                    </li>
                    <li>
                        <Link to="/planosvip" className="menuListItem">PLANOS VIP</Link>
                    </li>
                    <li>
                        <Link to="/outros" className="menuListItem">OUTROS</Link>
                    </li>
                    <li className="menuSocial">
                        <div className="socialIcon">
                                <img onClick={()=>{ window.open("https://discord.gg/utopiarp","_blank")}} className="discord" src={ discordIcon } alt="Discord" />
                        </div>

                        <div className="socialIcon">
                            <img onClick={()=>{ window.open("https://www.instagram.com/utopiarp_oficial/","_blank")}} className="instagram" src={ instagramIcon } alt="Instagram" />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu
