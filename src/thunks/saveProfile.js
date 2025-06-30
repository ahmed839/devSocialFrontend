import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../../env";

export const saveProfileThunk = (updateData) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(BASE_URL + "/profile/edit", updateData, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.user));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
};
