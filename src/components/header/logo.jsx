import React from 'react';
import Logotype from '../../img/core-img/logo.png'
import { Link } from 'react-router-dom'
import * as URL from '../../router/url'

function Logo() {
    return (
        <div className="logo">
        <Link to={URL.HOME}><img src={Logotype} alt="no picture"/></Link>
        </div>
    )
}

export default Logo;
