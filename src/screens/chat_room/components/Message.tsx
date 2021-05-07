import { useEffect, useState } from "react";
import { ChatMessage } from "../styled/BoardCellStyled";
import { User } from "../../../interfaces/user/user.interface";
import { Message } from "../../../interfaces/message/message.interface";

const BoardCell: React.FC<{
  loggedInUser: User;
  cellUser: User;
  message: Message;
  removeFromQueue: Function;
}> = ({ loggedInUser, cellUser, message, removeFromQueue }) => {
    const [showMessage, setShowMessage] = useState(false)

    const calculateMessageOpacity = () => {
        const topPortion = 196 - Math.abs(loggedInUser.position - cellUser.position)
        let result = topPortion/196
        if(result < 0.35){
            result = 0.001
        }
        return result
    }

    useEffect(() => {
        setShowMessage(true)
        setTimeout(function(){
            setShowMessage(false)
            setTimeout(function(){
                removeFromQueue(message)
            }, 1000);
        }, 3000);
    },[])

    return (<ChatMessage className={showMessage ? '' : 'hidden'} id={message._id} opacity={calculateMessageOpacity()}>{message.content}</ChatMessage>)
};

export default BoardCell;
