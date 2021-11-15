import React from 'react'
import Menu from './Menu'
import Banner from './Banner'
import Logo from './Logo'
import MenuH from './MenuH'
import "./topbar.css"

const TopBar = () => {
    return (
        <div className="topContainer">
            <div className="topbarContainer">
                <Logo />
                <Menu />
            </div>
            <MenuH />
            <Banner />
        </div>
    )
}

export default TopBar
