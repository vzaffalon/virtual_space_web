import styled from "styled-components";
import { List, Card } from "antd";
import { useState, useEffect } from "react";
import { Room } from "../../models";
import RoomList from "./components/RoomList";

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
    <div>
      <h3>Choose a room to start interacting with your coworkers</h3>
      <RoomList rooms={rooms}></RoomList>
   </div>
  );
}

export default RoomsListScreen;
