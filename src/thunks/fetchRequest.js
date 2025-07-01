import axios from "axios";
import { BASE_URL } from "../../env";
import { addRequest } from "../utils/requestSlice";

const fetchRequest = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const alreadyFetched = state.request;
    if (alreadyFetched) return;
    const res = await axios.get(BASE_URL + "/user/request/received", {
      withCredentials: true,
    });
    dispatch(addRequest(res?.data?.data));
  };
};

export default fetchRequest;
