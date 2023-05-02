import styled from "styled-components"
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7eeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin:auto;
`

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction="left">
          <ArrowBackIosOutlinedIcon />
        </Arrow>
        <Arrow direction="right">
          <ArrowForwardIosOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
