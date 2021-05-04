import api from "./ApiConsts";
import axios from "axios";
import { Messages } from "../interfaces/message/messages.interface";
import { Message, BaseMessage } from "../interfaces/message/message.interface";

const model_uri = "messages";

const list = async (room_id: string) => {
  return new Promise(async (resolve, reject) => {
    resolve(axios.get<Messages>(`${api.uri}rooms/${room_id}/${model_uri}`));
  });
};

const create = async (payload: BaseMessage) => {
    return new Promise(async (resolve, reject) => {
      resolve(axios.post<BaseMessage>(`${api.uri}${model_uri}`, payload));
    });
};

export default {
  list,
  create
};
