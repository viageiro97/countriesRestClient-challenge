import Header from "./components/Header/Header";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Home />
    </Wrapper>
  );
}

export default App;
