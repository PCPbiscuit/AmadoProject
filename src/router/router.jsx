import React, {lazy} from 'react'
import { Switch, Route} from 'react-router-dom'
import * as URL from './url'

const HomePage = lazy(() => import ('../components/products/mainproductslist'));
const ShopPage = lazy(() => import ('../components/pages/shop/shop') );
const ProductPage = lazy(() => import ('../components/pages/product/singleproductarea') );
const CartPage = lazy(() => import ('../components/pages/cart/shoppingcart') );
const CheckoutPage = lazy(() => import ('../components/pages/checkout/checkout') );

export default (
    <Switch>
        <Route exact path = {URL.HOME} component= {HomePage} />
        <Route exact path = {URL.SHOP} component= {ShopPage} />
        <Route exact path = {URL.PRODUCT} component= {ProductPage} />
        <Route exact path = {URL.PRODUCT_CODE} component= {ProductPage} />
        <Route exact path = {URL.CART} component= {CartPage} />
        <Route exact path = {URL.CHECKOUT} component= {CheckoutPage} />
    </Switch>
)
