import { userInfo, userLogin } from "../apis/user";

export const useGetInfo = async () => {
  const {data} = await userInfo()
  return data;
}

export const useLoginInUser = async (userData) => {
  const {data} = await userLogin(userData)
  return data;
}

