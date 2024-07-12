import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 0.75;
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
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex: 0.4;
  margin-right: 15px;
`;

const User = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 3px;
`;
const LastName = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgb(54, 69, 79);
`;

const Button = styled.button`
  flex: 1.5;
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
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      const response = await userRequest("/users/all-users?new=true");
      setUsers(response.data.data);
      // console.log(response.data.data);
    };

    getUsers();
  }, []);
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.map((user) => {
          return (
            <>
              <ListItem key={user._id}>
                <Image
                  src={
                    user.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                />
                <User>
                  <UserName>{user.firstname}</UserName>
                  <LastName>{user.username}</LastName>
                </User>

                <Button onClick={() => navigate(`/user/${user._id}`)}>
                  <Icon>
                    <Visibility />
                  </Icon>
                  Display
                </Button>
              </ListItem>{" "}
            </>
          );
        })}
      </List>
    </Container>
  );
}
