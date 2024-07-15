import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import { useEffect, useMemo } from "react";
// import { userRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserStats } from "../redux/statSlice";

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
  const dispatch = useDispatch();

  const { userStats } = useSelector((state) => state.stats);
  // console.log(userStats);
  
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

  useEffect(() => {
    dispatch(fetchUserStats(initialValue));
    // console.log(response.data.data);
  }, [initialValue, dispatch]);

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
