import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 30px;
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
const FormFileInput = styled.input`
  font-size: 16px;
  padding: 5px 10px;
  background-color: white;
`;

const NewProductSelect = styled.select`
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  width: 50%;

  &:focus {
    outline: none;
  }
`;

const NewProductOption = styled.option``;

const CreateProduct = styled.button`
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

export default function NewProduct() {
  return (
    <Container>
      <Wrapper>
        <Title>New Product</Title>
        <NewUserForm>
          <FormItem>
            <FormItemLabel>Product Name</FormItemLabel>
            <FormItemInput type="text" placeholder="Blue Suit" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Upload Image</FormItemLabel>
            <FormFileInput type="file" id="file" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Stock</FormItemLabel>
            <FormItemInput type="text" placeholder="123" />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Active</FormItemLabel>
            <NewProductSelect name="active" id="active">
              <NewProductOption value="yes">Yes</NewProductOption>
              <NewProductOption value="no">No</NewProductOption>
            </NewProductSelect>
          </FormItem>
          <FormItem>
            <CreateProduct>Create</CreateProduct>
          </FormItem>
        </NewUserForm>
      </Wrapper>
    </Container>
  );
}
