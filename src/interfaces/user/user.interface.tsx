export interface BaseUser {
    name: string
    position: number
    room_id: string
}
  
export interface User extends BaseUser {
    _id: number;
}