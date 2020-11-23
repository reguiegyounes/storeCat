import {BrowserRouter as Router,Route ,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
//
import Store from './store/Store';
// pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
//component
import CartIcon from './components/CartIcon';
//



function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Cats</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>

              
            </ul>
          </div>
          <CartIcon />
        </nav>
        
        <Route  path='/' component={HomePage}  exact />
        <Route  path='/products' component={ProductsPage}  exact />
        <Route  path='/cart' component={CartPage}   />
        <Route  path='/products/:id' component={ProductPage}   />
    </div>
    </Router>
    
  );
}

function AppWithStore() {
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    );
}

export default AppWithStore;
