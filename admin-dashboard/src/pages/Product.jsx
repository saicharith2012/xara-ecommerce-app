import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { Publish } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../requestMethods";
import { updateProduct } from "../redux/productSlice";

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
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span`
  font-weight: 600;
  margin-right: 10px;
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
  object-position: center;
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
`;

export default function Product() {
  const location = useLocation();
  const pid = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === pid)
  );

  const dispatch = useDispatch();
  const [productStats, setProductStats] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(product.inStock.toString());

  const MONTHS = useMemo(
    () => [
      { name: "Jan" },
      { name: "Feb" },
      { name: "Mar" },
      { name: "Apr" },
      { name: "May" },
      { name: "June" },
      { name: "July" },
      { name: "Aug" },
      { name: "Sept" },
      { name: "Oct" },
      { name: "Nov" },
      { name: "Dec" },
    ],
    []
  );

  useEffect(() => {
    const getProductStats = async () => {
      const response = await userRequest.get(`orders/income?pid=${pid}`);

      const newProductStats = response.data.data.map((item) => ({
        name: MONTHS[item._id - 1].name,
        Sales: item.total,
      }));

      setProductStats(newProductStats);
    };
    getProductStats();
  }, [pid, MONTHS]);

  const handleEditProduct = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      _id: product._id,
      title: title || product.title,
      description: description || product.description,
      price: price || product.price,
      inStock,
    };

    dispatch(updateProduct(updatedProduct));

    setTitle("");
    setDescription("");
    setPrice("");
    setInStock(product.inStock.toString());
  };

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
          <Chart
            data={productStats}
            title="Sales Performance"
            dataKey="Sales"
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage src={product.image} alt="" />
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>

          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id: </ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales: </ProductInfoKey>
              <ProductInfoValue>4123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>price: </ProductInfoKey>
              <ProductInfoValue>Rs. {product.price}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock: </ProductInfoKey>
              <ProductInfoValue>
                {product.inStock ? "yes" : "no"}
              </ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductUpdateTitle>Edit</ProductUpdateTitle>
        <ProductUpdateForm onSubmit={handleEditProduct}>
          <ProductUpdateLeft>
            <ProductUpdateItem>
              <Label>Product Name</Label>
              <Input
                type="text"
                name="title"
                value={title}
                placeholder={product.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </ProductUpdateItem>
            <ProductUpdateItem>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={description}
                placeholder={product.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </ProductUpdateItem>
            <ProductUpdateItem>
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                value={price}
                placeholder={`Rs. ${product.price}`}
                onChange={(e) => setPrice(e.target.value)}
              />
            </ProductUpdateItem>
            <ProductUpdateItem>
              <Label>In Stock</Label>
              <Select
                name="inStock"
                id="inStock"
                value={inStock}
                onChange={(e) => setInStock(e.target.value)}
              >
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
            </ProductUpdateItem>
          </ProductUpdateLeft>
          <ProductUpdateRight>
            <ProductUploadImageSection>
              <ProductUpdateImage src={product.image} alt="" />
              <FileUploadLabel htmlFor="file">
                <Publish />
              </FileUploadLabel>
              <FileUploadInput type="file" id="file" />
            </ProductUploadImageSection>
            <UpdateButton type="submit">Update</UpdateButton>
          </ProductUpdateRight>
        </ProductUpdateForm>
      </ProductBottom>
    </Container>
  );
}
