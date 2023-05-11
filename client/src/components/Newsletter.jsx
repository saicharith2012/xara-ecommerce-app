import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5 ;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`

const Desc = styled.div`
font-size: 20px;
font-weight: 200;
margin-bottom: 25px;
`

const InputContainer = styled.div`
width: 35%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex:9;
padding-left: 20px;
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
