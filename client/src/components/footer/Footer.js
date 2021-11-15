import React from 'react'
import './footer.css'

const Footer = (props) => {
    return (
        <div className="footerContainer">
            <div className="footer">
                <h1>Todos os direitos reservados a UtopiaRP</h1>
                <h4>
                    Desenvolvido com <a id="mern" target="_blank" rel="noreferrer" href="https://www.mongodb.com/mern-stack">MERN</a> stack por <a id="pixel" target="_blank" rel="noreferrer"  href="https://github.com/Pixel-EM">Erik Morelli</a>
                </h4>
            </div>
        </div>
    )
}

export default Footer
