import styled from "styled-components";
import scene from "../../../images/scene.png";

const Board = styled.div`
  background: url(${scene});
  background-repeat: no-repeat;
  background-size: cover;
  width: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export {
    Board,
}