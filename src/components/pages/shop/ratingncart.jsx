import React from 'react';
import cart from '../../../img/core-img/cart.png'

function Ratingncart() {
    return (
        <div className="ratings-cart text-right">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to Cart"><img src={cart} alt="" /></a>
                                    </div>
        </div>
    )
}

export default Ratingncart;
