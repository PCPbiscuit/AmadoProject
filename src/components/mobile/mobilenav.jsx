import React from 'react';
import mobileLogo from '../../img/core-img/logo.png'

function Mobilenav() {
    return (
        <div className="mobile-nav">
            <div className="amado-navbar-brand">
                <a href="index.html"><img src={mobileLogo} alt="" /></a>
            </div>
            <div className="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>
    )
}

export default Mobilenav;
