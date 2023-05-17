import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p``
const SocialContainer = styled.div``
const SocialIcon = styled.div``

const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>XARA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          sequi, porro optio perspiciatis impedit esse nisi eaque recusandae
          perferendis ex dolore ab excepturi sed? ligendi cumque magni tenetur
          veritatis commodi.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon/>
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon/>
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer
