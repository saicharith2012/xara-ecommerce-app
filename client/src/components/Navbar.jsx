import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";

const Container = styled.div`
  height: 60px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 7px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({display: "none"})}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
  ${mobile({ width: "50px" })}
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({flex: 2})}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "26px", paddingLeft: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:3, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  padding: 10px;
  border-radius: 10px;
  background-color: none;

  &:hover,
  &:active {
    background-color: lavender;
  }
  ${mobile({ fontSize: "12px", marginLeft: "0px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // console.log(user, isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(quantity)

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logoutUser())
        .unwrap()
        .then((response) => {
          console.log(response);
        });
      dispatch(clearCart());
      navigate("/");
      console.log("logged out successfully.");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              elegancé
            </Link>
          </Logo>
        </Center>
        <Right>
          {!isAuthenticated ? (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
          )}
          <Link to="/cart" style={{ color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
