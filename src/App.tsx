import MainRouter from "./routers/MainRouter";
import "antd/dist/antd.css";
import styled from "styled-components"

const MainBackground = styled.div`
  background: #f2e9e5;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <MainBackground>
      <MainRouter/>
    </MainBackground>
  );
}

export default App;
