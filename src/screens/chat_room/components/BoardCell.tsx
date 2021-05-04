import { Avatar } from "antd";
import { useEffect } from "react";
import { ChatMessage, Cell, UserContent } from "../styled/BoardCellStyled";

import { User } from "../../../interfaces/user/user.interface";

const BoardCell: React.FC<{
  user: User;
  index: number;
  setUserLocation: Function;
  findLastMessage: Function;
}> = ({ user, index, setUserLocation, findLastMessage }) => {
  return (
    <Cell onClick={() => setUserLocation(index)} title={""}>
      {user && user.name && (
        <UserContent>
          {findLastMessage(user._id) && (
            <ChatMessage>{findLastMessage(user._id).content}</ChatMessage>
          )}
          <Avatar
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
            }}
            size={50}
            gap={4}
          >
            {user.name}
          </Avatar>
        </UserContent>
      )}
    </Cell>
  );
};

export default BoardCell;
