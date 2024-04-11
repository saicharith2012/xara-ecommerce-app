import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "25px 15px" })}
`

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({ marginBottom: "30px" })}
`

const Image = styled.img`
  width: 50%;
  ${mobile({ width: "70%" })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px 10px" })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-size: 40px;
  font-weight: 200;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginRight: "15px" })}
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
  ${mobile({ fontSize: "16px" })}
`

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: 1px solid black;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
//   ${mobile({ width: "15px", height: "15px", margin: "0px 3px" })}
// `

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 0px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351711/xara-ecommerce-app/products/4467449812_1_1_1_ng6zwr.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Textured Suit Blazer</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            qui aut incidunt sed. Nesciunt ipsum possimus laborum obcaecati iure
            tenetur quibusdam, accusantium rerum, repellendus assumenda enim
            maxime, porro quidem ratione. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus labore ipsa qui omnis
            repudiandae, cum corrupti officiis atque odit, delectus quis odio
            ipsam obcaecati accusantium nemo! Expedita commodi modi quis?
          </Desc>
          <Price>Rs. 1499</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
              <FilterColor color='green' />
              <FilterColor color='white' />
            </Filter> */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
