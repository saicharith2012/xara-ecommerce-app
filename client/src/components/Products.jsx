import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  background-color: #f7f7ff;

`;

const Products = () => {
  return (
    <Container>
      <div className="products-heading" style={{textAlign:"center", fontSize:"70px", fontWeight:"1000", padding:"30px 0px 50px 0px"}}>
        <p>POPULAR PRODUCTS.</p>
      </div>
      <div className="products" style={{display:"flex", flexWrap:"wrap", justifyContent: "space-between"}}>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
