import styled from "styled-components";
import { mobile, medium } from "../responsive";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://res.cloudinary.com/dgiksl9k7/image/upload/v1688364921/xara-ecommerce-app/2102928-removebg_dkgids.png)
    right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  })}
`;

const Heading = styled.div`
  padding: 0px 0px 40px 0px;
  width: 100%;
  font-size: 54px;
  font-weight: 700;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px 40px 30px 40px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  ${mobile({ width: "75%", margin: 0, padding: "20px 40px 30px 40px" })}
  ${medium({ width: "65%", margin: 0, padding: "20px 40px 30px 40px" })}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 15px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 30px 0px;
`;

const Checkbox = styled.input``;

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
  margin-right: 12px;
`;

const ErrorMessage = styled.div`
  padding: 12px 12px 12px 0px;
`

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await publicRequest.post("users/register",{
        firstname, lastname, username, email, password
      }, {
        withCredentials: true
      })

      console.log(response)

      navigate("/login")
    } catch (error) {
      setErrorMessage("")
    }
  };

  return (
    <Container>
      <Wrapper>
        <Heading>élegance</Heading>
        <Title>CREATE ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="first name"
            value={firstname}
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <Input
            placeholder="last name"
            value={lastname}
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <Input
            placeholder="username"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            placeholder="confirm password"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Agreement>
            <Checkbox type="checkbox" required></Checkbox> By creating an
            account, I consent to the processing of my personal data in
            accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
