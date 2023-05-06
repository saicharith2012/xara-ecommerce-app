import styled from "styled-components"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  top: 85%;
  background-color: white;
  width: 30%;
  padding: 5px 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Icon = styled.div`
  display: flex;
  cursor: pointer;
`

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
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
