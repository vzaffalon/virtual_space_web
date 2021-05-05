import { Cell, UserContent } from "../styled/BoardCellStyled";
import { Avatar } from "antd";
import Message from "./Message";
import { User } from "../../../interfaces/user/user.interface";

const BoardCell: React.FC<{
  loggedInUser: User;
  cellUser: User;
  index: number;
  setUserLocation: Function;
  findLastMessage: Function;
}> = ({ loggedInUser, cellUser, index, setUserLocation, findLastMessage }) => {
  return (
    <Cell onClick={() => setUserLocation(index)} title={""}>
      {cellUser && cellUser.name && (
        <UserContent>
          <Message
            loggedInUser={loggedInUser}
            cellUser={cellUser}
            findLastMessage={findLastMessage}
          ></Message>

          <Avatar
            style={{
              backgroundColor: "#f56a00",
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
