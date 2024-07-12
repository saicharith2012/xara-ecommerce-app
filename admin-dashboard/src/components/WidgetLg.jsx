import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  flex: 2;
  padding: 30px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Tr = styled.tr``;
const Th = styled.th`
  text-align: left;
`;
const Td = styled.td`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Date = styled.td`
  font-weight: 400;
`;
const Amount = styled.td`
  font-weight: 400;
`;
const Status = styled.td`
  font-weight: 300;
`;

const Address = styled.td`
  font-weight: 400;
`;

const Button = styled.button`
  padding: 5px 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;

  ${(props) =>
    props.type === "success" &&
    css`
      background-color: #e5faf2;
      color: #3bb077;
    `}

  ${(props) =>
    props.type === "pending" &&
    css`
      background-color: #ebf1fe;
      color: #2a7ade;
    `}

${(props) =>
    props.type === "declined" &&
    css`
      background-color: #fff0f1;
      color: #d95087;
    `}
`;

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await userRequest.get("/orders/all-orders?new=true");
      setOrders(response.data.data);
      // console.log(response.data.data[0]);
    };

    getUsers();
  }, []);

  function formatISODate(isoDateString) {
    // Convert ISO 8601 string to Date object
    const date = new window.Date(isoDateString);

    // Extract components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = date.getDate().toString().padStart(2, "0");
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, "0");

    // Format the date and time
    const formattedDate = `${month}/${day}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
    return formattedDate;
  }

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
          <Th>Address</Th>
        </Tr>

        {orders?.map((order) => {
          return (
            <>
              <Tr>
                <Td>
                  <Image
                    src={
                      order.user.img ||
                      "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                    }
                  />
                  <Name>{order.user.username}</Name>
                </Td>
                <Date>{formatISODate(order.createdAt)}</Date>
                <Amount>Rs. {order.amount}</Amount>
                <Status>
                  <Button type={order.status}>{order.status}</Button>
                </Status>
                <Address>{order.address}</Address>
              </Tr>
            </>
          );
        })}
      </Table>
    </Container>
  );
}
