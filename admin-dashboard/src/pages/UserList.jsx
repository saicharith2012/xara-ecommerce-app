import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { rows } from "../dummyData";
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

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

const EditUser = styled.button`
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



export default function UserList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <UserImage src={params.row.avatar} alt="" />
            {params.row.username}
          </User>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      sortable: false,
    },
    {
      field: "transaction",
      headerName: "Transaction volume",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <UserActions>
            <Link to={"/user/" + params.row.id}>
              <EditUser>Edit</EditUser>
            </Link>
            <DeleteIconContainer>
              <DeleteOutline onClick={() => handleDelete(params.row.id)}/>
            </DeleteIconContainer>
          </UserActions>
        );
      },
    },
  ];

  return (
    <Container>
      <Title>Users</Title>
      <Table>
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10},
            },
          }}
          checkboxSelection
          pageSizeOptions={[5,10,14]}
        />
      </Table>
    </Container>
  );
}
