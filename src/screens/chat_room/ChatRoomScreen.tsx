import { useState, useEffect } from "react";
import { Users } from "../../interfaces/user/users.interface";
import { Messages } from "../../interfaces/message/messages.interface";
import { User } from "../../interfaces/user/user.interface";
import socketIOClient from "socket.io-client";
import { Socket } from "socket.io-client";
import { Message } from "../../interfaces/message/message.interface";
import { Message as MessageModel, User as UserModel } from "../../models";
import { BoardBackground } from "./styled/ChatRoomStyled";
import { useLocation } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import Board from "./components/Board";
import { Room } from "../../interfaces/room/room.interface";

const ENDPOINT = "http://127.0.0.1:5000";

interface State {
  room: Room;
  user: User;
}

function ChatRoomScreen() {
  const col = 8;
  const row = 8;
  const [board, setBoard] = useState(Array(col * row).fill({}));
  const [messages, setMessages] = useState<Messages>([]);
  const [newMessages, setNewMessages] = useState<Messages>([]);
  const location = useLocation<State>();
  const { room, user } = location.state;

  const setUserLocation = (user: User, position: number) => {
    user.position = position;
    UserModel.update(user).then((response: any) => {
      setBoardUsers(response.data)
    })
  };

  const getMessages = () => {
    MessageModel.list(room._id).then((response: any) => {
      setMessages(response.data)
    });
  }

  const getUsers = () => {
    UserModel.list().then((response: any) => {
      setBoardUsers(response.data)
    });
  }

  const setBoardUsers = (users: Users) => {
    let newUsers = Array(col * row).fill({})
    users.map((user: User) => (newUsers[user.position] = user));
    setBoard(newUsers);
    getMessages();
  }

  const setUpSocketIO = () => {
    const socket: Socket = socketIOClient(ENDPOINT);
    setUpMessagesSocket(socket);
    setUpUsersSocket(socket);
  }

  const setUpMessagesSocket = (socket: Socket) => {
    socket.on("messages", (message: Message) => {
      let newMessagesCopy: Messages = [...newMessages];
      let messagesCopy: Messages = [...messages];
      newMessagesCopy.push(message)
      messagesCopy.push(message)
      setMessages(newMessagesCopy);
      setNewMessages(messagesCopy);
    });
  }

  const setUpUsersSocket = (socket: Socket) => {
    socket.on("users", (users: Users) => {
      let newUsers = Array(col * row).fill({})
      users.map((user: User) => (newUsers[user.position] = user));
      setBoard(newUsers);
    });
  }

  useEffect(() => {
    getUsers();
    setUpSocketIO();
  }, []);

  const findLastMessage = (user_id: string) => {
    return messages.find((message: Message) => message.user_id = user_id)
  }

  return (
    <div>
      <BoardBackground>
        <Board board={board} findLastMessage={findLastMessage} col={col} setUserLocation={setUserLocation} />
        <ChatBox messages={messages} user={user} room={room}/>
      </BoardBackground>
    </div>
  );
}

export default ChatRoomScreen;
