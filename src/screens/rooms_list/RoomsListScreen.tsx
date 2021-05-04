import { useState, useEffect } from "react";
import { Room } from "../../models";
import RoomList from "./components/RoomList";
import { RoomListContainer } from "./styled/RoomsListStyled";

function RoomsListScreen() {
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    Room.list().then((response: any) => {
      setRooms(response.data);
    });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <RoomListContainer>
      <h2>Choose a room to start interacting with your coworkers</h2>
      <RoomList rooms={rooms}></RoomList>
   </RoomListContainer>
  );
}

export default RoomsListScreen;
