import { List } from "antd";
import { useEffect } from "react";
import { Board } from "./BoardStyled"
import BoardCell from "./BoardCell";


const Board: React.FC<{board: Array<any>}> = ({board}) => {
  useEffect(() => {}, []);

  return (
    <Board>
        <List
        grid={{ gutter: 0, column: col }}
        dataSource={board}
        renderItem={(item, index) => (
            <>
            <List.Item style={{ margin: 0 }}>
                <BoardCell item={item}/>
            </List.Item>
            </>
        )}
        />
    </Board>
  );
}

export default Board;
