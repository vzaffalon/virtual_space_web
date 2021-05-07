import { List } from "antd";
import { Board as BoardStyled } from "../styled/BoardStyled";
import BoardCell from "./BoardCell";
import { User } from "../../../interfaces/user/user.interface";
import { Messages } from "../../../interfaces/message/messages.interface";

const Board: React.FC<{
  user: User,
  board: Array<any>;
  col: number;
  messagesQueue: Messages;
  setUserLocation: Function;
  removeFromQueue: Function;
}> = ({ user, board, col, setUserLocation, messagesQueue, removeFromQueue  }) => {
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
                setUserLocation={setUserLocation}
                messagesQueue={messagesQueue}
                removeFromQueue={removeFromQueue}
              />
            </List.Item>
          </>
        )}
      />
    </BoardStyled>
  );
};

export default Board;
