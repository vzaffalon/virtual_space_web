import { List, Button, Input } from "antd";
import { useState, useEffect } from "react";
import { Messages}  from "../../../interfaces/message/messages.interface";
import { Room } from "../../../interfaces/room/room.interface";
import { User } from "../../../interfaces/user/user.interface";
import { Message } from "../../../models";
import { ChatContainer} from "../styled/ChatRoomStyled"
import { InputContainer, MessageContentContainer } from "../styled/ChatBoxStyled";

const ChatBox: React.FC<{messages: Messages, user: User, room: Room}> = ({messages, user, room}) => {
  const [message, setMessage] = useState("")

  const onChange = (e: any) => {
    setMessage(e.target.value)
  };

  const sendMessage = () => {
    Message.create({ content: message, user_id: user._id, room_id: room._id }).then((response) => {
      setMessage("")
    })
  }

  const listener = (event: any) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      sendMessage();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ChatContainer>
        <List
          style={{height: 150, overflow: "auto"}}
          dataSource={messages}
          renderItem={(item: any, index: number) => (
            <>
              <List.Item style={{ margin: 0 }}>
                <MessageContentContainer>
                  {item.content}
                </MessageContentContainer>
              </List.Item>
            </>
          )}
        />
      </ChatContainer>
      <InputContainer>
        <Input defaultValue={message} value={message} onChange={(value) => onChange(value)} placeholder="Write your message here" />
        <Button style={{marginLeft: 10, borderColor: "#1BC47D", backgroundColor: "#1BC47D"}} onClick={() => sendMessage()}  type="primary">Send</Button>
      </InputContainer>
    </div>
  );
}

export default ChatBox;
