import { useState, useEffect } from "react";
import { Users } from "../../interfaces/user/users.interface";
import { User } from "../../interfaces/user/user.interface";
import socketIOClient from "socket.io-client";
import { Message } from "../../interfaces/message/message.interface";
import { BoardBackground } from "./styled/ChatRoomStyled";
import ChatBox from "./components/ChatBox";
import Board from "./components/Board";

const ENDPOINT = "http://127.0.0.1:4001";

function ChatRoomScreen() {
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
        <Board board={board} findLastMessage={findLastMessage} col={col} setUserLocation={setUserLocation} />
        <ChatBox messages={messages}/>
      </BoardBackground>
    </div>
  );
}

export default ChatRoomScreen;
