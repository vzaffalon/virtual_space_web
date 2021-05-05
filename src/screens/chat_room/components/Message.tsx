import { Avatar } from "antd";
import { useEffect, useState } from "react";
import { ChatMessage, Cell, UserContent } from "../styled/BoardCellStyled";

import { User } from "../../../interfaces/user/user.interface";

const BoardCell: React.FC<{
  loggedInUser: User;
  cellUser: User;
  findLastMessage: Function;
}> = ({ loggedInUser, cellUser, findLastMessage }) => {
    const [showMessage, setShowMessage] = useState(false)

    const calculateMessageOpacity = () => {
        console.log("logged user position")
        console.log(loggedInUser.position)
        console.log("cell user position")
        console.log(cellUser.position)
        console.log("top portion")
        const topPortion = 196 - Math.abs(loggedInUser.position - cellUser.position)
        console.log(topPortion)
        let result = topPortion/196
        console.log("result")
        console.log(result)
        if(result < 0.35){
            result = 0.001
        }
        return result
    }

    useEffect(() => {
        setShowMessage(true)
        setTimeout(function(){
            setShowMessage(false)
        }, 3000);
    },[])

  const lastMessage = findLastMessage(cellUser._id)
  
  if(lastMessage){
    return (
        <ChatMessage className={showMessage ? '' : 'hidden'} id={lastMessage._id} opacity={calculateMessageOpacity()}>{lastMessage.content}</ChatMessage>
     );
  }else{
      return(<div></div>)
  }
};

export default BoardCell;
