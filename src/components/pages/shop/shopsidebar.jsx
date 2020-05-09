import React from 'react';
import Sidecategory from './sidecategory'
import Sidebrands from './sidebrands'
import Sidecolors from './sidecolors'
import Sideprice from './sideprice'

function Shopsidebar() {
    return (
        <div className="shop_sidebar_area">
            <Sidecategory />
            <Sidebrands />
            <Sidecolors />
            <Sideprice />
        </div>
    )
}

export default Shopsidebar;
