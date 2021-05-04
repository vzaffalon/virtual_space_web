import api from "./ApiConsts";
import axios from "axios";
import { Users } from "../interfaces/user/users.interface";
import { BaseUser, User } from "../interfaces/user/user.interface";

const model_uri = "users";

const list = async (room_id: string) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Users>(`${api.uri}rooms/${room_id}/${model_uri}`));
  });
};

const create = async (payload: BaseUser) => {
    console.log(payload)
    return new Promise(async (resolve, reject) => {
      resolve(axios.post<BaseUser>(`${api.uri}${model_uri}`, payload));
    });
};

const update = async (payload: User) => {
    return new Promise(async (resolve, reject) => {
      resolve(axios.patch<User>(`${api.uri}${model_uri}/${payload._id}`, payload));
    });
};

export default {
  list,
  update,
  create
};
