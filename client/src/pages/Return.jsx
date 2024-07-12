import styled from "styled-components";
import { mobile, medium } from "../responsive";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { userRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SuccessMessage = styled.div`
  background-color: black;
  color: white;
  padding: 10px 50px;
  font-size: 100px;
  font-weight: 700;
  cursor: pointer;
  margin: 0px 0px 20px 0px;
  ${mobile({ fontSize: "32px", padding: "10px" })}
  ${medium({ fontSize: "60px" })}
`;

const Message = styled.div`
  width: 250px;
  font-size: 18px;
`;

const OrderedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mobile({
    flexDirection: "column",
  })}
`;

const OrderedProductsTitle = styled.h2`
  margin: 50px 0px 10px;
`;

const Product = styled.div`
  display: flex;
  margin: 10px;
  border: 2px solid black;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex: 1;
`;

const ProductInfo = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductDataItem = styled.div`
  display: flex;
`;

const ProductDataItemHeading = styled.b`
  margin: 0px 10px;
  flex: 1;
  text-align: start;
`;

const ProductDataItemValue = styled.div`
  flex: 1;
  text-align: start;
`;

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    const fetchSessionData = async () => {
      try {
        const response = await userRequest.get(
          `payment/session-status?sessionId=${sessionId}`
        );
        console.log(response);
        setStatus(response.data.status);
        setCustomerEmail(response.data.customer_email);
        setProducts(response.data?.lineItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessionData();
  }, [dispatch]);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <Container>
          <Navbar />
          <SuccessMessage>SUCCESSFUL</SuccessMessage>
          <Message>
            Your order is being placed... Thanks for shopping with us.
          </Message>
          <Message>
            A confirmation email will be sent to <b>{customerEmail}</b>. If you
            have any questions, please email at
            <a href="mailto:orders@example.com"> orders@elegance.com</a>.
          </Message>

          <OrderedProductsTitle>Products Ordered</OrderedProductsTitle>
          <OrderedProducts>
            {products.map((product) => {
              return (
                <Product key={product.id}>
                  <ProductImage src={product.productImages[0]} />
                  <ProductInfo>
                    <ProductDataItem>
                      <ProductDataItemHeading>Product: </ProductDataItemHeading>
                      <ProductDataItemValue>
                        {product.description}
                      </ProductDataItemValue>
                    </ProductDataItem>
                    <ProductDataItem>
                      <ProductDataItemHeading>Cost: </ProductDataItemHeading>
                      <ProductDataItemValue>
                        Rs. {product.price.unit_amount / 100}
                      </ProductDataItemValue>
                    </ProductDataItem>
                    <ProductDataItem>
                      <ProductDataItemHeading>
                        Quantity:{" "}
                      </ProductDataItemHeading>
                      <ProductDataItemValue>
                        {product.quantity}
                      </ProductDataItemValue>
                    </ProductDataItem>
                  </ProductInfo>
                </Product>
              );
            })}
          </OrderedProducts>
        </Container>
      </section>
    );
  }

  return null;
};
