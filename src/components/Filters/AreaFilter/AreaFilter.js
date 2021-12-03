import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import { useAppContext } from "../../../context/AppContext";

const Wrapper = styled.button`
  text-align: left;
  cursor: pointer;
  position: relative;
  font-size: 0.9rem;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  background: white;
  height: 45px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 3px;
  span {
    text-transform: capitalize;
    margin-right: 10px;
  }
`;
const DropdownOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 55px;
  left: 0;
  width: 100%;
  background: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 5px;
`;
const DropdownOption = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

function AreaFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const { filterArea, a, setFilterArea } = useAppContext();

  console.log(a, filterArea);
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <span>{filterArea ? filterArea : "Filtrar por região"}</span>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

      {isOpen && (
        <DropdownOptions>
          <DropdownOption onClick={() => setFilterArea(null)}>
            Todos
          </DropdownOption>

          <DropdownOption onClick={() => setFilterArea("africa")}>
            África
          </DropdownOption>
          <DropdownOption onClick={() => setFilterArea("americas")}>
            Americas
          </DropdownOption>
          <DropdownOption onClick={() => setFilterArea("asia")}>
            Ásia
          </DropdownOption>
          <DropdownOption onClick={() => setFilterArea("europa")}>
            Europa
          </DropdownOption>
          <DropdownOption onClick={() => setFilterArea("oceania")}>
            Oceania
          </DropdownOption>
        </DropdownOptions>
      )}
    </Wrapper>
  );
}

export default AreaFilter;
