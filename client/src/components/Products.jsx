import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px 20px 60px 20px;
  background-color: #f7f7ff;
  display: grid;
  grid-template-columns: repeat(auto-fill, 295px);
  gap: 10px;
  ${mobile({
    gridTemplateColumns: "repeat(auto-fill, 160px)",
  })}
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const checkCategory = (category) => {
    let link;
    if (category === "all") {
      link = "http://localhost:4000/api/v1/products/all-products";
    } else if (category === "new") {
      link = "http://localhost:4000/api/v1/products/all-products?new=true";
    } else if (category === "men" || "women") {
      link = `http://localhost:4000/api/v1/products/all-products?gender=${category}`;
    } else if (category === "jackets") {
      link = `http://localhost:4000/api/v1/products/all-products?type=${category}`;
    } else {
      link = "";
    }
    return link;
  };

  useEffect(() => {
    const getProducts = async () => {
      // console.log(category);
      const link = checkCategory(category);
      const response = await axios.get(link);
      console.log(response.data.data);
      setProducts(response.data.data);
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        console.log(filters);
        if (filters) {
          let tempProducts = products;

          if (filters.gender) {
            tempProducts =
              filters.gender === "all"
                ? products
                : tempProducts.filter(
                    (product) => product.gender === filters.gender
                  );
          }

          if (filters.type) {
            tempProducts =
              filters.type === "all"
                ? products
                : tempProducts.filter(
                    (product) => product.type === filters.type
                  );
          }

          // console.log(tempProducts)
          setFilteredProducts(tempProducts);
        } else {
          setFilteredProducts(products);
        }
      } catch (error) {}
    };
    getFilteredProducts();
  }, [filters, products]);

  useEffect(() => {
    // console.log(sort);
    if (sort === "newest") {
      setSortedProducts((prev) =>
        [...filteredProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setSortedProducts((prev) =>
        [...filteredProducts].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setSortedProducts((prev) =>
        [...filteredProducts].sort((a, b) => b.price - a.price)
      );
    } else {
      setSortedProducts([...filteredProducts])
    }
  }, [filteredProducts, sort]);

  return (
    <Container>
      {sortedProducts.map((item, key) => (
        <Product item={item} key={key} />
      ))}
    </Container>
  );
};

export default Products;
