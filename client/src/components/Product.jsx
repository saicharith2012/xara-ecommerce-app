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
  overflow: hidden;

  &:hover ${Info} {
    opacity: 1;
    width: 100%;
  }
  ${mobile({minWidth:"40%",overflow:"hidden", height: "100%", maxWidth: "47%"})}

  `

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
    background-color: ${(props)=> props.bgcolor};
    // transform: scale(1.1);
    color: ${(props)=> props.color};
  }
  ${mobile({width: "25px", height:"25px", padding:"4px"})}

  `

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon placeholder="" bgcolor={"black"} color="white">
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon bgcolor={"black"} color="white">
          <SearchOutlinedIcon />
        </Icon>
        <Icon bgcolor={"#EE4B2B"} color="white">
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
