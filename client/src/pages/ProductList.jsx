import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``

const Title = styled.h1`
  margin: 30px 10px 10px 20px;
  display: flex;
  justify-content: center`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `
  
  const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({margin:"10px 20px",display:"flex",flexDirection:"column", alignItems:"flex-start"})}
  `
  
  const FilterText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-right: 15px;
  `
  
  const Select = styled.select`
  margin-right: 10px;
  padding: 10px;
  ${mobile({margin:"5px 0px 0px 0px"})}
  &:focus {
    outline: none
  }
`

const Option = styled.option`
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        {/* contains two filters -- product filter and sorting filter. */}
        <Filter>
          <FilterText>Filter</FilterText>
          <Select label='Gender'>
            <Option disabled selected>
              Gender
            </Option>
            <Option>Men</Option>
            <Option>Women</Option>
            <Option>All</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Suits</Option>
            <Option>Jackets</Option>
            <Option>Accessories</Option>
            <Option>All</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
