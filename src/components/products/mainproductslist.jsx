import React from 'react';
import FirstProduct from './firstproduct'


function Mainproductslist() {
    return (
        <div className="products-catagories-area clearfix" >
            <div className="amado-pro-catagory clearfix" style={{display: 'flex', flexWrap: 'wrap'}}>
                <FirstProduct />      
            </div>
        </div>
    )
}

export default Mainproductslist;

// style={{position: 'relative', height: '1846.36px'}}
// style={{display: 'flex', flexWrap: 'wrap'}}
