import { List, Card } from "antd";
import { Rooms } from "../../../interfaces/room/rooms.interface";

const RoomList: React.FC<{
  rooms: Rooms;
}> = ({ rooms }) => {
  return (
    <List
      grid={{ gutter: 10, column: 4 }}
      dataSource={rooms}
      renderItem={(item: any, index: number) => (
        <>
          <List.Item style={{ margin: 0 }}>
            <Card title={item.name}>Click here to enter the room</Card>
          </List.Item>
        </>
      )}
    />
  );
};

export default RoomList;
