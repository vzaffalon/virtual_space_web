import api from "./ApiConsts";
import axios from "axios";
import { Message } from "../interfaces/message/message.interface";

const model_uri = "messages";

const list = async () => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Categories>(`${api.uri}${model_uri}`));
  });
};

export default {
  list,
};
