import React from "react";
import styled from "styled-components";
import RegionFilter from "./RegionFilter/RegionFilter";
import SearchInput from "./SearchInput/SearchInput";

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
`;
function Filters() {
  return (
    <Wrapper>
      <SearchInput />
      <RegionFilter />
    </Wrapper>
  );
}

export default Filters;
