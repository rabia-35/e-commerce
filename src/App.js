import './App.css';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Home from "./components/pages/home"
import Footer from "./components/footer"
import Products from "./components/pages/products"
import ProductDetail from "./components/pages/productDetail"
import Basket from "./components/pages/basket"
import {useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'


function App() {
  const basket=useSelector(state=>state.product.basket)
  return (
      <div className='App'>
          <BrowserRouter>  
                <Navbar  bg="light" expand="sm">
                    <Container>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          
                          <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/Food">Food</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Beverage">Beverage</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Technological">Technological</NavDropdown.Item>
                          </NavDropdown>
                          
                        </Nav>
                          <Link to="/basket" className="ms-auto basket-link">
                            <FontAwesomeIcon  icon={faBasketShopping} className="me-2" />
                            Basket {basket!==null && (basket.length)}
                          </Link>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
             
            <Routes >
              <Route  exact path="/" element={<Home />} />
              <Route  path="/category/:category" element={<Products />} />
              <Route path="/:category/products/:id" element={<ProductDetail />} />
              <Route exact path="/basket" element={<Basket />} />
            </Routes>
          </BrowserRouter>
          <Footer />
      </div>
      
    
  );
}

export default App;
