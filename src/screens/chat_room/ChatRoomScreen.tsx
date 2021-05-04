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
const socket: Socket = socketIOClient(ENDPOINT);

interface State {
  room: Room;
  user: User;
}

function ChatRoomScreen() {
  const col = 14;
  const row = 14;
  const [board, setBoard] = useState(Array(col * row).fill({}));
  const [chatMessages, setChatMessages] = useState<Messages>([]);
  const location = useLocation<State>();
  const { room, user } = location.state;

  const setUserLocation = (position: number) => {
    console.log("user");
    console.log(user);
    user.position = position;
    UserModel.update(user);
  };

  const getMessages = () => {
    MessageModel.list(room._id).then((response: any) => {
      setChatMessages(response.data);
    });
  };

  const getUsers = () => {
    UserModel.list().then((response: any) => {
      setBoardUsers(response.data);
    });
  };

  const setBoardUsers = (users: Users) => {
    let newUsers = Array(col * row).fill({});
    users.map((user: User) => (newUsers[user.position] = user));
    setBoard(newUsers);
    getMessages();
  };

  const setUpSocketIO = () => {
    setUpMessagesSocket(socket);
    setUpUsersSocket(socket);
  };

  const setUpMessagesSocket = (socket: Socket) => {
    socket.on("messages", (messages: Messages) => {
      console.log(messages);
      setChatMessages(messages);
    });
  };

  const setUpUsersSocket = (socket: Socket) => {
    socket.on("users", (users: Users) => {
      console.log(users);
      setBoardUsers(users);
    });
  };

  useEffect(() => {
    getUsers();
    setUpSocketIO();

    return () => {
      socket.off("messages", () => {});
      socket.off("users", () => {});
    };
  }, []);

  const findLastMessage = (user_id: string) => {
    console.log("FIND LAST MESSAGE")
    console.log(chatMessages)
    console.log(user_id)
    const messageFound = chatMessages.find((message: Message) => (message.user_id = user_id));
    console.log(messageFound)
    return messageFound;
  };

  return (
    <div>
      <BoardBackground>
        <h2 style={{marginTop: 40, marginBottom: 20}}>Click close to a person to talk to them</h2>
        <Board
          board={board}
          findLastMessage={findLastMessage}
          col={col}
          setUserLocation={setUserLocation}
        />
        <h3 style={{marginTop: 40}}>Chat messages</h3>
        <ChatBox messages={chatMessages} user={user} room={room} />
      </BoardBackground>
    </div>
  );
}

export default ChatRoomScreen;
