import styled from "styled-components";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export { Wrapper, Grid };
