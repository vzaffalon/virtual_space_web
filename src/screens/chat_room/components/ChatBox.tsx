import { List, Button, Input } from "antd";
import { useEffect } from "react";
import { Messages} from "../../../interfaces/message/messages.interface";
import { ChatContainer} from "../styled/ChatRoomStyled"

const ChatBox: React.FC<{messages: Messages}> = ({messages}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <ChatContainer>
        <List
          dataSource={messages}
          renderItem={(item: any, index: number) => (
            <>
              <List.Item style={{ margin: 0 }}>{item.content}</List.Item>
            </>
          )}
        />
      </ChatContainer>
      <Input placeholder="Write your message here" />
      <Button type="primary" />
    </div>
  );
}

export default ChatBox;
