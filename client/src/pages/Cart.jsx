import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { userRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "20px 10px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  //using props
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"}; //if-else
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "0px 0px 0px 0px" })}
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductID = styled.span``;
// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px 10px 0px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  ${mobile({ margin: "10px", padding: "4px 10px" })}
`;
const ProductPrice = styled.div`
  font-size: 25px;
  ${mobile({ marginBottom: "5px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 98%;
  align-self: center;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  ${mobile({ marginTop: "20px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Cart = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const { quantity, products, total } = useSelector((state) => state.cart);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // console.log(products)

    const response = await userRequest.post("payment/create-checkout-session", {
      products: products,
      total: total,
    });

    const { sessionId } = response.data.data;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      console.error("Stripe Checkout Error: ", result.error.message);
    }
  };

  return (
    <div style={{ paddingTop: "60px" }}>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({quantity})</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {products.map((product, key) => {
                return (
                  <>
                    <Product key={key}>
                      <ProductDetail>
                        <Image src={product.image} />
                        <Details>
                          <ProductName>
                            <b>Product: </b>
                            {product.title.toUpperCase()}
                          </ProductName>
                          <ProductID>
                            <b>Product ID: </b>
                            {product._id}
                          </ProductID>
                          <ProductSize>
                            <b>Size: </b>
                            {product.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <AddIcon />
                          <ProductAmount>
                            {product.productQuantity}
                          </ProductAmount>
                          <RemoveIcon />
                        </ProductAmountContainer>
                        <ProductPrice>
                          Rs. {product.price * product.productQuantity}
                        </ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </>
                );
              })}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>Rs. {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>Rs. 99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>Rs. -99</SummaryItemPrice>
              </SummaryItem>
              <Hr />
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>Rs. {total}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={handleCheckout}>CHECKOUT</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
