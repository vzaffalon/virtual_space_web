import styled from "styled-components";
import { List, Card } from "antd";
import { useState, useEffect } from "react";
import { Room } from "../../models";

function App() {
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
}

export default App;
