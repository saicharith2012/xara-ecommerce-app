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
import { medium } from "../response.js";

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
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;

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
  return (
    <Container>
      <Wrapper>
        <SideBarMenu>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <ListItemIcon>
                <LineStyle />
              </ListItemIcon>
              <ListItemTitle>Home</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <Timeline />
              </ListItemIcon>
              <ListItemTitle>Analytics</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <TrendingUp />
              </ListItemIcon>
              <ListItemTitle>Sales</ListItemTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Quick Menu</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <ListItemIcon>
                <PermIdentity />
              </ListItemIcon>
              <ListItemTitle>Users</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemTitle>Products</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemTitle>Transactions</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemTitle>Reports</ListItemTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Notifications</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemTitle>Mail</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <DynamicFeed />
              </ListItemIcon>
              <ListItemTitle>Feedback</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <ChatBubbleOutline />
              </ListItemIcon>
              <ListItemTitle>Messages</ListItemTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Staff</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <ListItemIcon>
                <WorkOutline />
              </ListItemIcon>
              <ListItemTitle>Manage</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <Timeline />
              </ListItemIcon>
              <ListItemTitle>Analytics</ListItemTitle>
            </SideBarListItem>{" "}
            <SideBarListItem>
              <ListItemIcon>
                <Report />
              </ListItemIcon>
              <ListItemTitle>Reports</ListItemTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
      </Wrapper>
    </Container>
  );
}
