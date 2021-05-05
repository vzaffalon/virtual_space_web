import styled from "styled-components";

const Cell = styled.div`
  height: 40px;
  border-style: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
`;

const UserContent = styled.div`
  position: absolute;
  z-index: 10;
`

interface ChatMessageStyledProps {
  opacity: number
}

const ChatMessage = styled.div`
  opacity: ${(props: ChatMessageStyledProps) => props.opacity ? props.opacity : 1};
  background: white;
  padding: 10px;
  border: 1px;
  z-index: 1000;
  position: absolute;
  margin-left: 60px;
  min-width: 200px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  display: flex;
`

export {
    Cell,
    ChatMessage,
    UserContent
}