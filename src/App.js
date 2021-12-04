import Header from "./components/Header/Header";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Download from "./components/Excel";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Download />
    </Wrapper>
  );
}

export default App;
