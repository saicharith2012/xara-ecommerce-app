import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://res.cloudinary.com/dgiksl9k7/image/upload/v1688364921/xara-ecommerce-app/2102928-removebg_dkgids.png)
    right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  ${mobile({justifyContent: "center", backgroundSize:"cover", backgroundPosition:"center"})}
`

const Wrapper = styled.div`
  width: 25%;
  padding: 50px 40px 30px 40px;
  background-color: white;
  margin-left: 8%;
  border-radius: 10px;
  ${mobile({width:"70%", margin:"0px",})}
  `

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  `

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
  margin: 20px 0px;
`

const Link = styled.a`
margin: 0px 0px 8px 0px;
font-size: 13px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
     <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
