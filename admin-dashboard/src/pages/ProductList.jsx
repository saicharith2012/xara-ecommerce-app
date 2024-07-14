import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/productSlice";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  margin: 10px 30px 0px 30px;
`;

const Table = styled.div`
  margin: 10px 30px;
  width: 95%;
  height: 90%;
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
`;

const EditProduct = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: lavender;
`;

const DeleteIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 2px;
  margin-left: 25px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  object-position: center;
`;

export default function ProductList() {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <Product>
            <ProductImage src={params.row.image} alt="" />
            {params.row.title}
          </Product>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 100 },
    {
      field: "price",
      headerName: "Price",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <ProductActions>
            <Link to={"/product/" + params.row.id}>
              <EditProduct>Edit</EditProduct>
            </Link>
            <DeleteIconContainer>
              <DeleteOutline onClick={() => handleDelete(params.row._id)} />
            </DeleteIconContainer>
          </ProductActions>
        );
      },
    },
  ];

  return (
    <Container>
      <Title>Products</Title>
      <Table>
        <DataGrid
          rows={products}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 14 },
            },
          }}
          getRowId={(row) => row._id}
          checkboxSelection
          pageSizeOptions={[5, 10, 14]}
        />
      </Table>
    </Container>
  );
}
