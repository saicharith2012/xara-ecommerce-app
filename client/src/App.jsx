import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Return } from "./pages/Return";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const {user, isAuthenticated} = useSelector((state)=> state.auth)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/"/> : <Register />} />
        <Route path="/return" element={<Return/>} />
      </Routes>
    </Router>
  );
};

export default App;
