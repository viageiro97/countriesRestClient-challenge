import Header from "./components/Header/Header.jsx";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, Routes } from "react-router";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<Details />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
