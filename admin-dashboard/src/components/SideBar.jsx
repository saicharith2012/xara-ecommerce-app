import styled from "styled-components";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import { medium } from "../responsive.js";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0px;
  height: calc(100vh - 70px);
  width: 300px;
  background-color: rgb(251, 251, 255);
  z-index: 100;

  ${medium({ width: "220px" })}
`;

const Wrapper = styled.div`
  padding: 20px 20px 20px 32px;
  color: black;
`;

const SideBarMenu = styled.div`
  margin-bottom: 30px;
`;

const SideBarTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
  color: rgb(54, 69, 79);
`;

const SideBarList = styled.ul`
  list-style: none;
  padding: 0px 5px;
`;

const SideBarListItem = styled.li`
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${({ $isactive }) =>
    $isactive === "true" ? "rgb(240, 240, 255)" : "transparent"};

  &:hover,
  &:active {
    background-color: rgb(240, 240, 255);
  }
`;

const ListItemIcon = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemTitle = styled.p`
  margin-left: 10px;
`;

export default function SideBar() {
  const location = useLocation();

  return (
    <Container>
      <Wrapper>
        <SideBarMenu>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SideBarList>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <SideBarListItem
                $isactive={location.pathname === "/" ? "true" : "false"}
              >
                <ListItemIcon>
                  <LineStyle />
                </ListItemIcon>
                <ListItemTitle>Home</ListItemTitle>
              </SideBarListItem>
            </Link>
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SideBarListItem
                $isactive={location.pathname === "/users" ? "true" : "false"}
              >
                <ListItemIcon>
                  <PermIdentity />
                </ListItemIcon>
                <ListItemTitle>Users</ListItemTitle>
              </SideBarListItem>
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SideBarListItem
                $isactive={location.pathname === "/products" ? "true" : "false"}
              >
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemTitle>Products</ListItemTitle>
              </SideBarListItem>
            </Link>
            <SideBarListItem
              $isactive={
                location.pathname === "/transactions" ? "true" : "false"
              }
            >
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemTitle>Transactions</ListItemTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
      </Wrapper>
    </Container>
  );
}
