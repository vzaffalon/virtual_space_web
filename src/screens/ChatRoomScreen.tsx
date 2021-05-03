import styled from "styled-components";
import { List, Avatar, Button, Input } from "antd";
import { useState, useEffect } from "react";
import floor from "./floor.png";
import { Users } from "../interfaces/user/users.interface";
import { User } from "../interfaces/user/user.interface";
import "antd/dist/antd.css";
import socketIOClient from "socket.io-client";
import { Message } from "../interfaces/message/message.interface";
const ENDPOINT = "http://127.0.0.1:4001";

const Cell = styled.div`
  background: url(${floor});
  height: 60px;
  border-style: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
`;

const ChatMessage = styled.div`
  background: white;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const BoardBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Board = styled.div`
  width: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ChatContainer = styled.div`
  background: white;
  width: 800px;
`

function App() {
  const col = 10;
  const row = 10;
  const [board, setBoard] = useState(Array(col * row).fill({}));
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState([]);

  const setUserLocation = (index: number) => {
    let arrayCopy = Array(col * row).fill(0);
    arrayCopy[index] = 1;
    setBoard(arrayCopy);
  };

  const getMessages = () => {

  }

  const getUsers = () => {
    
  }

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("messages", (message: Message) => {
      let newMessagesCopy: any = [...newMessages];
      let messagesCopy: any = [...messages];
      newMessagesCopy.push(message)
      messagesCopy.push(message)
      setMessages(newMessagesCopy);
      setNewMessages(messagesCopy);
    });

    socket.on("users", (users: Users) => {
      let newUsers = Array(col * row).fill({})
      users.map((user: User) => (newUsers[user.position] = user));
      setBoard(newUsers);
    });
  }, []);

  const findLastMessage = (user_id: string) => {
    return messages.find((message: Message) => message.user_id = user_id)
  }

  return (
    <div>
      <BoardBackground>
        <Board>
          <List
            grid={{ gutter: 0, column: col }}
            dataSource={board}
            renderItem={(item, index) => (
              <>
                <List.Item style={{ margin: 0 }}>
                  <Cell onClick={() => setUserLocation(index)} title={"pica"}>
                    {item && item.name && (
                      <div>
                        <Avatar
                          style={{
                            backgroundColor: "#f56a00",
                            verticalAlign: "middle",
                          }}
                          size="large"
                          gap={4}
                        >
                          {item.name}
                        </Avatar>
                        {findLastMessage(item._id) && <ChatMessage>{findLastMessage(item._id).content}</ChatMessage>}
                      </div>
                    )}
                  </Cell>
                </List.Item>
              </>
            )}
          />
        </Board>
      </BoardBackground>
      <ChatContainer>
        <List
          dataSource={messages}
          renderItem={(item: any, index: number) => (
            <>
              <List.Item style={{ margin: 0 }}>
                {item.content}
              </List.Item>
            </>
          )}
        />
      </ChatContainer>
      <Input placeholder="Write your message here"/>
      <Button type="primary"/>
    </div>
  );
}

export default App;
