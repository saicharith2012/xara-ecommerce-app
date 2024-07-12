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
import Login from "./pages/Login.jsx";
import { useSelector } from "react-redux";
import { medium } from "./responsive.js";

const Container = styled.div`
  display: flex;
  margin: 70px 0px 0px 300px;

  ${medium({marginLeft: "220px"})})}
`;

const AppLayout = () => {
  return (
    <>
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
    </>
  );
}; 

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={isAuthenticated && user.user.isAdmin ? <AppLayout /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
