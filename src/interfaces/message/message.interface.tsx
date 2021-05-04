export interface BaseMessage {
    content: string
    user_id: string
    room_id: string
}
  
export interface Message extends BaseMessage {
    _id: string;
}