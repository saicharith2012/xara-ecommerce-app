import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import styled from "styled-components"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  `

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  `

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({flexDirection:"column"})}
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  //using props
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"}; //if-else
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({margin:"15px"})}
`
const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  border: 1px solid black;
  padding: 0px 5px;
`
const ProductPrice = styled.div`
  font-size: 25px;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 98%;
  align-self: center;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351758/xara-ecommerce-app/products/1856083330_6_1_1_v3ieju.jpg' />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE QUINN PEBBLES CHAIN
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>87564221389
                  </ProductID>
                  <ProductSize>
                    <b>Size: </b>NONE
                  </ProductSize>
                  <ProductColor color='orange'></ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>3</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>Rs. 800</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351758/xara-ecommerce-app/products/1856083330_6_1_1_v3ieju.jpg' />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE QUINN PEBBLES CHAIN
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>87564221389
                  </ProductID>
                  <ProductSize>
                    <b>Size: </b>NONE
                  </ProductSize>
                  <ProductColor color='orange'></ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>3</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>Rs. 800</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351758/xara-ecommerce-app/products/1856083330_6_1_1_v3ieju.jpg' />
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE QUINN PEBBLES CHAIN
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>87564221389
                  </ProductID>
                  <ProductSize>
                    <b>Size: </b>NONE
                  </ProductSize>
                  <ProductColor color='orange'></ProductColor>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>3</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>Rs. 1100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. 1900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. 99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. 1900</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
