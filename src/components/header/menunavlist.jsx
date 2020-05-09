import React from 'react';
import {Link} from 'react-router-dom'
import * as URL from '../../router/url'
import { withRouter } from 'react-router';

function Menunavlist(props) {
    console.log('NAVS = ', props)
    const { NAVS } = URL;

	const renderNavList = (item, index) => {
        console.log('props = ', item, index)
		return (
			<li
				key={ index }
				className={ props.location.pathname === item.url ? "active" : null }
			>
				<Link to={ item.url }>{ item.title }</Link>
			</li>);
    };
    

	return (
		<nav className="amado-nav">
			<ul>
				{
					NAVS.map(renderNavList)
				}
			</ul>
		</nav>
    );

}
//     console.log(props)
//     return (
//         <nav className="amado-nav">
//                 <ul>
//                     <li className="active"><Link to={URL.HOME}>Home</Link></li>
//                     <li><Link to={URL.SHOP}>Shop</Link></li>
//                     <li><Link to={URL.PRODUCT}>Product</Link></li>
//                     <li><Link to={URL.CART}>Cart</Link></li>
//                     <li><Link to={URL.CHECKOUT}>Checkout</Link></li>
//                 </ul>
//             </nav>
//     )
// }

export default withRouter(Menunavlist);




