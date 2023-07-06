import styled from "styled-components"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { mobile } from "../responsive"


const Info = styled.div`
opacity: 0;
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0%;
  left: 0%;
  z-index: 2;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 19%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f7f7ff;

  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({minWidth:"40%",overflow:"hidden", height: "100%"})}

  `

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  ${mobile({height: "30vh"})}

`



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  ${mobile({width: "30px", height:"30px"})}

  `

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon placeholder="">
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
