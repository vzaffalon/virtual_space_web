import styled from "styled-components";
import floor from "../../../floor.png";

const Cell = styled.div`
  background: url(${floor});
  height: 60px;
  border-style: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
`;

const ChatMessage = styled.div`
  background: white;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
`

export {
    Cell,
    ChatMessage
}