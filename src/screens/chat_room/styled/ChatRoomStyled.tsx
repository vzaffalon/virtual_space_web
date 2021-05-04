import styled from "styled-components";

const ChatMessage = styled.div`
  background: white;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const ChatContainer = styled.div`
  background: white;
  width: 800px;
`

const BoardBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export {
    ChatMessage,
    BoardBackground,
    ChatContainer
}