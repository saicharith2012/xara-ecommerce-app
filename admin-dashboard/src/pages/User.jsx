import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

import {Link} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.h2``;

const AddUser = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
`;

const DisplayUser = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const DisplayUserTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-size: 18px;
  margin-bottom: 3px;
  font-weight: 600;
`;

const UserJobTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const DisplayUserBottom = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
const DisplayUserBottomTitle = styled.h3`
  font-weight: 600;
  margin: 15px 0px 5px 0px;
`;
const DisplayUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 400;
  margin: 5px 0px;
`;
const DisplayUserIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const DisplayUserInfoTitle = styled.span``;

const UpdateUser = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const UserUpdateTitle = styled.h3``;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const UserUpdateLeft = styled.div`
  flex: 2;
`;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px 20px 8px 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  width: 400px;
  &:focus {
    outline: none;
  }
`;

const UserUpdateRight = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const UserUploadImageSection = styled.div`
  text-align: end;
  display: flex;
  align-items: end;
  justify-content: end;
`;

const UserUpdateImage = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
  border-radius: 20px;
  margin: 5px 0px;
`;
const FileUploadLabel = styled.label`
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const FileUploadInput = styled.input`
  display: none;
`;

const UpdateButton = styled.button`
  margin: 10px 20px;
  padding: 10px 30px;
  background-color: lavender;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;
export default function User() {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>User</Title>
          <Link to="/newUser">
          <AddUser>Create</AddUser>
          </Link>
        </TitleContainer>

        <UserContainer>
          <DisplayUser>
            <DisplayUserTop>
              <UserImage src="https://static.tvtropes.org/pmwiki/pub/images/joe_goldberg_9.jpg" />
              <UserTitleContainer>
                <UserName>Joe Goldberg</UserName>
                <UserJobTitle>Book Store Manager</UserJobTitle>
              </UserTitleContainer>
            </DisplayUserTop>

            <DisplayUserBottom>
              <DisplayUserBottomTitle>Account Details</DisplayUserBottomTitle>
              <DisplayUserInfo>
                <DisplayUserIcon>
                  <PermIdentity />
                </DisplayUserIcon>
                <DisplayUserInfoTitle>jgoldberg</DisplayUserInfoTitle>
              </DisplayUserInfo>{" "}
              <DisplayUserInfo>
                <DisplayUserIcon>
                  <CalendarToday />
                </DisplayUserIcon>
                <DisplayUserInfoTitle>23.09.1987</DisplayUserInfoTitle>
              </DisplayUserInfo>{" "}
              <DisplayUserBottomTitle>Contact Details</DisplayUserBottomTitle>
              <DisplayUserInfo>
                <DisplayUserIcon>
                  <PhoneAndroid />
                </DisplayUserIcon>
                <DisplayUserInfoTitle>+91 6856473218</DisplayUserInfoTitle>
              </DisplayUserInfo>{" "}
              <DisplayUserInfo>
                <DisplayUserIcon>
                  <MailOutline />
                </DisplayUserIcon>
                <DisplayUserInfoTitle>jgoldberg@gmail.com</DisplayUserInfoTitle>
              </DisplayUserInfo>{" "}
              <DisplayUserInfo>
                <DisplayUserIcon>
                  <LocationSearching />
                </DisplayUserIcon>
                <DisplayUserInfoTitle>Lonavala, India.</DisplayUserInfoTitle>
              </DisplayUserInfo>
            </DisplayUserBottom>
          </DisplayUser>
          <UpdateUser>
            <UserUpdateTitle>Edit</UserUpdateTitle>
            <UserUpdateForm>
              <UserUpdateLeft>
                <UserUpdateItem>
                  <Label>Username</Label>
                  <Input type="text" placeholder="jgoldberg" />
                </UserUpdateItem>{" "}
                <UserUpdateItem>
                  <Label>Full Name</Label>
                  <Input type="text" placeholder="Joe Goldberg" />
                </UserUpdateItem>{" "}
                <UserUpdateItem>
                  <Label>Email</Label>
                  <Input type="email" placeholder="jgoldberg@gmail.com" />
                </UserUpdateItem>{" "}
                <UserUpdateItem>
                  <Label>Phone</Label>
                  <Input type="text" placeholder="+91 6856473218" />
                </UserUpdateItem>{" "}
                <UserUpdateItem>
                  <Label>Address</Label>
                  <Input type="text" placeholder="Lonavala, India" />
                </UserUpdateItem>
              </UserUpdateLeft>
              <UserUpdateRight>
                <UserUploadImageSection>
                  <UserUpdateImage
                    src="https://static.tvtropes.org/pmwiki/pub/images/joe_goldberg_9.jpg"
                    alt=""
                  />
                  <FileUploadLabel htmlFor="file">
                    <Publish />
                  </FileUploadLabel>
                  <FileUploadInput type="file" id="file" />
                </UserUploadImageSection>
                <UpdateButton>Update</UpdateButton>
              </UserUpdateRight>
            </UserUpdateForm>
          </UpdateUser>
        </UserContainer>
      </Wrapper>
    </Container>
  );
}
