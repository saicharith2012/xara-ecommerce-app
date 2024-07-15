import styled from "styled-components";
import { mobile, medium } from "../responsive.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../redux/authSlice.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://res.cloudinary.com/dgiksl9k7/image/upload/v1688364921/xara-ecommerce-app/2102928-removebg_dkgids.png)
    right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  })}
`;

const Heading = styled.div`
  margin: 0px 0px 40px 0px;
  width: 100%;
  font-size: 32\px;
  font-weight: 700;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px 40px 30px 40px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  margin-left: 8%;
  border-radius: 10px;
  ${mobile({ width: "70%", margin: "0px" })}
  ${medium({ width: "60%", margin: "0px" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

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
`;

const LinkDiv = styled.div`
  margin: 0px 0px 8px 0px;
  font-size: 13px;
  color: black;
  cursor: pointer;
`;

const Login = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    if (isAuthenticated && user.user.isAdmin) {
      console.log(user);
      navigate("/");
    } else if(isAuthenticated && !user.user.isAdmin) {
      setErrorMessage("Only admins are allowed here!")
      dispatch(logoutUser())
    }
     else {
      console.log("user not logged in.");
    }
  }, [user, isAuthenticated, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents the default behavior of the browser..in this case reloading.

    if (!identifier || !password) {
      setErrorMessage("Please fill in the fields.");
      return;
    }

    try {
      dispatch(loginUser({ identifier, password }));
      navigate("/")
      console.log("logged in successfully.");
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
      console.log(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <LinkDiv>
            <Heading>éleganceAdmin</Heading>
          </LinkDiv>
        </Link>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username or email"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button>LOGIN</Button>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <LinkDiv>DON&apos;T REMEMBER YOUR PASSWORD?</LinkDiv>
          </Link>

          {/* <Link to="/register" style={{textDecoration:"none", color: "inherit"}}>
            {" "}
            <LinkDiv>CREATE A NEW ACCOUNT </LinkDiv>
          </Link> */}

          {errorMessage && <div>{errorMessage}</div>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
