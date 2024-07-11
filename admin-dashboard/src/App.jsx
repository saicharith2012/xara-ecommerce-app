import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import styled from "styled-components";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import NewProduct from "./pages/NewProduct.jsx";

const Container = styled.div`
  display: flex;
  margin: 0px 0px 0px 0px;
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Container>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
