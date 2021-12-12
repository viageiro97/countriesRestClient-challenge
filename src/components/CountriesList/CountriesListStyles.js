import styled from "styled-components";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export { Wrapper, Grid };
