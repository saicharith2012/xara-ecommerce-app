import styled from "styled-components";
import { Visibility } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  padding: 30px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  margin: 20px 0px;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 3px;
`;
const JobTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgb(54, 69, 79);`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 5px 7px;
  background-color: rgb(240, 240, 255);
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export default function WidgetSm() {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <ListItem>
          <Image src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
          <User>
            <UserName>Caspir Parange</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </Button>
        </ListItem>{" "}
        <ListItem>
          <Image src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
          <User>
            <UserName>Caspir Parange</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </Button>
        </ListItem>{" "}
        <ListItem>
          <Image src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
          <User>
            <UserName>Caspir Parange</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </Button>
        </ListItem>{" "}
        <ListItem>
          <Image src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
          <User>
            <UserName>Caspir Parange</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </Button>
        </ListItem>{" "}
        <ListItem>
          <Image src="https://lh3.googleusercontent.com/a/ACg8ocKwISwIbsNvvamawhzxqHmSljXnqAY9HzbLmN9kibteOG493qD0=s288-c-no" />
          <User>
            <UserName>Caspir Parange</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
}
