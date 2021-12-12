import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;
export const MainText = styled.h2`
  margin-bottom: 15px;
`;
export const ExportDataArea = styled.div`
  display: flex;
  // media md from bootstrap
  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.span`
  display: block;
  margin-right: 5px;
`;

export const ExportBtnsContainer = styled.div`
  display: flex;
  @media (max-width: 630px) {
    margin-top: 10px;
  }
`;
