import { Avatar } from "antd";
import { useEffect } from "react";
import {
  ChatMessage,
  Cell,
} from "./BoardCellStyled";
import { Message } from "../../../interfaces/message/message.interface";
import { User } from "../../../interfaces/user/user.interface";

const BoardCell: React.FC<{ user: User, index: number, setUserLocation: Function, findLastMessage: Function }> = ({ user, index, setUserLocation, findLastMessage }) => {
  useEffect(() => {}, []);

  return (
    <Cell onClick={() => setUserLocation(index)} title={"pica"}>
      {user && user.name && (
        <div>
          <Avatar
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
            }}
            size="large"
            gap={4}
          >
            {user.name}
          </Avatar>
          {findLastMessage(user._id) && (
            <ChatMessage>{findLastMessage(user._id).content}</ChatMessage>
          )}
        </div>
      )}
    </Cell>
  );
};

export default BoardCell;
