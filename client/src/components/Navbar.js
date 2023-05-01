import React from "react"
import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"

const Container = styled.div`
  height: 60px;
`
// wrapper
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `
  const Center = styled.div`
    flex: 1;
  `
  const Right = styled.div`
    flex: 1;
  `

// language selector
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`

// search bar
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 1px;
`

const Input = styled.input`
border:none;
`

// navbar
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
