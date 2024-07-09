import styled, { css } from "styled-components";

const Container = styled.div`
  flex: 3;
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
  font-weight: 300;
`;
const Amount = styled.td`
  font-weight: 300;
`;
const Status = styled.td`
  font-weight: 300;
`;

const Address = styled.td``;

const Button = styled.button`
  padding: 5px 7px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;

  ${(props) =>
    props.type === "Approved" &&
    css`
      background-color: #e5faf2;
      color: #3bb077;
    `}

  ${(props) =>
    props.type === "Pending" &&
    css`
      background-color: #ebf1fe;
      color: #2a7ade;
    `}

${(props) =>
    props.type === "Declined" &&
    css`
      background-color: #fff0f1;
      color: #d95087;
    `}
`;

export default function WidgetLg() {
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
        <Tr>
          <Td>
            <Image src="https://pbs.twimg.com/profile_images/1723501431842594816/VIOR52K3_400x400.jpg" />
            <Name>Sai Charith</Name>
          </Td>

          <Date>2 Jun 2024</Date>
          <Amount>Rs. 12223</Amount>
          <Status>
            <Button type={"Approved"}>Approved</Button>
          </Status>
          <Address>Telangana, India</Address>
        </Tr>{" "}
        <Tr>
          <Td>
            <Image src="https://pbs.twimg.com/profile_images/1723501431842594816/VIOR52K3_400x400.jpg" />
            <Name>Sai Charith</Name>
          </Td>

          <Date>2 Jun 2024</Date>
          <Amount>Rs. 12223</Amount>
          <Status>
            <Button type={"Declined"}>Declined</Button>
          </Status>
          <Address>Telangana, India</Address>
        </Tr>{" "}
        <Tr>
          <Td>
            <Image src="https://pbs.twimg.com/profile_images/1723501431842594816/VIOR52K3_400x400.jpg" />
            <Name>Sai Charith</Name>
          </Td>

          <Date>2 Jun 2024</Date>
          <Amount>Rs. 12223</Amount>
          <Status>
            <Button type={"Pending"}>Pending</Button>
          </Status>
          <Address>Telangana, India</Address>
        </Tr>{" "}
        <Tr>
          <Td>
            <Image src="https://pbs.twimg.com/profile_images/1723501431842594816/VIOR52K3_400x400.jpg" />
            <Name>Sai Charith</Name>
          </Td>

          <Date>2 Jun 2024</Date>
          <Amount>Rs. 12223</Amount>
          <Status>
            <Button type={"Approved"}>Approved</Button>
          </Status>
          <Address>Telangana, India</Address>
        </Tr>
      </Table>
    </Container>
  );
}
