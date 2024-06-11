import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <div
        className="products-heading"
        style={{
          textAlign: "center",
          fontSize: "70px",
          fontWeight: "1000",
          padding: "30px 0px 50px 0px",
        }}
      >
        <p>LATEST PRODUCTS.</p>
      </div>
      <Products category={"new"} filters={[]} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
