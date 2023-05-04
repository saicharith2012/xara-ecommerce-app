import styled from "styled-components"
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"

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
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
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
  return (
    <div>
      <Container>
        <Arrow direction='left'>
          <ArrowBackIosOutlinedIcon />
        </Arrow>
        <Wrapper>
        {/* SLIDE 1 */}
          <Slide bg="f7f7ff">
            <ImgContainer>
              <Image src='https://res.cloudinary.com/dq0ljafid/image/upload/v1683080824/yxkcmzf5lrtiecq1pwrl.png' />
            </ImgContainer>
            <InfoContainer>
              <Title>FLASH SALE</Title>
              <Desc>SHOP IN STYLE! GET FLAT 30% OFF FOR LATEST ARRIVALS.</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        {/* SLIDE 2 */}
          <Slide bg="fcf1ed">
            <ImgContainer>
              <Image src='https://res.cloudinary.com/dq0ljafid/image/upload/v1683080824/yxkcmzf5lrtiecq1pwrl.png' />
            </ImgContainer>
            <InfoContainer>
              <Title>REPUBLIC SALE</Title>
              <Desc>GET FLAT 40% ON SELECT ITEMS</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        {/* SLIDE 3 */}
          <Slide bg="fbf0f4">
            <ImgContainer>
              <Image src='https://res.cloudinary.com/dq0ljafid/image/upload/v1683080824/yxkcmzf5lrtiecq1pwrl.png' />
            </ImgContainer>
            <InfoContainer>
              <Title>NEW YEAR SALE</Title>
              <Desc>SHOP IN STYLE! GET FLAT 40% OFF ON SELECT ITEMS</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction='right'>
          <ArrowForwardIosOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
