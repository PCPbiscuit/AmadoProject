import React, { Suspense } from 'react';
import './App.css';
import Header from './components/header/header';
import Ads from './components/adsBlock/ads';
import Footer from './components/footer/footer';
import Mobile from './components/mobile/mobilenav';
import { BrowserRouter } from 'react-router-dom';
import Pages from './router/router';
import Spinner from './components/spinner/spinner';
import { connect } from 'react-redux';
import { loadCatalog, updateCart, loadAllCatalogData } from './store/action_creators';


function App(props) {

  props.loadCatalog('http://test-api.ipromote.ru/API/CATALOG/FIND');

	if (localStorage.local === undefined) {
		localStorage.setItem('local', JSON.stringify([]));
	} else {
		props.updateCart(JSON.parse(localStorage.getItem('local')))
	};

  return (
    <BrowserRouter>
    <div className="App">
      <div className="main-content-wrapper d-flex clearfix">
          <Mobile />
          <Header />
          <Suspense fallback={ <Spinner /> }>
            {
              Pages
            }
          </Suspense>
      </div>
      <section className="newsletter-area section-padding-100-0">
          <Ads />
      </section>
      <footer className="footer_area clearfix">
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (store) => {
	return {
		//
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		loadCatalog: (param) => dispatch(loadCatalog(param)),
		updateCart: (param) => dispatch(updateCart(param)),
	};
};



export default connect(mapStateToProps, mapDispatchToProps)(App);


//--------SHOP------------
// function App() {
//   return (
//     <div className="App">
//       <div className="main-content-wrapper d-flex clearfix">
//           <Mobile />
//           <Header />
//           <Shop />
          
//       </div>
//       <section className="newsletter-area section-padding-100-0">
//           <Ads />
//       </section>
//       <footer className="footer_area clearfix">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

//---------------PRODUCT---------------
// function App() {
//   return (
//     <div className="App">
//       <div className="main-content-wrapper d-flex clearfix">
//           <Mobile />
//           <Header />
//           <Singleproductarea />
//           
//       </div>
//       <section className="newsletter-area section-padding-100-0">
//           <Ads />
//       </section>
//       <footer className="footer_area clearfix">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

//---------------CART----------------
// function App() {
//   return (
//     <div className="App">
//       <div className="main-content-wrapper d-flex clearfix">
//           <Mobile />
//           <Header />
//           <Shoppingcart />
//           
//       </div>
//       <section className="newsletter-area section-padding-100-0">
//           <Ads />
//       </section>
//       <footer className="footer_area clearfix">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

//-------------------CHECKOUT-----------------
// function App() {
//   return (
//     <div className="App">
//       <div className="main-content-wrapper d-flex clearfix">
//           <Mobile />
//           <Header />
//           <Checkout />
//       </div>
//       <section className="newsletter-area section-padding-100-0">
//           <Ads />
//       </section>
//       <footer className="footer_area clearfix">
//         <Footer />
//       </footer>
//     </div>
//   );
// }




