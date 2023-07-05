import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://res.cloudinary.com/dgiksl9k7/image/upload/v1688364921/xara-ecommerce-app/2102928-removebg_dkgids.png)
    right;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: 35%;
  padding: 50px 40px 30px 40px;
  background-color: white;
  margin-left: 8%;
  border-radius: 10px;
  
  `

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 15px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px;
`

const Agreement = styled.span`
  font-size: 15px;
  margin: 30px 0px;
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
  margin-bottom: 10px;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder='first name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
