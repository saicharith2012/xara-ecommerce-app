import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  object-position: top;
`;

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Product>
            <ProductImage src={params.row.image} alt="" />
            {params.row.name}
          </Product>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 140 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      sortable: false,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: false,
      width: 200,
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
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
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
          rows={data}
          disableRowSelectionOnClick
          columns={columns}

          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 14 },
            },
          }}
          checkboxSelection
          pageSizeOptions={[5, 10, 14]}
        />
      </Table>
    </Container>
  );
}
