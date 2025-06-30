// src/thunks/fetchConnections.js
import axios from "axios";
import { BASE_URL } from "../../env";
import { setConnectionsUser } from "../utils/connectionSlice";

// fetchConnections using Thunk
const fetchConnections = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const alreadyFetched = state.connection;
    if (alreadyFetched) return;
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(setConnectionsUser(res.data.data));
    } catch (error) {
      console.error("Error fetching connections", error);
    }
  };
};
export default fetchConnections;
