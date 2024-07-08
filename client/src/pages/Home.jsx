import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";

const ProductsTitle = styled.h1`
  text-align: center;
  font-size: 70px;
  font-weight: 1000;
  padding: 30px 0px 50px 0px;

  ${mobile({fontSize: "28px", padding: "30px 0px 0px 0px"})}
`;

const Home = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductsTitle>LATEST PRODUCTS.</ProductsTitle>
      <Products category={"new"} filters={[]} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
