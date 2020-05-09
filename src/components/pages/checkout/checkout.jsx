import React from 'react';
import Checkouttable from './checkouttable'
import Checkouttotal from './checkouttotal'

function Checkout() {
    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <Checkouttable />
                    <Checkouttotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
