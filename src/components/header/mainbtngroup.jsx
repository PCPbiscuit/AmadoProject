import React from 'react';
import * as URL from '../../router/url'
import { Link } from "react-router-dom";


function Mainbtngroup() {
    return (
        <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">0%</a>
                <Link to={`${URL.SHOP}`} className="btn amado-btn active">New this week</Link>
        </div>
    )
}

export default Mainbtngroup;
