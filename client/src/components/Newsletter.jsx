import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
height: 50vh;
background-color: #fcf5f5 ;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${mobile({height: "40vh"})}


`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize: "40px"})}

`

const Desc = styled.div`
font-size: 20px;
font-weight: 200;
margin-bottom: 25px;
${mobile({fontSize: "18px", textAlign:"center"})}

`

const InputContainer = styled.div`
width: 35%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width: "85%", height:"25px", justifyContent:"center"})}

`
const Input = styled.input`
border: none;
flex:9;
padding-left: 20px;
font-size: 16px;
&:focus {
  outline: none;
}
${mobile({paddingLeft: "10px"})}

`

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>Get timely updates about your favourite products here.</Desc>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
            <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
