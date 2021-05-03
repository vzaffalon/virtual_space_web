import styled from "styled-components";
import { List, Avatar } from "antd";
import { useState, useEffect } from "react";
import floor from "./floor.png";
import "antd/dist/antd.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

const Cell = styled.div`
  background: url(${floor});
  height: 60px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
`;

const BoardBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Board = styled.div`
  margin-top: 80px;
  width: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function App() {
  const col = 10;
  const row = 10;
  const [board, setBoard] = useState(Array(col * row).fill({}));
  const [messages, setMessages] = useState([]);

  const setUserLocation = (index: number) => {
    let arrayCopy = Array(col * row).fill(0);
    arrayCopy[index] = 1;
    setBoard(arrayCopy);
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("messages", (messages) => {
      let arrayCopy = [...board];
      messages.map((message: any) => (arrayCopy[user.position] = user));
      setBoard(arrayCopy);
      setMessages(data);
    });

    socket.on("users", (users) => {
      let arrayCopy = [...board];
      users.map((user: any) => (arrayCopy[user.position] = user));
      setBoard(arrayCopy);
    });
  }, []);

  return (
    <div>
      <BoardBackground>
        <Board>
          <List
            style={{ flexDirection: "row" }}
            grid={{ gutter: 0, column: col }}
            dataSource={board}
            renderItem={(item, index) => (
              <>
                <List.Item style={{ margin: 0 }}>
                  <Cell onClick={() => setUserLocation(index)} title={"pica"}>
                    {item && item.name && (
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
                    )}
                  </Cell>
                </List.Item>
              </>
            )}
          />
        </Board>
      </BoardBackground>
      {messages.map((message) => 
        <div>
        </div>
      )}
    </div>
  );
}

export default App;
