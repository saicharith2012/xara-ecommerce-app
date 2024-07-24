import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px 20px 60px 20px;
  background-color: #f7f7ff;
  display: grid;
  grid-template-columns: repeat(auto-fill, 295px);
  gap: 10px;
  ${mobile({
    gridTemplateColumns: "repeat(auto-fill, 172px)",
  })}
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const checkCategory = (category) => {
    let link;
    if (category === "all") {
      link = "products/all-products";
    } else if (category === "new") {
      link = "products/all-products?new=true";
    } else if (category === "jackets") {
      link = "products/all-products?type=jackets";
    } else if (category === "men" || category === "women") {
      link = `products/all-products?gender=${category}`;
    } else {
      link = "";
    }
    return link;
  };

  useEffect(() => {
    const getProducts = async () => {
      // console.log(category);
      const link = checkCategory(category);
      // console.log(link)
      const response = await publicRequest.get(link);
      // console.log(response.data.data);
      setProducts(response.data.data);
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        // console.log(filters);
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
        [...filteredProducts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
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
      setSortedProducts([...(filteredProducts || [])]);
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
