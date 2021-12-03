import React from "react";
import styled from "styled-components";
import AreaFilter from "./AreaFilter/AreaFilter";
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
      <AreaFilter />
    </Wrapper>
  );
}

export default Filters;
