import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const Container = styled.div`
width: calc(100vw - 300px);

`;

const Wrapper = styled.div`
`;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <FeaturedInfo />
        <Chart
          data={userData}
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
