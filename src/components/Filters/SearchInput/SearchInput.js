import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 45px;
  border: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 5px;
`;
const SearchIcon = styled.div`
  color: white;
  background: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
const InputField = styled.input`
  padding: 15px 5px;
  width: 100%;
  height: 100%;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  &:focus {
    border: 2px solid dodgerblue;
  }
`;

function SearchInput() {
  return (
    <Wrapper>
      <SearchIcon>
        <IoIosSearch size={25} />
      </SearchIcon>
      <InputField type="text" placeholder="Insira o nome do pais ..." />
    </Wrapper>
  );
}

export default SearchInput;
