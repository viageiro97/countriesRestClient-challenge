import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 3px;
  padding: 20px 10px;
  background: white;
`;

export const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const CountryFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Name = styled.h3`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export const Flag = styled.img`
  display: inline;
  margin-left: 10px;
  width: 25px;
  height: 25px;
  object-fit: contain;
`;
export const SeeMoreBtn = styled.div`
  a {
    font-size: 0.9rem;
    text-decoration: none;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 15px;
    background: dodgerblue;

    &:hover {
      background: #0074d9;
    }
  }
`;

export const CountryBody = styled.div``;
