import React from 'react'
import '../../assets/css/Navbar.css'
import home from '../../assets/icon/ping/home.svg'

function Navbar() {
    return (
        <div className="nav">
            <div>
                <p className="logo_text">milkomeda</p>
            </div>

            <div className="home_btn">
                <img src={home} alt="home" />
                <p className="home_text">Home</p>
            </div>



        </div>
    )
}

export default Navbar