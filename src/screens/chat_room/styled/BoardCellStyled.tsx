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

const UserContent = styled.div`
  position: absolute;
  z-index: 10;
`

const ChatMessage = styled.div`
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