import React from "react";
import Topbar from './topbar'
import Productsarea from './productsarea'
import Pagination from './pagination'

function Shopproducts() {
  return (
    <div className="amado_product_area section-padding-100">
      <div className="container-fluid">
            <Topbar />
            <div className="row">
            <Productsarea />
            </div>
            <Pagination />
      </div>
    </div>
  );
}

export default Shopproducts;
