import styled from "styled-components";

const ChatMessage = styled.div`
  background: white;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const ChatContainer = styled.div`
  background: white;
  width: 800px;
  height: 150px;
  margin-top: 5px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
`

const BoardBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export {
    ChatMessage,
    BoardBackground,
    ChatContainer
}