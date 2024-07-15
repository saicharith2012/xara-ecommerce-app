import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

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
  const dispatch = useDispatch();

  const initialValue = {
    title: "",
    description: "",
    price: "",
    gender: "men",
    inStock: "yes",
    type: "suits",
  };

  const [newProduct, setNewProduct] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };

  return (
    <Container>
      <Wrapper>
        <Title>New Product</Title>
        <NewUserForm onSubmit={handleCreate}>
          <FormItem>
            <FormItemLabel>Title</FormItemLabel>
            <FormItemInput
              type="text"
              placeholder="Blue Suit"
              name="title"
              value={newProduct.title}
              required
              onChange={handleChange}
            />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Description</FormItemLabel>
            <FormItemInput
              type="text"
              placeholder="Describe the product"
              name="description"
              value={newProduct.description}
              required
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <FormItemLabel>Price</FormItemLabel>
            <FormItemInput
              type="text"
              placeholder="2341"
              name="price"
              value={newProduct.price}
              required
              onChange={handleChange}
            />
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Gender</FormItemLabel>
            <NewProductSelect
              name="gender"
              id="gender"
              required
              onChange={handleChange}
              value={newProduct.gender}
            >
              <NewProductOption value="men">Men</NewProductOption>
              <NewProductOption value="women">Women</NewProductOption>
            </NewProductSelect>
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>In Stock</FormItemLabel>
            <NewProductSelect
              name="inStock"
              id="inStock"
              required
              onChange={handleChange}
              value={newProduct.inStock}
            >
              <NewProductOption value="true">Yes</NewProductOption>
              <NewProductOption value="false">No</NewProductOption>
            </NewProductSelect>
          </FormItem>{" "}
          <FormItem>
            <FormItemLabel>Type</FormItemLabel>
            <NewProductSelect
              name="type"
              id="type"
              required
              onChange={handleChange}
              value={newProduct.type}
            >
              <NewProductOption value="suits">Suits</NewProductOption>
              <NewProductOption value="jackets">Jackets</NewProductOption>
              <NewProductOption value="accessories">
                Accessories
              </NewProductOption>
            </NewProductSelect>
          </FormItem>
          <FormItem>
            <FormItemLabel>Upload Image</FormItemLabel>
            <FormFileInput type="file" id="file" />
          </FormItem>{" "}
          <FormItem>
            <CreateProduct type="submit">Create</CreateProduct>
          </FormItem>
        </NewUserForm>
      </Wrapper>
    </Container>
  );
}
