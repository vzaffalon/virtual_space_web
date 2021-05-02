import styled from "styled-components";
import { List, Avatar } from "antd";
import { useState } from "react";
import floor from "./floor.png"
import "antd/dist/antd.css";

const Cell = styled.div`
  background: url(${floor}); 
  height: 60px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -8px;
`;

const BoardBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Board = styled.div`
  margin-top: 80px;
  width: 800px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

function App() {
  const col = 10;
  const row = 10;
  const [board, setBoard] = useState(Array(col * row).fill(0));

  const setUserLocation = (index: number) => {
    let arrayCopy = Array(col * row).fill(0);
    arrayCopy[index] = 1;
    setBoard(arrayCopy);
  };

  return (
    <div>
      <BoardBackground>
        <Board>
          <List
            style={{ flexDirection: "row" }}
            grid={{ gutter: 0, column: col }}
            dataSource={board}
            renderItem={(item, index) => (
              <>
                <List.Item style={{ margin: 0 }}>
                  <Cell onClick={() => setUserLocation(index)} title={"pica"}>
                    {item == 1 && (
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          verticalAlign: "middle",
                        }}
                        size="large"
                        gap={4}
                      >
                        Victor
                      </Avatar>
                    )}
                  </Cell>
                </List.Item>
              </>
            )}
          />
        </Board>
      </BoardBackground>
    </div>
  );
}

export default App;
