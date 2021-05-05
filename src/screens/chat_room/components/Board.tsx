import { List } from "antd";
import { useEffect } from "react";
import { Board as BoardStyled } from "../styled/BoardStyled";
import BoardCell from "./BoardCell";
import { User } from "../../../interfaces/user/user.interface";

const Board: React.FC<{
  user: User,
  board: Array<any>;
  col: number;
  findLastMessage: Function;
  setUserLocation: Function;
}> = ({ user, board, col, findLastMessage, setUserLocation }) => {
  return (
    <BoardStyled>
      <List
        style={{width: 800, top: 20}}
        grid={{ gutter: 0, column: col }}
        dataSource={board}
        renderItem={(item, index) => (
          <>
            <List.Item style={{ margin: 0 }}>
              <BoardCell
                loggedInUser={user}
                cellUser={item}
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
