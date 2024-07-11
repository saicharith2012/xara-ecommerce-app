import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 30px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const FormItem = styled.div`
  width: 450px;
  margin: 10px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormItemLabel = styled.label`
  margin: 5px 0px;
`;

const FormItemInput = styled.input`
  padding: 5px;
  margin-right: 5px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
  }
`;

const NewUserGender = styled.div`
  display: flex;
  ${"" /* flex-direction: column; */}
`;

const NewUserGenderChoice = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NewUserSelect = styled.select`
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  width: 50%;

  &:focus {
    outline: none;
  }
`;

const NewUserOption = styled.option``;

const CreateUser = styled.button`
  margin-top: 30px;
  padding: 5px;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: lavender;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export default function NewUser() {
  return (
    <Container>
      <Wrapper>
        <Title>New User</Title>
        <NewUserForm>
          <FormItem>
            <FormItemLabel>Username</FormItemLabel>
            <FormItemInput type="text" placeholder="jonthedragonrider" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Full Name</FormItemLabel>
            <FormItemInput type="text" placeholder="Jon Snow" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Email</FormItemLabel>
            <FormItemInput type="email" placeholder="jonsnow@got.com" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Password</FormItemLabel>
            <FormItemInput type="password" placeholder="password" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Phone</FormItemLabel>
            <FormItemInput type="text" placeholder="+91 6543789321" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Address</FormItemLabel>
            <FormItemInput type="text" placeholder="Gurgaon, India." />
          </FormItem>
          <FormItem>
            <FormItemLabel>Gender</FormItemLabel>
            <NewUserGender>
              <NewUserGenderChoice>
                <FormItemInput
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <FormItemLabel for="male">Male</FormItemLabel>
              </NewUserGenderChoice>
              <NewUserGenderChoice>
                <FormItemInput
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <FormItemLabel for="female">Female</FormItemLabel>
              </NewUserGenderChoice>
              <NewUserGenderChoice>
                <FormItemInput
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                />
                <FormItemLabel for="others">Others</FormItemLabel>
              </NewUserGenderChoice>
            </NewUserGender>
          </FormItem>
          <FormItem>
            <FormItemLabel>Active</FormItemLabel>
            <NewUserSelect name="active" id="active">
              <NewUserOption value="yes">Yes</NewUserOption>
              <NewUserOption value="no">No</NewUserOption>
            </NewUserSelect>
          </FormItem>
          <FormItem>
            <CreateUser>Create</CreateUser>
          </FormItem>
        </NewUserForm>
      </Wrapper>
    </Container>
  );
}
