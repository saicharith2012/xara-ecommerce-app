import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  /* padding-top:20px; */
  color: white;
  margin-bottom: 20px;
  font-size: 4rem;
  ${mobile({ fontSize: "2rem" })}
`;
const Button = styled.button`
  border: none;
  padding: 12px 15px;
  background-color: white;
  color: black;
  font-weight: 700;
  cursor: pointer;
  font-size: large;
  transition: all ease 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.category}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
