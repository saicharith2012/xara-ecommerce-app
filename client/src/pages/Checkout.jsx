// import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

// const Container = styled.div`
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const PayButton = styled.button`
//   background-color: black;
//   color: white;
//   padding: 10px 50px;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
//   border-radius: 5px;
//   border: 1px solid gray;
//   &:active {
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.

const stripePromise = loadStripe(
  "pk_test_51P8QZ8SAebfcjcE8BJIv6SZDuWLnl8pRpzeSuFk922JQSeccm0xLbGVSYrEN3IHUCFfvN6f3xxedeyhDU2VIVzVQ009LJjjOHy"
);

export const CheckoutForm = () => {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout session
    return fetch("http://localhost:4000/api/v1/payment/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      {/* <Container>
          <PayButton>Pay</PayButton>
      </Container> */}

      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout/>
      </EmbeddedCheckoutProvider>
    </div>
  );
};
