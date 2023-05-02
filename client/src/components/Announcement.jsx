import styled from "styled-components"



const Container = styled.div`
height: 30px;
background-color: #2B2D42 ;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Lightning Deal! Free shipping on orders over Rs.999
      </Container>
    </div>
  )
}

export default Announcement
