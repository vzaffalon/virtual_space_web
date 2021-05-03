import api from "./ApiConsts";
import axios from "axios";
import { Users } from "../interfaces/user/users.interface";
import { User } from "../interfaces/user/user.interface";

const model_uri = "users";

const list = async () => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Users>(`${api.uri}${model_uri}`));
  });
};

const update = async (payload: User) => {
    return new Promise(async (resolve, reject) => {
      resolve(axios.patch<User>(`${api.uri}${model_uri}/${payload._id}`, payload));
    });
};

export default {
  list,
  update
};
