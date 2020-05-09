import React from "react";
import Addtocartform from "./addtocartform";

function Productdescr() {
  return (
    <div className="col-12 col-lg-5">
      <div className="single_product_desc">
        <div className="product-meta-data">
          <div className="line"></div>
          <p className="product-price">$180</p>
          <a href="product-details.html">
            <h6>Modern Chair</h6>
          </a>
          <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="review">
              <a href="#">Write A Review</a>
            </div>
          </div>
          <p className="avaibility">
            <i className="fa fa-circle"></i> In Stock
          </p>
        </div>

        <div className="short_overview my-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            quae eveniet culpa officia quidem mollitia impedit iste asperiores
            nisi reprehenderit consequatur, autem, nostrum pariatur enim?
          </p>
        </div>
        <Addtocartform />
      </div>
    </div>
  );
}

export default Productdescr;
