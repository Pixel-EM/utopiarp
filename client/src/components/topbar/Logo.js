import { React } from 'react'
import utopialogo from '../../assets/utopialogo.png'

const Logo = () => {

    
    return (
        <div className="logoContainer">
                <img onClick={()=>{window.open('/', '_self')}} className="logoImage" src={utopialogo} alt="UtopiaRP" />
                <h1 id="logoUtopia">UTOPIARP</h1>
        </div>
    )
}

export default Logo
