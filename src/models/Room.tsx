import api from "./ApiConsts";
import axios from "axios";
import { Rooms } from "../interfaces/room/rooms.interface";

const model_uri = "rooms";

const list = async () => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Rooms>(`${api.uri}${model_uri}`));
  });
};

export default {
  list,
};
