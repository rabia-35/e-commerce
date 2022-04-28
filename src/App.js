import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/pages/home"
import Products from "./components/pages/products"
import ProductDetail from "./components/pages/productDetail"
import Navbar  from './components/navbar';
function App() {
  return (
      <div>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route  exact path="/" element={<Home />} />
              <Route path="/category/:category" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
      </div>
      
    
  );
}

export default App;
