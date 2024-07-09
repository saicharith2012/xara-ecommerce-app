import styled from "styled-components";
import PropTypes from 'prop-types';

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  padding: 30px;
  margin: 20px;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;

export default function Chart({  title = "Chart Title",
    data = [],
    dataKey = "value",
    grid = false,}) {

  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={"5 5"} />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}


Chart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    dataKey: PropTypes.string,
    grid: PropTypes.bool,
  };