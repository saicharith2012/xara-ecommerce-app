import styled from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  display: flex;
  /* height: 25vh; */
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  `

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 8px;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.div`
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>XARA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          architecto eum debitis dolor sit cumque, modi cupiditate inventore
          quidem veniam facilis eius nisi accusamus, qui similique, nobis
          laborum molestias enim.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
      <Title>Contact</Title>
      <ContactItem><LocationOnOutlinedIcon style={{marginRight:"10px"}}/> 221B Baker Street, London NW1 6XE.</ContactItem>
      <ContactItem><LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> +44 897 645 3210 </ContactItem>
      <ContactItem><EmailOutlinedIcon style={{marginRight:"10px"}}/> apparel@xara.com</ContactItem>
      
      <Payment>
        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="Visa" />
        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="Mastercard" />
        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="American Express" />
        <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="Diners Club" />
      </Payment>
      </Right>
    </Container>
  )
}

export default Footer
