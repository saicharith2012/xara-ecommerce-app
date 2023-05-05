import styled from "styled-components"
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import { useState } from "react"
import { sliderItems } from "../data"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
// arrows
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props)=> props.slideIndex * -100}vw);
`
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${props=> props.bg};
`

// image container
const ImgContainer = styled.div`
  padding: 40px;
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 90%;
  padding: 10px 50px 0px 150px;
`

// info container
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 100px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div>
      <Container>
        <Arrow direction='left' onClick={()=> handleClick("left")}>
          <ArrowBackIosOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex= {slideIndex}>
        {sliderItems.map((item) => (

          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        
        ))}
        </Wrapper>
        <Arrow direction='right' onClick={()=> handleClick("right")}>
          <ArrowForwardIosOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
