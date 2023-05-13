import styled from "styled-components"


const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
`
const Logo = styled.h1``
const Desc = styled.div``

const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>XARA.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi, porro optio perspiciatis impedit esse nisi eaque recusandae perferendis ex dolore ab excepturi sed? Eligendi cumque magni tenetur veritatis commodi.</Desc>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer
