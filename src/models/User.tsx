import api from "./ApiConsts";
import axios from "axios";
import { Users } from "../interfaces/user/users.interface";
import { BaseUser, User } from "../interfaces/user/user.interface";

const model_uri = "users";

const list = async (room_id: string) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Users>(`${api.uri}${model_uri}?room_id=${room_id}`));
  });
};

const create = async (payload: BaseUser) => {
    return new Promise(async (resolve, reject) => {
      resolve(axios.post<BaseUser>(`${api.uri}${model_uri}`, payload));
    });
};

const remove = async (payload: User) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.delete<User>(`${api.uri}${model_uri}/${payload._id}`));
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
  create,
  remove
};
