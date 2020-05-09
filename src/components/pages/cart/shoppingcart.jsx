import React from 'react';
import Carttable from './carttable'
import Cartsummary from './cartsummary'
import Cartheader from './cartheader'

function Shoppingcart() {
    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <Cartheader />
                    <Cartsummary />
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart;
