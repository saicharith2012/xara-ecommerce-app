import styled from "styled-components";
import { medium, mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #2b2d42;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  ${mobile({
    fontSize: "12px",
  })}
  ${medium({
    fontSize: "12px",
  })}
`;

const Announcement = () => {
  return (
    <div>
      <Container>
        Lightning Deal! Free shipping on orders over Rs.1999
      </Container>
    </div>
  );
};

export default Announcement;
