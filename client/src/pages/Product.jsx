import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { medium, mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/cartSlice";

const Container = styled.div`
  padding-top: 60px;
`;

const Wrapper = styled.div`
  ${"" /* height: 60vh; */}
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "25px 10px",
    alignItems: "center",
  })}
  ${medium({
    flexDirection: "column",
    padding: "25px 10px",
    alignItems: "center",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({ marginBottom: "30px" })}
  ${medium({ marginBottom: "30px" })}
`;

const Image = styled.img`
  ${mobile({ width: "70%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px 10px" })}
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;

  ${mobile({ fontSize: "36px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
`;

const Price = styled.span`
  font-size: 36px;
  font-weight: 400;
  ${mobile({ fontSize: "24px" })}
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ margin: "15px 0px" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginRight: "15px" })}
`;

const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-right: 5px;
  ${mobile({ fontSize: "16px" })}
`;

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

  &:focus {
    outline: none;
  }
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 0px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin: 20px 0px;

  &:hover {
    background-color: #f8f4f4;
  }
  ${mobile({ padding: "7px" })}
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // console.log(productId)

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  // console.log(size)
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async (id) => {
      const response = await publicRequest.get(`products/get-product/${id}`);
      // console.log(response.data.data)
      setProduct(response.data.data);
    };
    getProduct(productId);
  }, [productId]);

  useEffect(() => {
    if (product?.size?.length > 0) {
      setSize(product.size[0]);
    }
  }, [product?.size]);

  const handleQuantity = (value) => {
    setQuantity((q) => {
      if (value === "increment") {
        return q + 1;
      } else if (value === "decrement" && q > 1) {
        return q - 1;
      } else {
        return q;
      }
    });
  };

  const handleClick = () => {
    dispatch(
      addProduct({...product, productQuantity: quantity, size})
    );
    setQuantity(1);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>Rs. {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((item) => {
                  return <FilterSizeOption key={item}>{item}</FilterSizeOption>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("decrement")}
              />
              <Amount>{quantity}</Amount>
              <AddIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("increment")}
              />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
