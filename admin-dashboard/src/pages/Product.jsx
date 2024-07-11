import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2``;

const AddProduct = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const ProductTopRight = styled.div`
  flex: 1;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductInfoTop = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${"" /* margin-bottom: 20px; */}
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const ProductInfoBottom = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 10px;
`;

const ProductInfoItem = styled.div`
  font-size: 16px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  ${"" /* margin: 10px 10px; */}
`;

const ProductInfoKey = styled.span`
  font-weight: 600;
`;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  margin-top: 30px;
  padding: 30px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const ProductUpdateTitle = styled.h3``;

const ProductUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductUpdateLeft = styled.div`
  flex: 2;
`;

const ProductUpdateItem = styled.div`
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
  width: 80%;
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 10px;
  background-color: white;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const ProductUpdateRight = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const ProductUploadImageSection = styled.div`
  text-align: end;
  display: flex;
  align-items: end;
  justify-content: end;
`;

const ProductUpdateImage = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
  border-radius: 20px;
  margin: 5px 0px;
  object-position: top;
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
  margin: 40px 20px 30px 20px;
  padding: 10px 30px;
  background-color: lavender;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`

export default function Product() {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newProduct">
          <AddProduct>Create</AddProduct>
        </Link>
      </TitleContainer>

      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} title="Sales Performance" dataKey="Sales" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage
              src="https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351711/xara-ecommerce-app/products/3736044403_1_1_1_nnhhqi.jpg"
              alt=""
            />
            <ProductName>Blue Suit</ProductName>
          </ProductInfoTop>

          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id: </ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>{" "}
            <ProductInfoItem>
              <ProductInfoKey>sales: </ProductInfoKey>
              <ProductInfoValue>4123</ProductInfoValue>
            </ProductInfoItem>{" "}
            <ProductInfoItem>
              <ProductInfoKey>active: </ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>{" "}
            <ProductInfoItem>
              <ProductInfoKey>in stock: </ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductUpdateTitle>Edit</ProductUpdateTitle>
        <ProductUpdateForm>
          <ProductUpdateLeft>
            <ProductUpdateItem>
              <Label>Product Name</Label>
              <Input type="text" placeholder="Blue Suit" />
            </ProductUpdateItem>{" "}
            <ProductUpdateItem>
              <Label>In Stock</Label>
              <Select name="inStock" id="inStock">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </ProductUpdateItem>{" "}
            <ProductUpdateItem>
              <Label>Active</Label>
              <Select name="active" id="active">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>{" "}
            </ProductUpdateItem>{" "}
          </ProductUpdateLeft>
          <ProductUpdateRight>
            <ProductUploadImageSection>
              <ProductUpdateImage
                src="https://res.cloudinary.com/dgiksl9k7/image/upload/v1683351711/xara-ecommerce-app/products/3736044403_1_1_1_nnhhqi.jpg"
                alt=""
              />
              <FileUploadLabel htmlFor="file">
                <Publish />
              </FileUploadLabel>
              <FileUploadInput type="file" id="file" />
            </ProductUploadImageSection>
            <UpdateButton>Update</UpdateButton>
          </ProductUpdateRight>
        </ProductUpdateForm>
      </ProductBottom>
    </Container>
  );
}
