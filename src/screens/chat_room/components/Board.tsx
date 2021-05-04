import { List } from "antd";
import { useEffect } from "react";
import { Board as BoardStyled } from "../styled/BoardStyled";
import BoardCell from "./BoardCell";

const Board: React.FC<{
  board: Array<any>;
  col: number;
  findLastMessage: Function;
  setUserLocation: Function;
}> = ({ board, col, findLastMessage, setUserLocation }) => {
  useEffect(() => {}, []);

  return (
    <BoardStyled>
      <List
        grid={{ gutter: 0, column: col }}
        dataSource={board}
        renderItem={(item, index) => (
          <>
            <List.Item style={{ margin: 0 }}>
              <BoardCell
                user={item}
                index={index}
                findLastMessage={findLastMessage}
                setUserLocation={setUserLocation}
              />
            </List.Item>
          </>
        )}
      />
    </BoardStyled>
  );
};

export default Board;
