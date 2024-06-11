import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px 10px 10px 20px;
  display: flex;
  justify-content: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({
    margin: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;

const FilterText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-right: 15px;
`;

const Select = styled.select`
  margin-right: 10px;
  padding: 10px;
  ${mobile({ margin: "5px 0px 0px 0px" })}
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    if (category === "jackets") {
      setFilters({
        ...filters,
        type: "jackets",
        [e.target.name]: e.target.value,
      });
    } else {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      });
    }
  };

  console.log(filters);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Container>
        <Navbar />
        <Announcement />
        <Title>Collection</Title>
        <FilterContainer>
          {/* contains two filters -- product filter and sorting filter. */}
          <Filter>
            <FilterText>Filter</FilterText>
            <Select name="gender" onChange={handleFilters}>
              <Option disabled selected>
                Gender
              </Option>
              {category === "men" ? (
                <Option value="men" selected>
                  Men
                </Option>
              ) : (
                <Option value="men">Men</Option>
              )}
              {category === "women" ? (
                <Option value="women" selected>
                  Women
                </Option>
              ) : (
                <Option value="women">Women</Option>
              )}{" "}
              <Option value="all">All</Option>
            </Select>
            <Select name="type" onChange={handleFilters}>
              <Option disabled selected>
                Type
              </Option>
              <Option value="suits">Suits</Option>
              {category === "jackets" ? (
                <Option value="jackets" selected>
                  Jackets{" "}
                </Option>
              ) : (
                <Option value="jackets">Jackets</Option>
              )}{" "}
              <Option value="accessories">Accessories</Option>
              <Option value="all">All</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest" selected>
                Newest
              </Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductList;
