import { List, Card } from "antd";
import { Room } from "../../../interfaces/room/room.interface";
import { Rooms } from "../../../interfaces/room/rooms.interface";
import { useHistory } from "react-router-dom";

const RoomList: React.FC<{
  rooms: Rooms;
}> = ({ rooms }) => {
    let history = useHistory();

    const selectRoom = (room: Room) => {
        history.push("/join", { room: room })
    }

  return (
    <List
      style={{width: 1000, marginTop: 20}}
      grid={{ gutter: 10, column: 4 }}
      dataSource={rooms}
      renderItem={(item: any, index: number) => (
        <>
          <List.Item onClick={() => selectRoom(item)}>
            <Card bodyStyle={{  cursor: "pointer" }} style={{height: 240}} title={item.name}>Click here to enter the room</Card>
          </List.Item>
        </>
      )}
    />
  );
};

export default RoomList;
