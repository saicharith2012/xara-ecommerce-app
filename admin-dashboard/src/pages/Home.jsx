import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import { useEffect, useState, useMemo } from "react";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: calc(100vw - 300px);
  padding: 30px;
`;

const Wrapper = styled.div``;

const HomeWidgets = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default function Home() {
  const initialValue = useMemo(
    () => [
      { name: "Jan", "Active User": 0 },
      { name: "Feb", "Active User": 0 },
      { name: "Mar", "Active User": 0 },
      { name: "Apr", "Active User": 0 },
      { name: "May", "Active User": 0 },
      { name: "June", "Active User": 0 },
      { name: "July", "Active User": 0 },
      { name: "Aug", "Active User": 0 },
      { name: "Sept", "Active User": 0 },
      { name: "Oct", "Active User": 0 },
      { name: "Nov", "Active User": 0 },
      { name: "Dec", "Active User": 0 },
    ],
    []
  );

  const [userStats, setUserStats] = useState(initialValue);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await userRequest.get("/users/user-stats");

        const updatedStats = initialValue.map((month, index) => {
          const monthData = response.data.data.find(
            (item) => item._id - 1 === index
          );
          if (monthData) {
            return { ...month, "Active User": monthData.total };
          }
          return month;
        });

        setUserStats(updatedStats);
        // console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [initialValue]);

  // console.log(userStats);
  return (
    <Container>
      <Wrapper>
        <FeaturedInfo />
        <Chart
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <HomeWidgets>
          <WidgetSm />
          <WidgetLg />
        </HomeWidgets>
      </Wrapper>
    </Container>
  );
}
