import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import { useState, useEffect, useMemo } from "react";
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
  const productsCategory = useMemo(() => {
    if (filters?.gender) {
      return filters?.gender;
    } else {
      return category; // Fallback to the original category
    }
  }, [category, filters.gender]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const checkCategory = (category) => {
    if (category === "new") {
      const link = `http://localhost:4000/api/v1/products/all-products?new=true`;
      return link;
    } else if (category === "all") {
      const link = `http://localhost:4000/api/v1/products/all-products`;
      return link;
    } else if (category === "men" || category === "women") {
      const link = `http://localhost:4000/api/v1/products/all-products?gender=${category}`;
      return link;
    } else {
      const link = `http://localhost:4000/api/v1/products/all-products?type=${category}`;
      return link;
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const link = checkCategory(productsCategory);
        const response = await axios.get(link);
        setProducts(response.data.data);
      } catch (error) {}
    };
    getProducts();
  }, [productsCategory]);

  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) => 
              value === "all" ? products :
              item[key].includes(value)
            )
          )
        );
      } catch (error) {}
    };
    getFilteredProducts();
  }, [products, filters]);

  return (
    <Container>
      {filteredProducts.map((item, key) => (
        <Product item={item} key={key} />
      ))}
    </Container>
  );
};

export default Products;
