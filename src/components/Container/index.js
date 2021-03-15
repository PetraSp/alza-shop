import Styled from "styled-components";

const Container = Styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 90%;
  
  @media (min-width: 500px) {
     max-width: 70%;
  }
  
  @media (min-width: 768px) {
     max-width: 708px;
  }
`;

export default Container;
