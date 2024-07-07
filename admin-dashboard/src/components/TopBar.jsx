import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const TopBarWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
`;

const Badge = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: #1979d2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
`;

export default function TopBar() {
  return (
    <Container>
      <TopBarWrapper>
        <TopLeft>
          <Logo>elegancéAdmin</Logo>
        </TopLeft>
        <TopRight>
          <TopBarIconContainer>
            <NotificationsNone fontSize="large" />
            <Badge>{4}</Badge>
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Language fontSize="large" />
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Settings fontSize="large" />
          </TopBarIconContainer>
          <TopAvatar src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
        </TopRight>
      </TopBarWrapper>
    </Container>
  );
}
