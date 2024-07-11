import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: -2px 3px 18px -5px rgba(0, 0, 0, 0.16);
  box-shadow: -2px 3px 15px -5px rgba(0, 0, 0, 0.1);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const FeaturedMoneyContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 32px;
  font-weight: 600;
  margin: 10px 0px;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const FeaturedMoneyArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-left: 5px;
  color: ${props => props.negative ? "red" : "green"}
`;

const FeaturedSub = styled.span`
font-size: 15px;
font-weight: 500;
color: rgb(54, 69, 79);
`;

export default function FeaturedInfo() {
  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 2415</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4{" "}
            <FeaturedMoneyArrow negative>
              <ArrowDownward />
            </FeaturedMoneyArrow>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>{" "}
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 4415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4{" "}
            <FeaturedMoneyArrow negative>
              <ArrowDownward />
            </FeaturedMoneyArrow>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>{" "}
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 2225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4{" "}
            <FeaturedMoneyArrow>
              <ArrowUpward />
            </FeaturedMoneyArrow>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
}
