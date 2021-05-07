import { Cell, UserContent } from "../styled/BoardCellStyled";
import { Avatar } from "antd";
import Message from "./Message";
import { User } from "../../../interfaces/user/user.interface";
import { Messages } from "../../../interfaces/message/messages.interface";
import { Message as MessageInterface } from "../../../interfaces/message/message.interface";

const BoardCell: React.FC<{
  loggedInUser: User;
  cellUser: User;
  index: number;
  messagesQueue: Messages;
  setUserLocation: Function;
  removeFromQueue: Function;
}> = ({ loggedInUser, cellUser, index, setUserLocation, messagesQueue, removeFromQueue }) => {
  
    const findNewMessage = () => {
      return messagesQueue.find((message: MessageInterface) => message.user_id === cellUser._id); 
    }

    let newMessage = findNewMessage();

  return (
    <Cell onClick={() => setUserLocation(index)} title={""}>
      {cellUser && cellUser.name && (
        <UserContent>
          {newMessage && <Message
            message={newMessage}
            removeFromQueue={removeFromQueue}
            loggedInUser={loggedInUser}
            cellUser={cellUser}
          />}

          <Avatar
            style={{
              backgroundColor: cellUser._id == loggedInUser._id ? "#f56a00" : "#1890ff",
              verticalAlign: "middle",
            }}
            size={50}
            gap={4}
          >
            {cellUser.name}
          </Avatar>
        </UserContent>
      )}
    </Cell>
  );
};

export default BoardCell;
