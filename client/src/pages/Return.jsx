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

const Logo = styled.h1`
  font-weight: bold;
  margin: 20px 0px;
  ${mobile({ fontSize: "24px" })}
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

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart())

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    const fetchSessionData = async () => {
      try {
        const response = await userRequest.get(
          `payment/session-status?sessionId=${sessionId}`
        );
        setStatus(response.data.status)
        setCustomerEmail(response.data.customer_email)
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
          <Logo>elegancé</Logo>
          <SuccessMessage>SUCCESSFUL</SuccessMessage>
          <Message>
            Your order is being placed... Thanks for shopping with us.
          </Message>
          <Message>
            A confirmation email will be sent to <b>{customerEmail}</b>. If you
            have any questions, please email at
            <a href="mailto:orders@example.com"> orders@elegance.com</a>.
          </Message>
        </Container>
      </section>
    );
  }

  return null;
};
