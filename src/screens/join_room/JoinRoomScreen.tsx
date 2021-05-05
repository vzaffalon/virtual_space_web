import { useState, useEffect } from "react";
import { Input, Button, Avatar } from "antd";
import { JoinRoomContainer } from "./styled/JoinRoomStyled";
import { useHistory, useLocation } from "react-router-dom";
import { Room } from "../../interfaces/room/room.interface";
import { User } from "../../models";

interface State {
  room: Room;
}

function JoinRoomScreen() {
  const [name, setName] = useState("")
  let history = useHistory();
  const location = useLocation<State>();
  const { room } = location.state;

  const joinRoom = () => {
    User.create({name: name, position: 0, room_id: room._id}).then((response: any) => {
      history.push("/room", { room: room, user: response.data })
    });
  }

  const onChange = (e: any) => {
      setName(e.target.value)
  };

  useEffect(() => {
  }, []);

  return (
    <JoinRoomContainer>
      <h2>What is your name?</h2>
      <Avatar
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
            }}
            size={120}
            gap={4}
          >
            {name}
      </Avatar>
      <Input style={{width: 300, top: 10}} placeholder="Insert here" onChange={(value) => onChange(value)}></Input>
      <Button style={{top: 30}} type="primary" onClick={() => joinRoom()}>Enter the room</Button>
    </JoinRoomContainer>
  );
}

export default JoinRoomScreen;
