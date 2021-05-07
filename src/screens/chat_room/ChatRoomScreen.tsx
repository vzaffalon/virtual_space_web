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
import api from "../../models/ApiConsts";

const socket: Socket = socketIOClient(api.uri);

interface State {
  room: Room;
  user: User;
}

function ChatRoomScreen() {
  const col = 14;
  const row = 14;
  const [board, setBoard] = useState(Array(col * row).fill({}));
  const [chatMessages, setChatMessages] = useState<Messages>([]);
  const [messagesQueue, setMessagesQueue] = useState<Messages>([]);
  const location = useLocation<State>();
  const { room, user } = location.state;
  const [logedInUser, setLogedInUser] = useState<User>(user);

  const addToQueue = (message: Message) => {
    const newQueue = [...messagesQueue, message]
    setMessagesQueue(newQueue)
  }

  const removeFromQueue = (message: Message) => {
    const newQueue = [...messagesQueue].filter((m: Message) => message._id !== m._id)
    setMessagesQueue(newQueue)
  }

  const setUserLocation = (position: number) => {
    user.position = position;
    UserModel.update(user).then((response: any) => {
      setLogedInUser(response.data)
    });
  };

  const getMessages = () => {
    MessageModel.list(room._id).then((response: any) => {
      setChatMessages(response.data);
    });
  };

  const getUsers = () => {
    UserModel.list(room._id).then((response: any) => {
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
      setChatMessages(messages)
    });

    socket.on("message", (message: Message) => {
      addToQueue(message)
    });
  };

  const setUpUsersSocket = (socket: Socket) => {
    socket.on("users", (users: Users) => {
      setBoardUsers(users);
    });
  };

  useEffect(() => {
    getUsers();
    setUpSocketIO();

    return () => {
      socket.off("messages", () => {});
      socket.off("users", () => {});
      UserModel.remove(logedInUser);
    };
  }, []);

  return (
    <div>
      <BoardBackground>
        <h2 style={{marginTop: 140, marginBottom: 5}}>Welcome to {room.name}</h2>
        <h3 style={{marginTop: 10, marginBottom: 20}}>Click close to a person to talk to them</h3>
        <Board
          user={user}
          board={board}
          messagesQueue={messagesQueue}
          removeFromQueue={removeFromQueue}
          col={col}
          setUserLocation={setUserLocation}
        />
        <h3 style={{marginTop: 20}}>Chat messages</h3>
        <ChatBox messages={chatMessages} user={logedInUser} room={room} />
      </BoardBackground>
    </div>
  );
}

export default ChatRoomScreen;
