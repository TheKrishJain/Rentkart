import { requestApi } from "../utils/ApiRequest";

export const getAllRoomsAvailable = async () => {
  return await requestApi("GET", 'rooms-list');
}